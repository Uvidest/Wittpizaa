let tabs = document.querySelectorAll(".navigation-list-item")
tabs.forEach(tab => {
    let sectionId = tab.getAttribute("data-section-id")
    let el = document.querySelector(`[data-custom-section-id = "${sectionId}"]`);
    if (el) {
        tab.addEventListener("click", ()=>{
            {
                const y = el.getBoundingClientRect().top + window.pageYOffset - 150;
                window.scrollTo({top: y, behavior: "smooth"});
            }
        });
    }
})
let scrollBarController = document.querySelector(".animation-scrollbar")
scrollBarController.style.width = tabs[0].offsetWidth + "px"
let sectionTabs = document.querySelectorAll("[data-custom-section-id]")
sectionTabs.forEach(sectionTabs => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const intersecting = entry.isIntersecting
            if (intersecting){
                changeScrollBarPosition(sectionTabs)
                tabs.forEach(tab => {
                    tab.classList.remove("active")
                })
            }
        })
    }, { rootMargin: `-${window.innerHeight/2 - 40}px 0px -${window.innerHeight/2 - 40}px 0px ` })
    observer.observe(sectionTabs)

})
function changeScrollBarPosition(section){
    let activeTab
    tabs.forEach(tab => {
        tab.classList.remove("active")
        if (tab.getAttribute("data-section-id") == section.getAttribute("data-custom-section-id")){
            activeTab = tab
        }

    })
    scrollBarController.style.left = activeTab.offsetLeft+"px"
    scrollBarController.style.width = activeTab.offsetWidth+"px"
}


