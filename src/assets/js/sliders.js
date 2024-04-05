$(document).ready(function() {

    const heroSlider = new Swiper(".hero .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 5000
        },

        pagination: {
            el: '.hero .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.hero .slider-arrow--next',
            prevEl: '.hero .slider-arrow--prev',
        },
    });

    $('.works-block').each(function(index) {
        var $this = $(this);
        $this.addClass('works-block-' + index);

        var worksSlider = new Swiper(`.works-block-${index} .swiper`, {
            slidesPerView: 2,
            spaceBetween: 10,
            observer: true,
            observeParents: true,

            navigation: {
                prevEl: `.works-block-${index} .slider-arrow--prev`,
                nextEl: `.works-block-${index} .slider-arrow--next`,
            },

            breakpoints: {
                744: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },

                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },

                1560: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }
        })
    });

    const partnersSlider = new Swiper(".partners .swiper", {
        slidesPerView: 3,
        spaceBetween: 10,

        pagination: {
            el: '.partners .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.section-partners .slider-arrow--next',
            prevEl: '.section-partners .slider-arrow--prev',
        },

        breakpoints: {
            744: {
                slidesPerView: 5,
                spaceBetween: 15,
            },

            1024: {
                slidesPerView: 6,
                spaceBetween: 20,
            },

            1560: {
                slidesPerView: 6,
                spaceBetween: 30,
            }
        }
    });

    const exampleSlider = new Swiper(".example .swiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        observer: true,
        observeParents: true,

        pagination: {
            el: '.example .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.example .slider-arrow--next',
            prevEl: '.example .slider-arrow--prev',
        },

        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            1560: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

});