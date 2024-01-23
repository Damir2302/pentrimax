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

    $("html").on("click", function (e) {
        if (
        !$(e.target).closest(".header-menu").length &&
        !$(e.target).closest("#menu").length
        ) {
            $('#page').removeClass('bg-overlay');
            $('#menu').removeClass('active');
        }
    });

    // BURGER MENU
    $('.header-menu').on('click', () => {
        $('#menu').toggleClass('active');
        $('#page').toggleClass('bg-overlay');
    });

    $('#menu-close').on('click', () => {
        $('#menu').toggleClass('active');
        $('#page').toggleClass('bg-overlay');
    })
    
    $('#menu .arrow-down').on('click', (e) => {
        $(e.target).parent().toggleClass('active');
        $(e.target).next().slideToggle();
    });

    // FILIAL MAP
    $('.points__item').on('click', (e) => {
        
        if ($(e.target).hasClass('active')) {
            $($(e.target)).removeClass('active');
        } else {
            $('.points__item').removeClass('active');
            $($(e.target)).addClass('active');
        }
    })
    
});


