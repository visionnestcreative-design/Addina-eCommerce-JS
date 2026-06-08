import { el } from '../utils/dom.js';
import { trendyTabs, trendyProducts } from '../data/trendyProducts.js';
import { iconCart, iconQuickView, iconWishlist } from '../utils/icons.js';

function createTrendyProductItem(product) {
    let badge = null;
    if (product.discount) {
        badge = el('span', { className: 'product-trending' }, product.discount);
    } else if (product.isNew) {
        badge = el('span', { className: 'product-trending' }, 'NEW');
    }

    return el('div', { className: 'col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-6' },
        el('div', { className: 'product-item furniture__product' },
            badge ? el('div', { className: 'product-badge' }, badge) : null,
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
                el('div', { className: 'user-rating mb-1' },
                    ...Array.from({ length: product.rating }, () => 
                        el('i', { className: 'far fa-star' })
                    )
                ),
                el('div', { className: 'product-price' },
                    el('span', { className: 'product-new-price' }, product.price)
                )
            )
        )
    );
}

export function createTrendyCollection() {
    return el('section', { className: 'fruniture-trendy section-space' },
        el('div', { className: 'container' },
            el('div', { className: 'furniture-trendy__header' },
                el('div', { className: 'section-title-wrapper-4 mb-40' },
                    el('span', { className: 'section-subtitle-4 mb-10' }, 'THIS MONTH'),
                    el('h2', { className: 'section-title-4' }, 'Trendy Collection')
                ),
                el('div', { className: 'bd-product__filter-style furniture-trendy__tab nav nav-tabs', role: 'tablist' },
                    ...trendyTabs.map(tab => 
                        el('button', {
                            className: `nav-link ${tab.active ? 'active' : ''}`,
                            id: `${tab.id}-tab`,
                            type: 'button',
                            role: 'tab',
                            dataset: { bsToggle: 'tab', bsTarget: `#${tab.id}` },
                            ariaSelected: tab.active ? 'true' : 'false',
                            tabIndex: tab.active ? null : '-1'
                        }, tab.label)
                    )
                )
            ),
            el('div', { className: 'product__filter-tab' },
                el('div', { className: 'tab-content', id: 'nav-tabContent' },
                    ...trendyTabs.map(tab => 
                        el('div', { 
                            className: `tab-pane fade ${tab.active ? 'active show' : ''}`, 
                            id: tab.id, 
                            role: 'tabpanel', 
                            ariaLabelledby: `${tab.id}-tab` 
                        },
                            el('div', { className: 'row g-4' },
                                ...trendyProducts[tab.id].map(product => createTrendyProductItem(product))
                            )
                        )
                    )
                )
            )
        )
    );
}
