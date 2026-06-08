window.addEventListener('error', function(e) {
    const d = document.createElement('div');
    d.style.cssText = 'position:fixed;top:0;left:0;background:red;color:white;z-index:999999;padding:20px;font-size:20px;';
    d.textContent = 'JS ERROR: ' + (e.error ? e.error.message : e.message) + ' at ' + e.filename + ':' + e.lineno;
    document.body.appendChild(d);
});
window.addEventListener('unhandledrejection', function(e) {
    const d = document.createElement('div');
    d.style.cssText = 'position:fixed;top:0;left:0;background:red;color:white;z-index:999999;padding:20px;font-size:20px;';
    d.textContent = 'PROMISE REJECTION: ' + (e.reason ? e.reason.message : String(e.reason));
    document.body.appendChild(d);
});

import { createOverlays } from './components/Overlays.js';
import { createHeader } from './components/Header.js';
import { createHeroSlider } from './components/HeroSlider.js';
import { createServices } from './components/Services.js';
import { createOffers } from './components/Offers.js';
import { createFeaturedProducts } from './components/FeaturedProducts.js';
import { createFurnitureRating } from './components/FurnitureRating.js';
import { createTrendyCollection } from './components/TrendyCollection.js';
import { createFurnitureAd } from './components/FurnitureAd.js';
import { createTestimonials } from './components/Testimonials.js';
import { createBestSellers } from './components/BestSellers.js';
import { createRecentBlog } from './components/RecentBlog.js';
import { createSupport } from './components/Support.js';
import { createBrand } from './components/Brand.js';
import { createFooter } from './components/Footer.js';

function renderApp() {
    const app = document.getElementById('app');
    
    
    const overlays = createOverlays();
    const header = createHeader();
    
    const main = document.createElement('main');
    main.appendChild(createHeroSlider());
    main.appendChild(createServices());
    main.appendChild(createOffers());
    main.appendChild(createFeaturedProducts());
    main.appendChild(createFurnitureRating());
    main.appendChild(createTrendyCollection());
    main.appendChild(createFurnitureAd());
    main.appendChild(createTestimonials());
    main.appendChild(createBestSellers());
    main.appendChild(createRecentBlog());
    main.appendChild(createSupport());
    main.appendChild(createBrand());
    
    const footer = createFooter();
    
    
    for (const overlay of overlays) {
        app.appendChild(overlay);
    }
    app.appendChild(header);
    app.appendChild(main);
    app.appendChild(footer);
    
    
    window.dispatchEvent(new Event('load'));

    
    const script = document.createElement('script');
    script.src = './assets/main.js';
    document.body.appendChild(script);
}


renderApp();
