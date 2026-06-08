import { el } from '../utils/dom.js';
import { heroSlides } from '../data/hero.js';

export function createHeroSlider() {
    return el('section', { 
        className: 'banner-4 p-relative furniture-banner-area fix bg-image pb-100', 
        dataset: { background: 'assets/imgs/furniture/banner/bg.png', bgColor: '#F5F1E6' },
        style: { backgroundImage: 'url("assets/imgs/furniture/banner/bg.png")', backgroundColor: 'rgb(245, 241, 230)' }
    },
        el('div', { className: 'swiper banner-active swiper-fade' },
            el('div', { className: 'swiper-wrapper' },
                ...heroSlides.map(slide => 
                    el('div', { className: 'swiper-slide' },
                        el('div', { className: 'banner-item-4 d-flex align-items-end' },
                            el('div', { className: 'container' },
                                el('div', { className: 'row g-5 align-self-end' },
                                    el('div', { className: 'col-xxl-6 col-lg-6' },
                                        el('div', { className: 'banner-content-4 furniture__content' },
                                            el('span', {}, slide.subtitle),
                                            el('h2', { className: 'banner-title-4', innerHTML: slide.title }),
                                            el('p', {}, slide.description),
                                            el('div', { className: 'banner-btn-wrapper furniture__btn-group' },
                                                el('a', { className: 'solid-btn', href: slide.btnUrl1 }, 
                                                    slide.btnText1, 
                                                    el('span', {}, el('i', { className: 'fa-regular fa-angle-right' }))
                                                ),
                                                el('a', { className: 'border__btn-banner', href: slide.btnUrl2 }, 
                                                    slide.btnText2, 
                                                    el('span', {}, el('i', { className: 'fa-regular fa-angle-right' }))
                                                )
                                            )
                                        )
                                    ),
                                    el('div', { className: 'col-xxl-6 col-lg-6' },
                                        el('div', { className: 'banner-thumb-wrapper-4 p-relative' },
                                            el('div', { className: 'banner-thumb-4 p-relative z-index-1' },
                                                el('img', { src: slide.image, alt: 'image' })
                                            ),
                                            el('div', { className: 'furniture-circle d-none d-lg-block' },
                                                el('img', { src: './assets/circle.png', alt: '' })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            el('div', { className: 'banner-dot-inner' },
                el('div', { className: 'banner-dot swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal' })
            )
        )
    );
}
