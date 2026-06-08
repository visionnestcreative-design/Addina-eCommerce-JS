import { el } from '../utils/dom.js';

export function createFurnitureAd() {
    return el('section', { className: 'furniture-ad pb-100' },
        el('div', { className: 'container' },
            el('div', { className: 'row g-4' },
                el('div', { className: 'col-xxl-7 col-xl-6' },
                    el('div', { 
                        className: 'furniture-ad__item h-100 bg-image',
                        dataset: { background: 'assets/imgs/furniture/ad/ad-discount.png' },
                        style: { backgroundImage: 'url("assets/imgs/furniture/ad/ad-discount.png")' }
                    },
                        el('div', { className: 'fad-content' },
                            el('h6', { className: 'text-white mb-20 text-uppercase' }, 'HOT DEAL furniture'),
                            el('h2', { className: 'text-capitalize text-white', innerHTML: 'Furniture limit offer <br> 30% Off' }),
                            el('a', { className: 'border__btn-f mt-35', href: 'product-details.html' },
                                'Buy Now',
                                el('span', {}, el('i', { className: 'fa-regular fa-angle-right' }))
                            )
                        )
                    )
                ),
                el('div', { className: 'col-xxl-5 col-xl-6' },
                    el('div', { 
                        className: 'furniture-ad__item  h-100 bg-image',
                        dataset: { background: 'assets/imgs/furniture/ad/ad-timer.png' },
                        style: { backgroundImage: 'url("assets/imgs/furniture/ad/ad-timer.png")' }
                    },
                        el('div', { className: 'fad-content fad-timer text-center' },
                            el('h6', { className: 'text-white mb-20 text-uppercase' }, 'HOT DEAL furniture'),
                            el('h2', { className: 'text-capitalize text-white mb-30' }, 'Deals OF the Week'),
                            el('div', { className: 'countdown-wrapper' },
                                el('ul', {},
                                    el('li', {}, el('span', { id: 'days' }, '217'), 'days'),
                                    el('li', {}, el('span', { id: 'hours' }, '9'), 'hrs'),
                                    el('li', {}, el('span', { id: 'minutes' }, '52'), 'mins'),
                                    el('li', {}, el('span', { id: 'seconds' }, '27'), 'secs')
                                )
                            ),
                            el('a', { className: 'border__btn-f mt-40', href: 'product-details.html' },
                                'Buy Now',
                                el('span', {}, el('i', { className: 'fa-regular fa-angle-right' }))
                            )
                        )
                    )
                )
            )
        )
    );
}
