import { el } from '../utils/dom.js';

export function createSupport() {
    return el('section', { className: 'support-area section-space pb-0' },
        el('div', { className: 'container' },
            el('div', { className: 'row g-5' },
                el('div', { className: 'col-xxl-4 col-xl-4 col-lg-4 col-md-6' },
                    el('div', { className: 'support-item' },
                        el('div', { className: 'support-content' },
                            el('h3', {}, 'Exclusive offers for you'),
                            el('p', {}, 'Get weekly deals, valuable health information and more.'),
                            el('a', { className: 'join-btn furniture-btn', href: 'index.html#' },
                                'sing up',
                                el('span', {}, el('i', { className: 'fa-regular fa-angle-right' }))
                            )
                        )
                    )
                ),
                el('div', { className: 'col-xxl-4 col-xl-4 col-lg-4 col-md-6' },
                    el('div', { className: 'support-item is-light-yellow' },
                        el('div', { className: 'support-content' },
                            el('h3', {}, 'Join Our Community'),
                            el('p', {}, 'Get weekly deals, valuable health information and more.'),
                            el('a', { className: 'join-btn furniture-btn', href: 'index.html#' },
                                'Join FREE now',
                                el('span', {}, el('i', { className: 'fa-regular fa-angle-right' }))
                            )
                        )
                    )
                ),
                el('div', { className: 'col-xxl-4 col-xl-4 col-lg-4 col-md-6' },
                    el('div', { className: 'support-item is-pale-pink' },
                        el('div', { className: 'support-content' },
                            el('h3', {}, 'Get our FREE app Now!'),
                            el('p', {}, 'Get weekly deals, valuable health information and more.'),
                            el('div', { className: 'mobile__app-download' },
                                el('a', { className: 'app__download', href: 'index.html#' },
                                    el('img', { src: './assets/play-store.png', alt: 'image not found' })
                                ),
                                el('a', { className: 'app__download', href: 'index.html#' },
                                    el('img', { src: './assets/apple-store.png', alt: 'image not found' })
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}
