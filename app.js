// Menu data - actual menu data
let menuData = {
    breakfast: [
        { name: { en: 'Normal Full', am: 'መደበኛ ፉል', om: 'Fuulii Normaalii' }, price: 170, image: 'images/breakfast/normal-full.jpg' },
        { name: { en: 'Avocado Full', am: 'አቮካዶ ፉል', om: 'Fuulii Avokaadoo' }, price: 180, image: 'images/breakfast/avocado-full.jpg' },
        { name: { en: 'Special Full', am: 'እስፔሻል ፉል', om: 'Fuulii Ispeeshaalii' }, price: 240, image: 'images/breakfast/special-full.jpg' },
        { name: { en: 'Fasting Chachebsa', am: 'የጾም ጨጨብሳ', om: 'Caccabsaa Soomaa' }, price: 190, image: 'images/breakfast/fasting-chachebsa.jpg' },
        { name: { en: 'Special Chachebsa', am: 'እስፔሻል ጨጨብሳ', om: 'Caccabsaa Ispeeshaalii' }, price: 170, image: 'images/breakfast/special-chachebsa.jpg' },
        { name: { en: 'Egg with Avocado', am: 'እንቁላል ከአቮካዶ ጋር', om: 'Killee Avokaadoo waliin' }, price: 180, image: 'images/breakfast/egg-with-avocado.jpg' },
        { name: { en: 'Egg Firfir', am: 'እንቁላል ፍርፍር', om: 'Firfirii killee' }, price: 190, image: 'images/breakfast/egg-firfir.jpg' },
        { name: { en: 'Special Firfir', am: 'እስፔሻል ፍርፍር', om: 'Firfirii Ispeeshaalii' }, price: 300, image: 'images/breakfast/special-firfir.jpg' },
        { name: { en: 'Fasting Firfir', am: 'የጾም ፍርፍር', om: 'Firfirii Soomaa' }, price: 200, image: 'images/breakfast/fasting-firfir.jpg' },
        { name: { en: 'Special Omelet', am: 'እስፔሻል ኦምሌት', om: 'Oomeleetii Ispeeshaalii' }, price: 250, image: 'images/breakfast/special-omelet.jpg' },
        { name: { en: 'Normal Omelet', am: 'መደበኛ ኦምሌት', om: 'Oomeleetii Normaalii' }, price: 180, image: 'images/breakfast/normal-omelet.jpg' },
        { name: { en: 'Pan Cake', am: 'ፓንኬክ', om: 'Paankeekii' }, price: 200, image: 'images/breakfast/pan-cake.jpg' },
        { name: { en: 'Humita Firfir', am: 'ሁሚታ ፍርፍር', om: 'Firfirii Humitaa' }, price: 250, image: 'images/breakfast/humita-firfir.jpg' },
        { name: { en: 'Normal Firfir', am: 'መደበኛ ፍርፍር', om: 'Firfirii Normaalii' }, price: 200, image: 'images/breakfast/normal-firfir.jpg' },
        { name: { en: 'Beef Firfir', am: 'ስጋ ፍርፍር', om: 'Firfirii Foonii' }, price: 250, image: 'images/breakfast/beef-firfir.jpg' },
        { name: { en: 'French Toast', am: 'ፈረንሳይ ቶስት', om: 'Firaanchii Toostii' }, price: 150, image: 'images/breakfast/french-toast.jpg' },
        { name: { en: 'Egg silse', am: 'እንቁላል ሲልሲ', om: 'Silsi Timaatimaa' }, price: 250, image: 'images/breakfast/egg-silse.jpg' }
    ],
    salad: [
        { name: { en: 'Mixed Salad', am: 'የተቀላቀለ ሰላጣ', om: 'Sallaxaa Walmakaa' }, price: 260, image: 'images/salad/mixed-salad.jpg' },
        { name: { en: 'Fruit Salad', am: 'የፍራፍሬ ሰላጣ', om: 'Sallaxaa Fuduraa' }, price: 250, image: 'images/salad/fruit-salad.jpg' },
        { name: { en: 'Tuna Salad', am: 'የቱና ሰላጣ', om: 'Sallaxaa Tuuna' }, price: 300, image: 'images/salad/tuna-salad.jpg' },
        { name: { en: 'Chicken Salad', am: 'የዶሮ ሰላጣ', om: 'Sallaxaa Lukkuu' }, price: 320, image: 'images/salad/chicken-salad.jpg' }
    ],
    chicken: [
        { name: { en: 'Chicken Combo', am: 'የዶሮ ኮምቦ', om: 'Komboo Lukkuu' }, price: 400, image: 'images/chicken/chicken-combo.jpg' },
        { name: { en: 'Chicken Wing', am: 'የዶሮ ክንፍ', om: 'Kochoo Lukkuu' }, price: 420, image: 'images/chicken/chicken-wing.jpg' },
        { name: { en: 'Chicken Leg', am: 'የዶሮ እግር', om: 'Miila Lukkuu' }, price: 450, image: 'images/chicken/chicken-leg.jpg' },
    ],
    burger: [
        { name: { en: 'Normal Burger', am: 'መደበኛ በርገር', om: 'Bargarii Normaalii' }, price: 270, image: 'images/burger/normal-burger.jpg' },
        { name: { en: 'Cheese Burger', am: 'ቺዝ በርገር', om: 'Bargarii Baadduu' }, price: 250, image: 'images/burger/cheese-burger.jpg' },
        { name: { en: 'Special Burger', am: 'እስፔሻል በርገር', om: 'Bargarii Ispeeshaalii' }, price: 380, image: 'images/burger/special-burger.jpg' },
        { name: { en: 'King Size Burger', am: 'ኪንግ ሳይዝ በርገር', om: 'Bargarii Hamma Guddaa (King Size)' }, price: 380, image: 'images/burger/king-size-burger.jpg' },
        { name: { en: 'Chips', am: 'ቺፕስ (ድንች ተጠብሶ)', om: 'Chiipsii' }, price: 260, image: 'images/burger/chips.jpg' }
    ],
    sandwich: [
        { name: { en: 'Chicken Sandwich', am: 'የዶሮ ሳንድዊች', om: 'Saandwiichii Lukkuu' }, price: 300, image: 'images/sandwich/chicken-sandwich.jpg' },
        { name: { en: 'Special Sandwich', am: 'ልዩ ሳንድዊች', om: 'Saandwiichii Ispeeshaalii' }, price: 250, image: 'images/sandwich/special-sandwich.jpg' },
        { name: { en: 'Vegetable Sandwich', am: 'የአትክልት ሳንድዊች', om: 'Saandwiichii Kuduraa' }, price: 160, image: 'images/sandwich/vegetable-sandwich.jpg' },
        { name: { en: 'Fish Sandwich', am: 'የአሳ ሳንድዊች', om: 'Saandwiichii Qurxummii' }, price: 270, image: 'images/sandwich/fish-sandwich.jpg' },
        { name: { en: 'Egg Sandwich', am: 'የእንቁላል ሳንድዊች', om: 'Saandwiichii killee' }, price: 160, image: 'images/sandwich/egg-sandwich.jpg' },
        { name: { en: 'Tuna Sandwich', am: 'የቱና ሳንድዊች', om: 'Saandwiichii Tuuna' }, price: 300, image: 'images/sandwich/tuna-sandwich.jpg' },
        { name: { en: 'Club Sandwich', am: 'ክለብ ሳንድዊች', om: 'Saandwiichii Kilaabii' }, price: 350, image: 'images/sandwich/club-sandwich.jpg' }
    ],
    pizza: [
        { name: { en: 'Special Pizza', am: 'ልዩ ፒዛ', om: 'Piizaa Addaa' }, price: 500, image: 'images/pizza/Special-pizza.jpg' },
        { name: { en: 'Volcano Pizza', am: 'ቮልኬኖ ፒዛ', om: 'Piizaa Volkaanoo' }, price: 480, image: 'images/pizza/Volcano-pizza.jpg' },
        { name: { en: 'Chicken Pizza', am: 'የዶሮ ፒዛ', om: 'Piizaa Lukkuu' }, price: 370, image: 'images/pizza/Chicken-pizza.jpg' },
        { name: { en: 'Tuna Pizza With Cheese', am: 'የቱና ፒዛ (ቺዝ ጋር)', om: 'Piizaa Tuuna (Baadduu Waliin)' }, price: 350, image: 'images/pizza/Tuna-pizza-with-cheese.jpg' },
        { name: { en: 'Beef Pizza', am: 'የሥጋ ፒዛ', om: 'Piizaa Foonii' }, price: 390, image: 'images/pizza/beef-pizza.jpg' },
        { name: { en: 'Vegetable Pizza', am: 'የአትክልት ፒዛ', om: 'Piizaa Kuduraa' }, price: 360, image: 'images/pizza/vegetable-pizza.jpg' },
        { name: { en: 'Vegetable Pizza With Tuna', am: 'የአትክልት ፒዛ ከቱና ጋር', om: 'Piizaa Kuduraa Tuuna Waliin' }, price: 300, image: 'images/pizza/vegetable-pizza-tuna.jpg' },
        { name: { en: 'Margarita Pizza', am: 'ማርጋሪታ ፒዛ', om: 'Piizaa Maargariitaa' }, price: 280, image: 'images/pizza/margarita-pizza.jpg' }
    ],
    fish: [
        { name: { en: 'Fish Goulash', am: 'የአሳ ጉላሽ', om: 'Gulaashii Qurxummii' }, price: 350, image: 'images/fish/fish-goulash.jpg' },
        { name: { en: 'Chicken Fish', am: 'ዶሮ አሳ', om: 'Qurxummii Lukkuu' }, price: 300, image: 'images/fish/chicken-fish.jpg' },
        { name: { en: 'Fish Finger', am: 'የአሳ ፊንገር', om: 'Fiingerii Qurxummii' }, price: 300, image: 'images/fish/fish-finger.jpg' },
        { name: { en: 'Fish Lebleb', am: 'የአሳ ለብለብ', om: 'Labilabbii Qurxummii' }, price: 300, image: 'images/fish/fish-lebleb.jpg' },
        { name: { en: 'Fasting Combo Fish', am: 'የጾም የአሳ ኮምቦ', om: 'Komboo Qurxummii Soomaa' }, price: 250, image: 'images/fish/fastin-combo-fish.jpg' },

    ],
    rice: [
        { name: { en: 'Rice Vegetable', am: 'ሩዝ ከአትክልት ጋር', om: 'Ruuzii Kuduraa Waliin' }, price: 230, image: 'images/rice/rice-vegetable.jpg' },
        { name: { en: 'Rice Tomato', am: 'ሩዝ በቲማቲም', om: 'Ruuzii Timaatimii' }, price: 280, image: 'images/rice/rice-tomato.jpg' },
        { name: { en: 'Rice Meat', am: 'ሩዝ ከሥጋ ጋር', om: 'Ruuzii Foonii' }, price: 270, image: 'images/rice/rice-meat.jpg' },
        { name: { en: 'Rice with Chicken', am: 'ሩዝ ከዶሮ ጋር', om: 'Ruuzii Lukkuu Waliin' }, price: 250, image: 'images/rice/rice-chicken.jpg' },
        { name: { en: 'Rice Tuna', am: 'ሩዝ ከቱና ጋር', om: 'Ruuzii Tuuna' }, price: 250, image: 'images/rice/rice-tuna.jpg' }
    ],
    spaghetti: [
        { name: { en: 'Spaghetti with Tomato Sauce', am: 'ፓስታ በቲማቲም ሶስ', om: 'Paastaa Soosii Timaatimii' }, price: 300, image: 'images/spaghetti/spaghetti-tomato-sauce.jpg' },
        { name: { en: 'Spaghetti Tomato Cream Sauce', am: 'ፓስታ በቲማቲም ክሬም ሶስ', om: 'Paastaa Soosii Timaatimii Kireemii' }, price: 250, image: 'images/spaghetti/spaghetti-tomato-cream-sauce.jpg' },
        { name: { en: 'Spaghetti Chicken Sauce', am: 'ፓስታ በዶሮ ሶስ', om: 'Paastaa Soosii Lukkuu' }, price: 400, image: 'images/spaghetti/spaghetti-chicken-sauce.jpg' },
        { name: { en: 'Spaghetti Chicken Cream', am: 'ፓስታ በዶሮ ክሬም', om: 'Paastaa Lukkuu Kireemii' }, price: 400, image: 'images/spaghetti/spaghetti-chicken-cream.jpg' }
    ],
    'hot-drinks': [
        { name: { en: 'Tea', am: 'ሻይ', om: 'Shaayii' }, price: 50, image: 'images/hot-drinks/tea.jpg' },
        { name: { en: 'Coffee', am: 'ቡና', om: 'Bunaa' }, price: 80, image: 'images/hot-drinks/coffee.jpg' },
        { name: { en: 'Macchiato', am: 'ማኪያቶ', om: 'Maakiyaatoo' }, price: 70, image: 'images/hot-drinks/macchiato.jpg' },
        { name: { en: 'Milk', am: 'ወተት', om: 'Aannan' }, price: 80, image: 'images/hot-drinks/milk.jpg' },
        { name: { en: 'Fasting Macchiato', am: 'የጾም ማኪያቶ', om: 'Maakiyaatoo Soomaa' }, price: 70, image: 'images/hot-drinks/fasting-macchiato.jpg' },
        { name: { en: 'Cappuccino', am: 'ካፑቺኖ', om: 'Kaappuchiinnoo' }, price: 70, image: 'images/hot-drinks/cappuccino.jpg' },
        { name: { en: 'Hot Chocolate', am: 'ሞቃት ቸኮሌት', om: 'Chokoleetii Ho’aa' }, price: 90, image: 'images/hot-drinks/chocolate.jpg' },
        { name: { en: 'Flavour Tea', am: 'የተቀመመ ሻይ', om: 'Shaayii Fileevaarii' }, price: 70, image: 'images/hot-drinks/flavour-tea.jpg' },
        { name: { en: 'Spice Tea', am: 'እስፔሻል  ሻይ (ትልቅ)', om: 'Shaayii Ispeeshaalii Guddaa' }, price: 50, image: 'images/hot-drinks/spice-tea.jpg' },
        { name: { en: 'Special Tea Big', am: 'እስፔሻል  ሻይ (ትልቅ)', om: 'Shaayii Ispeeshaalii Guddaa' }, price: 100, image: 'images/hot-drinks/special-tea-big.jpg' },
        { name: { en: 'Special Tea Small', am: 'እስፔሻል ሻይ (ትንሽ)', om: 'Shaayii Ispeeshaalii Xiqqaa' }, price: 70, image: 'images/hot-drinks/special-tea-small.jpg' }
    ],
    juice: [
        { name: { en: 'Special Juice', am: 'እስፔሻል ጭማቂ', om: 'Cuunfaa Ispeeshaalii' }, price: 300, image: 'images/juice/special-juice.jpg' },
        { name: { en: 'Mango Juice', am: 'የማንጎ ጭማቂ', om: 'Cuunfaa Maangoo' }, price: 280, image: 'images/juice/mango-juice.jpg' },
        { name: { en: 'Papaya Juice', am: 'የፓፓያ ጭማቂ', om: 'Cuunfaa Paappaayaa' }, price: 280, image: 'images/juice/papaya-juice.jpg' },
        { name: { en: 'Sprise Juice', am: 'ስፕራይስ ጭማቂ', om: 'Cuunfaa Ispiriisii' }, price: 290, image: 'images/juice/sprite-juice.jpg' },
        { name: { en: 'Banana Juice', am: 'የሙዝ ጭማቂ', om: 'Cuunfaa Muuzii' }, price: 270, image: 'images/juice/banana-juice.jpg' },
        { name: { en: 'Strawberry Juice', am: 'የስትሮቤሪ ጭማቂ', om: 'Cuunfaa Istiroobarii' }, price: 290, image: 'images/juice/strawberry-juice.jpg' },
        { name: { en: 'Fasting Special Juice', am: 'የጾም እስፔሻል ጭማቂ', om: 'Cuunfaa Ispeeshaalii Soomaa' }, price: 290, image: 'images/juice/fasting-special-juice.jpg' },

    ],
    'soft-drinks': [
        { name: { en: 'Soft Drink', am: 'ለስላሳ መጠጦች', om: 'Dhugaatii Lalaafaa' }, price: 50, image: 'images/soft-drinks/soft-drink.jpg' },
        { name: { en: 'Ambo Water', am: 'አምቦ ውሃ', om: 'Bishaan Aamboo' }, price: 40, image: 'images/soft-drinks/ambo-water.jpg' },
        { name: { en: '1/2 L Water', am: 'ግማሽ ሊትር ውሃ', om: 'Bishaan Liitira ½' }, price: 30, image: 'images/soft-drinks/half-l-water.jpg' },
        { name: { en: '1 L Water', am: '1 ሊትር ውሃ', om: 'Bishaan Liitira 1' }, price: 35, image: 'images/soft-drinks/one-l-water.jpg' },
        { name: { en: '2 L Water', am: '2 ሊትር ውሃ', om: 'Bishaan Liitira 2' }, price: 40, image: 'images/soft-drinks/two-l-water.jpg' },
        { name: { en: 'Novida', am: 'ኖቪዳ', om: 'Nooviidaa' }, price: 70, image: 'images/soft-drinks/novida.jpg' },
        { name: { en: 'Nigus Malt', am: 'ንጉስ ማልት', om: 'Maaltii Niigus' }, price: 60, image: 'images/soft-drinks/nigus-malt.jpg' }
    ]
};

// Translations - placeholders, replace with actual translations
const translations = {
    en: {
        welcome: 'Welcome to our restaurant! Enjoy our delicious menu.',
        categories: {
            all: 'All',
            breakfast: 'Breakfast',
            burger: 'Burger',
            pizza: 'Pizza',
            sandwich: 'Sandwich',
            chicken: 'Chicken',
            fish: 'Fish',
            rice: 'Rice',
            spaghetti: 'Spaghetti',
            salad: 'Salad',
            'hot-drinks': 'Hot Drinks',
            juice: 'Juice',
            'soft-drinks': 'Soft Drinks'
        }
    },
    am: {
        welcome: 'እንኳን ደህና መጡ! የእኛን ምግብ ዝርዝር ይሞክሩ።', // Placeholder
        categories: {
            all: 'ሁሉም',
            breakfast: 'ቁርስ',
            burger: 'በርገር',
            pizza: 'ፒዛ',
            sandwich: 'ሳንድዊች',
            chicken: 'ዶሮ',
            fish: 'ዓሣ',
            rice: 'ሩዝ',
            spaghetti: 'ፓስታ',
            salad: 'ሰላጣ',
            'hot-drinks': 'ትኩስ መጠጦች',
            juice: 'ጭማቂ',
            'soft-drinks': 'ለስላሳ መጠጦች'
        }
    },
    om: {
        welcome: 'Baga nagaan dhufte! Menu keenya yalaa.', // Placeholder
        categories: {
            all: 'Hunda',
            breakfast: 'Ciree',
            burger: 'Baargari',
            pizza: 'Piizza',
            sandwich: 'Saandwiichii',
            chicken: 'Lukkuu',
            fish: 'Qurxummii',
            rice: 'Ruuzii',
            spaghetti: 'Paastaa',
            salad: 'Salaaxa',
            'hot-drinks': 'Dhugaatii ho\'aa',
            juice: 'Juusii',
            'soft-drinks': 'Dhugaatii laalaafaa'
        }
    }
};

// DOM elements
const languageSelect = document.getElementById('language-select');
const searchInput = document.getElementById('search-input');
const categoryBtns = document.querySelectorAll('.category-btn');
const menuContainer = document.getElementById('menu-container');
const welcomeText = document.getElementById('welcome-text');

// Current state
let currentLanguage = 'en';
let currentCategory = 'all';
let swRefreshing = false;

// Helper: get translated field (supports legacy string values)
function t(item, field) {
    const val = item[field];
    if (!val) return '';
    if (typeof val === 'object') {
        return val[currentLanguage] || val.en || '';
    }
    return val; // legacy string
}

// Load language from localStorage
function loadLanguage() {
    const saved = localStorage.getItem('language');
    if (saved && translations[saved]) {
        currentLanguage = saved;
        languageSelect.value = saved;
    }
    updateLanguage();
}

// Update language
function updateLanguage() {
    welcomeText.textContent = translations[currentLanguage].welcome;
    categoryBtns.forEach(btn => {
        const cat = btn.dataset.category;
        btn.textContent = translations[currentLanguage].categories[cat];
    });
    renderMenu();
}

// Render menu items
function renderMenu(items = null) {
    menuContainer.innerHTML = '';
    const itemsToRender = items || getItemsForCategory(currentCategory);

    const fallbackImage =
        'https://images.unsplash.com/photo-1550547660-d9450f859349';

    itemsToRender.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-item';

        const displayName = t(item, 'name') || item.name || '';
        const displayDesc = t(item, 'description');
        const imgSrc = item.image ? item.image : fallbackImage;

        card.innerHTML = `
            <img src="${imgSrc}" alt="${displayName}">
            <div class="menu-item-content">
                <h3>${displayName}</h3>
                ${displayDesc ? `<p class="desc">${displayDesc}</p>` : ''}
                <p>${item.price} Birr</p>
            </div>
        `;

        menuContainer.appendChild(card);
    });

    if (!itemsToRender || itemsToRender.length === 0) {
        const no = document.createElement('div');
        no.className = 'no-results';
        no.textContent = currentLanguage === 'am' ? 'ምንም አይታየም' : currentLanguage === 'om' ? 'Waa hin argamne' : 'No results found';
        menuContainer.appendChild(no);
    }
}


// Get items for category
function getItemsForCategory(category) {
    if (category === 'all') {
        return Object.values(menuData).flat();
    }
    return menuData[category] || [];
}

// Filter items by search
function filterItems(query) {
    const allItems = Object.values(menuData).flat();
    const q = query.toLowerCase();
    return allItems.filter(item => {
        const name = (t(item, 'name') || item.name || '').toLowerCase();
        return name.includes(q);
    });
}

// Event listeners
languageSelect.addEventListener('change', () => {
    currentLanguage = languageSelect.value;
    localStorage.setItem('language', currentLanguage);
    updateLanguage();
});

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        localStorage.setItem('lastCategory', currentCategory);
        // Clear any active search when user selects a category
        searchInput.value = '';
        try { localStorage.setItem('lastSearch', ''); } catch (e) { }
        renderMenu();
    });
});

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    try { localStorage.setItem('lastSearch', query); } catch (e) { }

    if (query) {
        // When searching, show only matching results and remove category active state
        const filtered = filterItems(query);
        categoryBtns.forEach(b => b.classList.remove('active'));
        renderMenu(filtered);
    } else {
        // Restore active category UI
        categoryBtns.forEach(b => b.classList.remove('active'));
        const activeBtn = Array.from(categoryBtns).find(b => b.dataset.category === currentCategory);
        if (activeBtn) activeBtn.classList.add('active');
        renderMenu();
    }
});

// Try to load menu.json (so menu can be updated independently and cached as JSON).
async function loadMenuData() {
    // Primary: try network fetch
    try {
        const resp = await fetch('menu.json');
        if (resp && resp.ok) {
            const json = await resp.json();
            menuData = json;
            try { localStorage.setItem('menuDataCache', JSON.stringify(json)); } catch (e) { }
            return;
        }
    } catch (e) {
        // network failed — continue to fallbacks
    }

    // Fallback 1: localStorage (saved from previous successful load)
    try {
        const cached = localStorage.getItem('menuDataCache');
        if (cached) {
            menuData = JSON.parse(cached);
            return;
        }
    } catch (e) { }

    // Fallback 2: Cache API (served by service worker)
    if ('caches' in window) {
        try {
            const cacheResp = await caches.match('menu.json');
            if (cacheResp) {
                const json = await cacheResp.json();
                menuData = json;
                try { localStorage.setItem('menuDataCache', JSON.stringify(json)); } catch (e) { }
                return;
            }
        } catch (e) { }
    }

    // If all fallbacks fail, keep inline `menuData` embedded in the file
}

// Initialize app: load menu data, then restore saved state (language, category, search)
loadMenuData().then(() => {
    // restore language
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
        languageSelect.value = savedLang;
    }

    // restore last category
    const savedCat = localStorage.getItem('lastCategory');
    if (savedCat && menuData[savedCat]) {
        currentCategory = savedCat;
    }

    // restore last search
    const savedSearch = localStorage.getItem('lastSearch') || '';
    searchInput.value = savedSearch;

    // set active class on restored category button
    categoryBtns.forEach(b => b.classList.remove('active'));
    const activeBtn = Array.from(categoryBtns).find(b => b.dataset.category === currentCategory);
    if (activeBtn) activeBtn.classList.add('active');

    updateLanguage();
    // if there's a saved search, apply filter
    if (savedSearch) {
        const filtered = filterItems(savedSearch);
        renderMenu(filtered);
    } else {
        renderMenu();
    }

    // Register service worker and add a user-friendly update prompt
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(reg => {
            console.log('Service Worker registered.', reg);

            // Ensure we check for an update right away
            if (reg.update) reg.update();

            // Create update banner (hidden) and append to header
            let updateBanner = document.getElementById('sw-update-banner');
            if (!updateBanner) {
                updateBanner = document.createElement('div');
                updateBanner.id = 'sw-update-banner';
                updateBanner.style.cssText = 'position:fixed;bottom:16px;left:16px;right:16px;padding:12px;background:#222;border:1px solid #FFD700;color:#fff;border-radius:6px;display:flex;justify-content:space-between;align-items:center;gap:12px;z-index:9999;';
                updateBanner.innerHTML = `<span>New version available</span><div><button id="sw-reload-btn" style="background:#FFD700;border:none;padding:8px 12px;border-radius:4px;cursor:pointer">Reload</button></div>`;
                updateBanner.style.display = 'none';
                document.body.appendChild(updateBanner);
            }

            function showUpdatePrompt(waitingWorker) {
                updateBanner.style.display = 'flex';
                const btn = document.getElementById('sw-reload-btn');
                btn.onclick = () => {
                    waitingWorker.postMessage({ type: 'SKIP_WAITING' });
                };
            }

            // If there's already an updated worker waiting, show prompt
            if (reg.waiting) {
                showUpdatePrompt(reg.waiting);
            }

            reg.addEventListener('updatefound', () => {
                const newWorker = reg.installing;
                if (!newWorker) return;
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // New update available — show prompt to user
                            showUpdatePrompt(reg.waiting || newWorker);
                        }
                    }
                });
            });
        }).catch(err => console.warn('Service Worker registration failed:', err));

        // When the new service worker takes control, reload so the user gets the new version
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (swRefreshing) return;
            swRefreshing = true;
            window.location.reload();
        });
    }
});

