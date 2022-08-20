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

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});