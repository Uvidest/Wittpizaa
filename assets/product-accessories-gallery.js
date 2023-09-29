document.addEventListener('DOMContentLoaded', function() {
    let thumbnailsSlider = new Swiper('.product__thumbnails-slider.swiper', {
        spaceBetween: 10,
        slidesPerView: 4.5,
        slidesPerGroup: 4,
        watchSlidesProgress: true,
        breakpoints: {
            750: {
                spaceBetween: 16,
            }
        }
    })
    let mainSlider = new Swiper('.product__media-slider.swiper', {
        spaceBetween: 10,
        slidesPerView: 1,
        slidesPerGroup: 1,
        thumbs: {
            swiper: thumbnailsSlider,
        }
    })
})