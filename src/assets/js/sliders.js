$(document).ready(function() {

    const heroSlider = new Swiper(".hero .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,

        pagination: {
            el: '.hero .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.hero .slider-arrow--next',
            prevEl: '.hero .slider-arrow--prev',
        },
    });

    $('.works-slider').each(function(index) {
        var $this = $(this);
        $this.addClass('works-slider-' + index);

        var worksSlider = new Swiper(`.works-slider-${index} .swiper`, {
            slidesPerView: 2,
            spaceBetween: 10,
            observer: true,
            observeParents: true,
    
            navigation: {
                prevEl: `.works-slider-${index} .slider-arrow--prev`,
                nextEl: `.works-slider-${index} .slider-arrow--next`,
            },

            breakpoints: {
                744: {
                    slidesPerView: 3,
                    spaceBetween: 20,                }
            }
        })

    })

});