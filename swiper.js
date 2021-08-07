var swiper = new Swiper(".hero-swiper", {
    autoplay: true,
    loop: true,
    speed: 500,
    allowTouchMove: true,
    followFinger: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



var swiper2 = new Swiper(".kids-swiper", {
    autoplay: true,
    loop: true,
    speed: 250,
    pauseOnMouseEnter: true,
});