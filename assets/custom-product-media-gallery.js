class customProductMedia extends HTMLElement {
    constructor() {
        super();
        this.Init()
    }
    Init(){
        const model3d = document.querySelector('.d_model_custom')
        this.model3d = model3d
        this.initMediaButtons()
        this.mainGallery = new Swiper('[data-swiper-container]', {
            loop: true,
            navigation: {
                nextEl: '[main-button-next]',
                prevEl: '[main-button-prev]',
            },
            effect: "fade",
        });
        const carousel = new Swiper('[data-swiper-carousel]', {
            slidesPerView: 5,
            spaceBetween: 10,
            breakpoints: {
                // when window width is >= 320px
                600: {
                    spaceBetween: 16
                }
            }
        });
        this.carousel = carousel
        this.mainGallery.on('slideChange', function (e) {
            let slide_length = carousel.wrapperEl.querySelectorAll('.swiper-slide').length
            carousel.slideTo((e.activeIndex - 1) % slide_length)
        });
        this.carousel.wrapperEl.querySelectorAll(".swiper-slide").forEach(slide => {
            slide.addEventListener("click", ()=>{
                let index = +slide.getAttribute("data-loop-index")
                this.mainGallery.slideTo(index)
                if (model3d){
                    this.hide3Dmodel()
                }
            })
        })
        if (this.model3d){
            this.initMediaButtons()
        }
    }
    setActiveMedia(variant){
        let featured_medias = this.querySelectorAll('[data-featured_media]')
        if (variant.featured_media.preview_image){
            this.mainGallery.destroy();
            this.carousel.destroy()

            let optionIndex = document.querySelector('[data-color-option-index]')
            optionIndex = optionIndex.getAttribute("data-color-option-index")
            featured_medias.forEach(featured_media => {
                featured_media.classList.remove("swiper-slide")
                featured_media.classList.add("hidden")
            })

            let new_featured_media = this.querySelectorAll(`[data-featured_media="${variant.featured_media.id}"]`)
            new_featured_media.forEach(media => {
                media.classList.add("swiper-slide")
                media.classList.remove("hidden")
            })
            this.updateSlides(variant[optionIndex], variant.featured_media.id)

            // this.carousel.update()
            this.Init()
            // featured_media.setAttribute("src", variant.featured_media.preview_image.src)
        }
    }

    updateSlides(color, featured_id){
        const newColor = color.toLowerCase().trim()
        const slides = this.querySelectorAll(".custom-product-media-slide, .custom-carousel-slide")
        slides.forEach(slide => {
            const colorSlide = slide.getAttribute("data-media-color")
            const idSlide = slide.getAttribute("data-media-id")
            if (colorSlide){
                if(colorSlide == newColor && idSlide != featured_id){
                    slide.classList.remove("hidden")
                    slide.classList.add("swiper-slide")
                }
                else {
                    slide.classList.add("hidden")
                    slide.classList.remove("swiper-slide")
                }
            }
        })

        const carouselSlides = this.querySelectorAll(".custom-carousel-slide.swiper-slide")
        for(let i = 0; i < carouselSlides.length; i++ ){
            carouselSlides[i].setAttribute("data-loop-index", i+1)

        }

    }
    initMediaButtons(){
            let model3dButton = document.querySelector('.model_button')
        if (model3dButton) {
            model3dButton.addEventListener("click", this.open3Dmodel)
        }
    }
    open3Dmodel(){
        let model3d = document.querySelector('.d_model_custom')
        model3d.classList.add("active")

    }
    hide3Dmodel(){
        let model3d = document.querySelector('.d_model_custom')
        model3d.classList.remove("active")

    }
}

customElements.define('custom-product-media', customProductMedia);