import { el } from '../utils/dom.js';

export const bestSellersData = [
    { image: './assets/fs-01.png', title: 'stylish grey chair', price: 'USD 66.00', url: 'product-details.html', rating: 5 },
    { image: './assets/fs-02.png', title: 'Chair pillow', price: 'USD 66.00', url: 'product-details.html', rating: 5 },
    { image: './assets/fs-03.png', title: 'Alexander roll ..', price: 'USD 66.00', url: 'product-details.html', rating: 5 },
    { image: './assets/fs-04.png', title: 'wooden chair', price: 'USD 66.00', url: 'product-details.html', rating: 5 },
    { image: './assets/fs-05.png', title: 'Chair pillow', price: 'USD 66.00', url: 'product-details.html', rating: 5 },
    { image: './assets/fs-06.png', title: 'seater gray sofa', price: 'USD 66.00', url: 'product-details.html', rating: 5 }
];

export function createBestSellers() {
    return el('section', { className: 'furniture-seller section-space' },
        el('div', { className: 'container' },
            el('div', { className: 'section-title-wrapper-4 mb-40' },
                el('span', { className: 'section-subtitle-4 mb-10' }, 'THIS Week'),
                el('h2', { className: 'section-title-4' }, 'Best Sellers')
            ),
            el('div', { className: 'row g-4' },
                ...bestSellersData.map(item => 
                    el('div', { className: 'col-xl-4 col-lg-6 col-md-6' },
                        el('div', { className: 'furniture-seller__item' },
                            el('div', { className: 'fs-image' },
                                el('img', { src: item.image, alt: '' })
                            ),
                            el('div', { className: 'fs-content' },
                                el('h5', {}, 
                                    el('a', { href: item.url, className: 'text-capitalize' }, item.title)
                                ),
                                el('span', {}, item.price),
                                el('div', { className: 'fs-rating' },
                                    ...Array.from({ length: item.rating }, () => 
                                        el('i', { className: 'far fa-star' })
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
