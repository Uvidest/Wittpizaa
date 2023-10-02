const video = document.querySelector('.video-controll__video');
const btn = document.querySelector('.video-controll__btn');

function toggleVideo() {
  if (btn.getAttribute('data-state') === 'play') {
    btn.setAttribute('data-state', 'pause');
    video.pause();
    btn.innerHTML = '<svg width="73px" height="73px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff33"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#ffffff33" stroke-width="1.5"></circle> <path d="M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z" stroke="#ffffff33" stroke-width="1.5"></path> </g></svg>'; // Змінюємо на іконку play
  } else {
    btn.setAttribute('data-state', 'play');
    video.play();
    btn.innerHTML = '<svg fill="#ffffff33" height="73px" width="73px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="#ffffff33" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M256,465.455 c-115.493,0-209.455-93.961-209.455-209.455S140.507,46.545,256,46.545S465.455,140.507,465.455,256S371.493,465.455,256,465.455z "></path> </g> </g> <g> <g> <path d="M318.061,139.636c-12.853,0-23.273,10.42-23.273,23.273v186.182c0,12.853,10.42,23.273,23.273,23.273 c12.853,0,23.273-10.42,23.273-23.273V162.909C341.333,150.056,330.913,139.636,318.061,139.636z"></path> </g> </g> <g> <g> <path d="M193.939,139.636c-12.853,0-23.273,10.42-23.273,23.273v186.182c0,12.853,10.42,23.273,23.273,23.273 c12.853,0,23.273-10.42,23.273-23.273V162.909C217.212,150.056,206.792,139.636,193.939,139.636z"></path> </g> </g> </g></svg>'; // Змінюємо на іконку pause
  }
}
video.addEventListener('click', toggleVideo);
btn.addEventListener('click', toggleVideo);