import { el } from '../utils/dom.js';

export const brands = [
    './assets/brand-01.png',
    './assets/brand-02.png',
    './assets/brand-03.png',
    './assets/brand-04.png',
    './assets/brand-05.png'
];

export function createBrand() {
    return el('div', { className: 'brand-area pt-100 pb-100' },
        el('div', { className: 'container' },
            el('div', { className: 'brand-grid border-0' },
                ...brands.map(brand => 
                    el('div', { className: 'brand-item border-0 p-0' },
                        el('div', { className: 'brand-thumb' },
                            el('img', { src: brand, alt: '' })
                        )
                    )
                )
            )
        )
    );
}
