import { el } from '../utils/dom.js';
import { featuredProducts } from '../data/products.js';
import { iconCart, iconQuickView, iconWishlist } from '../utils/icons.js';

function createProductItem(product) {
    return el('div', { className: 'product-item furniture__product' },
        product.discount ? el('div', { className: 'product-badge' },
            el('span', { className: 'product-trending' }, product.discount)
        ) : null,
        el('div', { className: 'product-thumb theme-bg-2' },
            el('a', { href: product.url },
                el('img', { src: product.image, alt: '' })
            ),
            el('div', { className: 'product-action-item' },
                el('button', { type: 'button', className: 'product-action-btn' },
                    el('div', { innerHTML: iconCart }),
                    el('span', { className: 'product-tooltip' }, 'Add to Cart')
                ),
                el('button', { 
                    type: 'button', 
                    className: 'product-action-btn',
                    dataset: { bsToggle: 'modal', bsTarget: '#producQuickViewModal' }
                },
                    el('div', { innerHTML: iconQuickView }),
                    el('span', { className: 'product-tooltip' }, 'Quick View')
                ),
                el('button', { type: 'button', className: 'product-action-btn' },
                    el('div', { innerHTML: iconWishlist }),
                    el('span', { className: 'product-tooltip' }, 'Add To Wishlist')
                )
            )
        ),
        el('div', { className: 'product-content' },
            el('h4', { className: 'product-title' },
                el('a', { href: product.url }, product.title)
            ),
            el('div', { className: 'user-rating' },
                ...Array.from({ length: product.rating }, () => 
                    el('i', { className: 'fal fa-star' })
                )
            ),
            el('div', { className: 'product-price' },
                el('span', { className: 'product-new-price' }, product.price)
            )
        )
    );
}

export function createFeaturedProducts() {
    return el('section', { className: 'discount-area p-relative section-space pt-0' },
        el('div', { className: 'container' },
            el('div', { className: 'section-title-wrapper-4 mb-40 text-center' },
                el('span', { className: 'section-subtitle-4 mb-10' }, 'top sale'),
                el('h2', { className: 'section-title-4' }, 'Featured Product')
            ),
            el('div', { className: 'discount-main p-relative' },
                el('div', { className: 'discount-slider-navigation furniture__navigation' },
                    el('button', { type: 'button', className: 'discount-slider-button-prev' },
                        el('i', { className: 'fa-regular fa-angle-left' })
                    ),
                    el('button', { type: 'button', className: 'discount-slider-button-next' },
                        el('i', { className: 'fa-regular fa-angle-right' })
                    )
                ),
                el('div', { className: 'row align-items-center' },
                    el('div', { className: 'col-xxl-12' },
                        el('div', { className: 'swiper furuniture-active' },
                            el('div', { className: 'swiper-wrapper' },
                                ...featuredProducts.map(product => 
                                    el('div', { className: 'swiper-slide' },
                                        createProductItem(product)
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}
