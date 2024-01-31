$(document).ready(function() {

    let anchors = document.querySelectorAll('.js-anchor')
    if (anchors.length > 0) {
        anchors.forEach(anchor => {
            anchor.onclick = function (e) {
                e.preventDefault();
                document.querySelector(`#${anchor.href.split('#')[1]}`).scrollIntoView({
                    block: 'start',
                    behavior: 'smooth',
                })
            }
        })
    }

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

    // SPINCREMENT FOR NUMBERS
    const spinNumbers = () => {

        let one = true;

        if (one && $('.spincrement').length > 0) {
            $(window).scroll(function(e) {
                var windowTopPos = Math.floor($(this).scrollTop()),
                menuTopPos = Math.floor($('.section-company').offset().top);
                
                if(windowTopPos >= menuTopPos - 500) {
                    if(one) {
                        $('.spincrement').spincrement({
                            from: 0,
                            duration: 5000,
                            thousandSeparator: " ",
                        });

                        one = false;
                    }
                }
            });
        }
    }

    spinNumbers();

    // FILIAL MAP
    $('.points__item').on('click', (e) => {
        
        if ($(e.target).hasClass('active')) {
            $($(e.target)).removeClass('active');
        } else {
            $('.points__item').removeClass('active');
            $($(e.target)).addClass('active');
        }
    });

    // CHECKER
    $('#check-code-input').on('focus', (e) => {
        $('.verification__form .input-style').addClass('focus');
    });

    $('#check-code-input').on('blur', (e) => {
        if (!$('#check-code-input').val().length) {
            $('.verification__form .input-style').removeClass('focus');
        }
    });

    // CHECKER INPUT MASK
    $('#check-code-input').inputmask({
        "mask": "99999 99999 99999",
        showMaskOnHover: false,
        showMaskOnFocus: false,
    });

    $('#checker').on('submit', (e) => {
        if (!$('#check-code-input').inputmask("isComplete")) {
            e.preventDefault();
            $('#check-code-input').addClass('error');
        } else {
            $('#check-code-input').removeClass('error');
        }
    });

});


