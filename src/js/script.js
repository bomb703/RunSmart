const slider = tns({
    container: '.slider__inner',
    items: 1,
    autoplay: true,
    controls: false,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    speed: 1000,
    autoHeight: true,
    nav: false,
    navPosition: 'bottom',

    responsive: {
        320: {
            nav: true,
        },
        1120: {
            nav: false,
        },
    }
});
// tabs
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

//catalog
(function ($) {

    $(function () {

        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
            $(this)
                .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });


        function toggleSlide(item) {
            $(item).each(function (i) {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                })
            });
        };

        toggleSlide('.catalog-item__link')
        toggleSlide('.catalog-item__back')
    });

    // modal

    $('[data-modal=consultation').on('click', function () {
        $('.overlay, #consultation').fadeIn('fast');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('fast')
    });
    $('.button_order').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('fast');
        })
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                tel: "required",
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                name: "Пожалуйста, введите своё имя",
                tel: "Пожалуйста, введите номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введён адрес"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=tel]').mask("+372 (999) 999-9999")

})(jQuery);