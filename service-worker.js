
/* Production-ready service worker for offline support.
     Strategy summary:
     - Precache app shell (index.html, CSS, JS, menu.json, manifest, icons).
     - Runtime cache images and other fetched assets with Cache-First for images
         (serves from cache when offline and caches new images when online).
     - For navigation requests, respond with network-first then fall back to cached index.html.
     - Use cache versioning and clean up old caches on activate.
*/

const CACHE_VERSION = 'v1';
const PRECACHE = `cafe-app-shell-${CACHE_VERSION}`;
const RUNTIME = `cafe-runtime-${CACHE_VERSION}`;

// Files to precache — keep routes relative to site root.
const PRECACHE_URLS = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/menu.json',
    '/manifest.json'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(PRECACHE).then(cache => cache.addAll(PRECACHE_URLS))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== PRECACHE && key !== RUNTIME)
                    .map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

// Helper: Cache-first with network update for images and other static assets.
async function cacheFirstThenUpdate(request) {
    const cache = await caches.open(RUNTIME);
    const cached = await cache.match(request);
    if (cached) return cached;
    try {
        const response = await fetch(request);
        if (response && response.status === 200) {
            cache.put(request, response.clone()).catch(() => { });
        }
        return response;
    } catch (err) {
        return cached || Promise.reject(err);
    }
}

self.addEventListener('fetch', event => {
    const request = event.request;

    // Always bypass non-GET requests
    if (request.method !== 'GET') return;

    const url = new URL(request.url);

    // Serve precached assets (app shell) cache-first
    if (PRECACHE_URLS.includes(url.pathname) || PRECACHE_URLS.includes(url.pathname + '/')) {
        event.respondWith(
            caches.match(request).then(cached => cached || fetch(request).then(networkRes => {
                return caches.open(RUNTIME).then(cache => { cache.put(request, networkRes.clone()); return networkRes; });
            }).catch(() => cached))
        );
        return;
    }

    // Images: cache-first then network update
    if (url.pathname.startsWith('/images/')) {
        event.respondWith(cacheFirstThenUpdate(request));
        return;
    }

    // Provide stale-while-revalidate for menu.json so UI updates in background
    if (url.pathname === '/menu.json') {
        event.respondWith(
            caches.open(RUNTIME).then(async cache => {
                const cached = await cache.match(request);
                const networkPromise = fetch(request).then(networkRes => {
                    if (networkRes && networkRes.status === 200) {
                        cache.put(request, networkRes.clone()).catch(() => { });
                    }
                    return networkRes;
                }).catch(() => null);

                // Return cached immediately if available, otherwise wait for network
                return cached || networkPromise;
            })
        );
        return;
    }

    // Navigation requests: try network first, fall back to cached index.html
    if (request.mode === 'navigate' || (request.headers.get('accept') || '').includes('text/html')) {
        event.respondWith(
            fetch(request).then(response => {
                // update cache for navigation responses
                const copy = response.clone();
                caches.open(RUNTIME).then(cache => cache.put('/index.html', copy)).catch(() => { });
                return response;
            }).catch(() => caches.match('/index.html'))
        );
        return;
    }

    // Default: try cache first, then network and populate runtime cache
    event.respondWith(
        caches.match(request).then(cached => {
            if (cached) return cached;
            return fetch(request).then(response => {
                return caches.open(RUNTIME).then(cache => {
                    try { cache.put(request, response.clone()); } catch (e) { }
                    return response;
                });
            }).catch(() => cached);
        })
    );
});

// Listen for skipWaiting message from the page to activate new SW immediately.
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});