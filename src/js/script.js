const slider = tns({
    container: '.slider__inner',
    items: 1,
    autoplay: true,
    controls: false,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    speed: 1000,
    autoHeight: false,
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

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});


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
})(jQuery);