import { el } from '../utils/dom.js';
import { offers } from '../data/offers.js';

export function createOffers() {
    return el('section', { className: 'furniture-off pb-100' },
        el('div', { className: 'container' },
            el('div', { className: 'row g-4' },
                ...offers.map(offer => 
                    el('div', { className: 'col-lg-6' },
                        el('a', { 
                            href: offer.url, 
                            className: 'furniture-off__item bg-image d-block',
                            dataset: { background: offer.image },
                            style: { backgroundImage: `url("${offer.image}")` }
                        },
                            el('span', { className: 'fo-discount' }, offer.discount),
                            el('h3', { className: 'text-capitalize', innerHTML: offer.title }),
                            el('div', { className: 'solid-btn mt-30' },
                                offer.btnText,
                                el('span', {}, el('i', { className: 'fa-regular fa-angle-right' }))
                            )
                        )
                    )
                )
            )
        )
    );
}
