import { el } from '../utils/dom.js';
import { services } from '../data/services.js';

export function createServices() {
    return el('section', { className: 'furniture-service pt-100 pb-100' },
        el('div', { className: 'container' },
            el('div', { className: 'row g-4' },
                ...services.map(service => 
                    el('div', { className: 'col-xl-3 col-lg-3 col-md-6 col-sm-6' },
                        el('div', { className: 'furniture-service__item' },
                            el('div', { className: 'fsr-icon', innerHTML: service.svg }),
                            el('div', { className: 'frs-content' },
                                el('h6', {}, service.title),
                                el('p', {}, service.description)
                            )
                        )
                    )
                )
            )
        )
    );
}
