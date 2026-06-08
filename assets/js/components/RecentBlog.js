import { el } from '../utils/dom.js';
import { recentBlogData } from '../data/recentBlog.js';

export function createRecentBlog() {
    return el('section', { className: 'blog-area theme-bg-2 section-space' },
        el('div', { className: 'container' },
            el('div', { className: 'row justify-content-center' },
                el('div', { className: 'col-xxl-4 col-xl-4 col-lg-4' },
                    el('div', { className: 'section-title-wrapper-4 text-center section-title-space' },
                        el('span', { className: 'section-subtitle-4 mb-10' }, 'Read blog'),
                        el('h2', { className: 'section-title-4' }, 'Recent Blog')
                    )
                )
            ),
            el('div', { className: 'row gy-5' },
                ...recentBlogData.map(item => 
                    el('div', { className: 'col-xxl-6 col-xl-6 col-lg-6' },
                        el('div', { className: 'blog-item-4 furniture__blog-item' },
                            el('div', { className: 'blog-content-4' },
                                el('div', { className: 'blog-tag-wrapper mb-15' },
                                    el('a', { className: 'blog-tag', href: item.tagUrl }, item.tag)
                                ),
                                el('div', { className: 'postbox__meta mb-15' },
                                    el('span', {}, 
                                        el('a', { href: item.authorUrl }, `By ${item.author}`)
                                    ),
                                    el('span', {}, item.date)
                                ),
                                el('h4', { className: 'blog-title' },
                                    el('a', { href: item.url, className: 'text-capitalize' }, item.title)
                                ),
                                el('a', { className: 'round-link', href: item.url },
                                    el('i', { className: 'fa-regular fa-angle-right' })
                                )
                            ),
                            el('div', { className: item.imageClass || 'blog-item-thumb w-img' },
                                el('a', { href: item.url },
                                    el('img', { src: item.image, alt: '' })
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}
