$(document).ready(function() {

    const productSlider = new Swiper(".product .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,

        pagination: {
            el: '.product .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.section-product .slider-arrow--next',
            prevEl: '.section-product .slider-arrow--prev',
        },

        breakpoints: {
            425: {
                slidesPerView: 2,
                spaceBetween: 20,
            }, 
            744: {
                slidesPerView: 3,
                spaceBetween: 20,
            }, 
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });

    const blogSLider = new Swiper(".blog .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,

        pagination: {
            el: '.blog .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.section-blog .slider-arrow--next',
            prevEl: '.section-blog .slider-arrow--prev',
        },

        breakpoints: {
            425: {
                slidesPerView: 2,
                spaceBetween: 20,
            }, 
            
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    });

    const worksSlider = new Swiper(".works .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,

        pagination: {
            el: '.works .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.section-works .slider-arrow--next',
            prevEl: '.section-works .slider-arrow--prev',
        },

        breakpoints: {
            425: {
                slidesPerView: 2,
                spaceBetween: 20,
            }, 
        }
    });

    const worksGallerySlider = new Swiper(".works-gallery .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,

        navigation: {
            nextEl: '.works-gallery .slider-arrow--next',
            prevEl: '.works-gallery .slider-arrow--prev',
        },

        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            
            744: {
                slidesPerView: 3,
                spaceBetween: 20,
            }, 
        }
    });

    const aboutPageBrandsSlider = new Swiper(".brands .swiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        observer: true,
        observeParents: true,

        pagination: {
            el: '.brands .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.brands .slider-arrow--next',
            prevEl: '.brands .slider-arrow--prev',
        },

        breakpoints: {
            744: {
                slidesPerView: 4,
                spaceBetween: 20,
            }, 
            1200: {
                slidesPerView: 6,
                spaceBetween: 20,
            }, 
            1440: {
                slidesPerView: 7,
                spaceBetween: 20,
            } 
        }
    });

});