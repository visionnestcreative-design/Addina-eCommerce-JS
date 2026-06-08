import { el } from '../utils/dom.js';
import { iconDot, iconRatingStars } from '../utils/icons.js';

export function createFurnitureRating() {
    return el('section', { className: 'furniture-rating overflow-hidden theme-bg-2' },
        el('div', { className: 'row g-0 align-items-center' },
            el('div', { className: 'col-xl-6' },
                el('div', { className: 'furniture-rating__left-item' },
                    el('div', { className: 'furniture-ad__item frl-item bg-furniture' },
                        el('div', { className: 'fad-content' },
                            el('h6', { className: 'text-white mb-20 text-uppercase' }, 'HOT DEAL furniture'),
                            el('h2', { className: 'text-capitalize text-white', innerHTML: 'Live Furniture <br> Your Love' }),
                            el('a', { className: 'border__btn-f mt-35 bg-white text-black', href: 'product-details.html' },
                                'Buy Now',
                                el('span', {}, el('i', { className: 'fa-regular fa-angle-right' }))
                            )
                        )
                    )
                )
            ),
            el('div', { className: 'col-xl-6' },
                el('div', { className: 'furniture-rating__right-item' },
                    el('img', { className: 'w-100', src: './assets/bg-image.png', alt: 'image' }),
                    
                    el('div', { className: 'rating-dot' },
                        el('div', { innerHTML: iconDot }),
                        el('ul', {},
                            el('li', {}, el('h6', {}, 'Chair Pillow')),
                            el('li', { className: 'py-1', innerHTML: iconRatingStars }),
                            el('li', {}, el('span', {}, 'USD 190.00'))
                        )
                    ),
                    
                    el('div', { className: 'rating-dot dot-two' },
                        el('div', { innerHTML: iconDot }),
                        el('ul', {},
                            el('li', {}, el('h6', {}, 'Dining Table')),
                            el('li', { className: 'py-1', innerHTML: iconRatingStars }),
                            el('li', {}, el('span', {}, 'USD 190.00'))
                        )
                    ),
                    
                    el('div', { className: 'rating-dot dot-three' },
                        el('div', { innerHTML: iconDot }),
                        el('ul', {},
                            el('li', {}, el('h6', {}, 'Arm Sofa')),
                            el('li', { className: 'py-1', innerHTML: iconRatingStars }),
                            el('li', {}, el('span', {}, 'USD 190.00'))
                        )
                    )
                )
            )
        )
    );
}
