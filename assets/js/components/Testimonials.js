import { el } from '../utils/dom.js';
import { testimonials } from '../data/testimonials.js';
import { iconTestimonialQuote } from '../utils/icons.js';

export function createTestimonials() {
    return el('section', { 
        className: 'furniture-testimonial section-space bg-image',
        dataset: { background: 'assets/imgs/furniture/testimonial/bg.jpg' },
        style: { backgroundImage: 'url("assets/imgs/furniture/testimonial/bg.jpg")' }
    },
        el('div', { className: 'container' },
            el('div', { className: 'section-title-wrapper-4 is-white mb-40 text-center' },
                el('span', { className: 'section-subtitle-4 mb-10' }, 'Testimonials'),
                el('h2', { className: 'section-title-4' }, 'Client Feedback')
            ),
            el('div', { className: 'swiper testimonial-active-3' },
                el('div', { className: 'swiper-wrapper' },
                    ...testimonials.map(item => 
                        el('div', { className: 'swiper-slide' },
                            el('div', { className: 'furniture-testimonial__item' },
                                el('div', { className: 'ft-head' },
                                    el('div', { className: 'ft-info' },
                                        el('div', { className: 'fs-rating' },
                                            ...Array.from({ length: item.rating }, (_, i) => 
                                                
                                                
                                                
                                                el('i', { className: i < 4 ? 'fas fa-star' : 'fal fa-star' })
                                            )
                                        ),
                                        el('h5', {}, item.name),
                                        el('span', {}, item.role)
                                    ),
                                    el('div', { innerHTML: iconTestimonialQuote })
                                ),
                                el('p', {}, item.text)
                            )
                        )
                    )
                )
            ),
            el('div', { className: 'navigation__wrapprer text-center' },
                el('div', { className: 'common-slider-navigation' },
                    el('button', { className: 'testimonial-button-prev' },
                        el('i', { className: 'fa-regular fa-arrow-left' })
                    ),
                    el('button', { className: 'testimonial-button-next' },
                        el('i', { className: 'fa-regular fa-arrow-right' })
                    )
                )
            )
        )
    );
}
