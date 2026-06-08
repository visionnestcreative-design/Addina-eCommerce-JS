import { el } from '../utils/dom.js';

export function createFooter() {
    return el('footer', { className: 'footer-bg' },
        el('div', { className: 'footer-area pt-100 pb-20' },
            el('div', { className: 'footer-style-4' },
                el('div', { className: 'container' },
                    el('div', { className: 'footer-grid-3' },
                        
                        el('div', { className: 'footer-widget-4' },
                            el('div', { className: 'footer-logo mb-35' },
                                el('a', { href: 'index.html' },
                                    el('img', { src: './assets/logo-light.svg', alt: 'image bnot found' })
                                )
                            ),
                            el('p', {}, 'It helps designers plan out where the content will sit, the content to be written and approved.'),
                            el('div', { className: 'theme-social' },
                                el('a', { className: 'furniture-bg-hover', href: 'index.html#' }, el('i', { className: 'fa-brands fa-facebook-f' })),
                                el('a', { className: 'furniture-bg-hover', href: 'index.html#' }, el('i', { className: 'fa-brands fa-twitter' })),
                                el('a', { className: 'furniture-bg-hover', href: 'index.html#' }, el('i', { className: 'fa-brands fa-linkedin-in' })),
                                el('a', { className: 'furniture-bg-hover', href: 'index.html#' }, el('i', { className: 'fa-brands fa-instagram' }))
                            )
                        ),
                        
                        el('div', { className: 'footer-widget-4' },
                            el('div', { className: 'footer-widget-title' },
                                el('h4', {}, 'Services')
                            ),
                            el('div', { className: 'footer-link' },
                                el('ul', {},
                                    el('li', {}, el('a', { href: 'error.html' }, 'Log In')),
                                    el('li', {}, el('a', { href: 'wishlist.html' }, 'Wishlist')),
                                    el('li', {}, el('a', { href: 'error.html' }, 'Return Policy')),
                                    el('li', {}, el('a', { href: 'error.html' }, 'Privacy policy')),
                                    el('li', {}, el('a', { href: 'faq.html' }, 'Shopping FAQs'))
                                )
                            )
                        ),
                        
                        el('div', { className: 'footer-widget-4' },
                            el('div', { className: 'footer-widget-title' },
                                el('h4', {}, 'Company')
                            ),
                            el('div', { className: 'footer-link' },
                                el('ul', {},
                                    el('li', {}, el('a', { href: 'index.html' }, 'Home')),
                                    el('li', {}, el('a', { href: 'about.html' }, 'About us ')),
                                    el('li', {}, el('a', { href: 'about.html' }, 'Pages')),
                                    el('li', {}, el('a', { href: 'blog.html' }, 'Blog')),
                                    el('li', {}, el('a', { href: 'contact.html' }, 'Contact us'))
                                )
                            )
                        ),
                        
                        el('div', { className: 'footer-widget footer-col-4' },
                            el('div', { className: 'footer-widget-title' },
                                el('h4', {}, 'Contact')
                            ),
                            el('div', { className: 'footer-info mb-35' },
                                el('p', { className: 'w-75' }, '4517 Washington Ave. Manchester, Kentucky 39495'),
                                el('div', { className: 'footer-info-item d-flex align-items-start pb-15 pt-15' },
                                    el('div', { className: 'footer-info-icon mr-20' },
                                        el('span', {}, el('i', { className: 'fa-solid fa-location-dot furniture-icon' }))
                                    ),
                                    el('div', { className: 'footer-info-text' },
                                        el('a', { 
                                            className: 'furniture-clr-hover', 
                                            target: '_blank', 
                                            href: 'https://www.google.com/maps/place/Orville+St,+La+Presa,+CA+91977,+USA/@32.7092048,-117.0082772,17z/data=!3m1!4b1!4m5!3m4!1s0x80d9508a9aec8cd1:0x72d1ac1c9527b705!8m2!3d32.7092003!4d-117.0060885' 
                                        }, '711-2880 Nulla St.')
                                    )
                                ),
                                el('div', { className: 'footer-info-item d-flex align-items-start' },
                                    el('div', { className: 'footer-info-icon mr-20' },
                                        el('span', {}, el('i', { className: 'fa-solid fa-phone furniture-icon' }))
                                    ),
                                    el('div', { className: 'footer-info-text' },
                                        el('a', { className: 'furniture-clr-hover', href: 'tel:012-345-6789' }, '+964 742 44 763'),
                                        el('p', {}, 'Mon - Sat: 9 AM - 5 PM')
                                    )
                                )
                            )
                        )
                    )
                )
            )
        ),
        
        el('div', { className: 'container' },
            el('div', { className: 'footer-copyright-area b-t' },
                el('div', { className: 'footer-copyright-wrapper' },
                    el('div', { className: 'footer-copyright-text' },
                        el('p', { className: 'mb-0' }, '© All Copyright 2024 by ', 
                            el('a', { target: '_blank', className: 'furniture-clr-hover', href: 'index.html#' }, 'Addina')
                        )
                    ),
                    el('div', { className: 'footer-payment d-flex align-items-center gap-2' },
                        el('div', { className: 'footer-payment-item mb-0' },
                            el('div', { className: 'footer-payment-thumb' },
                                el('img', { src: './assets/payoneer.png', alt: '' })
                            )
                        ),
                        el('div', { className: 'footer-payment-item mb-0' },
                            el('div', { className: 'footer-payment-thumb' },
                                el('img', { src: './assets/maser.png', alt: '' })
                            )
                        ),
                        el('div', { className: 'footer-payment-item' },
                            el('div', { className: 'footer-payment-thumb' },
                                el('img', { src: './assets/paypal.png', alt: '' })
                            )
                        )
                    ),
                    el('div', { className: 'footer-conditions' },
                        el('ul', {},
                            el('li', {}, el('a', { className: 'furniture-clr-hover', href: 'index.html#' }, 'Terms & Condition')),
                            el('li', {}, el('a', { className: 'furniture-clr-hover', href: 'index.html#' }, 'Privacy Policy'))
                        )
                    )
                )
            )
        )
    );
}
