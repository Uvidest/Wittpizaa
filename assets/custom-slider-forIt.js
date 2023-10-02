
let customSliderForIt = new Swiper(".mySwiper", {
  breakpoints: {
    320: {
      enabled:false,
    },
    568: {
      enabled: true,
      spaceBetween: 16,
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 16,
      slidesPerView: 3,
    },
    992: {
      spaceBetween: 16,
      slidesPerView: 4
    }
  },
  navigation: {
    nextEl: ".custom-slider__next",
    prevEl: ".custom-slider__prev",
  },
});