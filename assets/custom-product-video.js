let video = document.querySelector(".video-{{ section.id }} video")
if(video){
    let controller = document.querySelector(".controller-{{ section.id }}")
    controller?.addEventListener("click", ()=>{
        video.play()
        controller.classList.add("hidden")
    })
}