
let customSliderForIt = new Swiper(".mySwiper", {
  breakpoints: {
    320: {
      enabled:false,
    },
    568: {
      loop: true,
      enabled: true,
      spaceBetween: 16,
      slidesPerView: 2,
    },
    768: {
      loop: true,
      spaceBetween: 16,
      slidesPerView: 3,
    },
    992: {
      loop: true,
      spaceBetween: 16,
      slidesPerView: 4
    }
  },
  navigation: {
    nextEl: ".custom-slider__next",
    prevEl: ".custom-slider__prev",
  },
});