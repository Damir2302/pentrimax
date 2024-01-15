$(document).ready(function() {

    // INPUT MASK PHONE NUMBER
    $('input[type="tel"]').inputmask({
        "mask": "+7 (999) 999-99-99",
        showMaskOnHover: false,
        showMaskOnFocus: false,

        onBeforePaste: function(pastedValue, opts) {
            return pastedValue.replace(/^8/, '');
        }
    });

    $('.header__menu').on('click', (e) => {
        if (!$(e.target).hasClass('active')) {
            $(e.target).addClass('active');
            $('.header__main').addClass('mobile-menu');
        } else {
            $('.header__main').removeClass('mobile-menu');
            $(e.target).removeClass('active');
        }
    });

    if ($(window).width() < 1200) {
        $('.navbar .arrow-down').on('click', (e) => {
            $(e.target).parent().toggleClass('active');
            $(e.target).next().slideToggle();
        });
    }

    

});


