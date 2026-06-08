import { el } from '../utils/dom.js';

export function createOverlays() {
    return [
        
        el('div', { id: 'preloader', style: { display: 'none' } },
            el('div', { className: 'bd-loader-inner' },
                el('div', { className: 'bd-loader' },
                    ...Array.from({ length: 8 }, () => el('span', { className: 'bd-loader-item' }))
                )
            )
        ),

        
        el('div', { 
            className: 'backtotop-wrap cursor-pointer',
            innerHTML: '<svg class="backtotop-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102"><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style="transition: stroke-dashoffset 10ms linear; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 307.919;"></path></svg>'
        }),

        
        el('div', { className: 'df-search-area' },
            el('div', { className: 'container' },
                el('div', { className: 'row' },
                    el('div', { className: 'col-xl-12' },
                        el('div', { className: 'df-search-form' },
                            el('div', { className: 'df-search-close text-center mb-20' },
                                el('button', { className: 'df-search-close-btn' })
                            ),
                            el('form', { action: '#' },
                                el('div', { className: 'df-search-input mb-10' },
                                    el('input', { type: 'text', placeholder: 'Search for product...' }),
                                    el('button', { type: 'submit' }, el('i', { className: 'flaticon-search-1' }))
                                ),
                                el('div', { className: 'df-search-category' },
                                    el('span', {}, 'Search by : '),
                                    el('a', { href: '#' }, 'Healthline, '),
                                    el('a', { href: '#' }, 'COVID-19, '),
                                    el('a', { href: '#' }, 'Surgery, '),
                                    el('a', { href: '#' }, 'Surgeon, '),
                                    el('a', { href: '#' }, 'Medical research')
                                )
                            )
                        )
                    )
                )
            )
        ),

        
        el('div', { className: 'body-overlay' }),

        
        el('div', { className: 'fix' },
            el('div', { className: 'offcanvas__info' },
                el('div', { className: 'offcanvas__wrapper' },
                    el('div', { className: 'offcanvas__content' },
                        el('div', { className: 'offcanvas__top mb-40 d-flex justify-content-between align-items-center' },
                            el('div', { className: 'offcanvas__logo' },
                                el('a', { href: 'index.html' },
                                    el('img', { src: './assets/logo-light.svg', alt: 'logo not found' })
                                )
                            ),
                            el('div', { className: 'offcanvas__close' },
                                el('button', {}, el('i', { className: 'fal fa-times' }))
                            )
                        ),
                        el('div', { className: 'offcanvas__search mb-25' },
                            el('form', { action: '#' },
                                el('input', { type: 'text', placeholder: 'What are you searching for?' }),
                                el('button', { type: 'submit' }, el('i', { className: 'far fa-search' }))
                            )
                        ),
                        el('div', { className: 'mobile-menu fix mb-40' }),
                        el('div', { className: 'offcanvas__contact mt-30 mb-20' },
                            el('h4', {}, 'Contact Info'),
                            el('ul', {},
                                el('li', { className: 'd-flex align-items-center' },
                                    el('div', { className: 'offcanvas__contact-icon mr-15' }, el('i', { className: 'fal fa-map-marker-alt' })),
                                    el('div', { className: 'offcanvas__contact-text' },
                                        el('a', { target: '_blank', href: 'https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873' }, '12/A, Mirnada City Tower, NYC')
                                    )
                                ),
                                el('li', { className: 'd-flex align-items-center' },
                                    el('div', { className: 'offcanvas__contact-icon mr-15' }, el('i', { className: 'far fa-phone' })),
                                    el('div', { className: 'offcanvas__contact-text' },
                                        el('a', { href: 'tel:+088889797697' }, '+088889797697')
                                    )
                                ),
                                el('li', { className: 'd-flex align-items-center' },
                                    el('div', { className: 'offcanvas__contact-icon mr-15' }, el('i', { className: 'fal fa-envelope' })),
                                    el('div', { className: 'offcanvas__contact-text' },
                                        el('a', { href: 'tel:+012-345-6789' }, el('span', { className: 'mailto:support@mail.com' }, 'support@mail.com'))
                                    )
                                )
                            )
                        ),
                        el('div', { className: 'offcanvas__social' },
                            el('ul', {},
                                el('li', {}, el('a', { href: '#' }, el('i', { className: 'fab fa-facebook-f' }))),
                                el('li', {}, el('a', { href: '#' }, el('i', { className: 'fab fa-twitter' }))),
                                el('li', {}, el('a', { href: '#' }, el('i', { className: 'fab fa-youtube' }))),
                                el('li', {}, el('a', { href: '#' }, el('i', { className: 'fab fa-linkedin' })))
                            )
                        )
                    )
                )
            )
        ),
        
        el('div', { className: 'offcanvas__overlay' }),
        el('div', { className: 'offcanvas__overlay-white' })
    ];
}
