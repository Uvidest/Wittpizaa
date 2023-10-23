const video = document.querySelector('.video-controll__video');
const btn = document.querySelector('.video-controll__btn');

function toggleVideo() {
  if (btn.getAttribute('data-state') === 'play') {
    btn.setAttribute('data-state', 'pause');
    video.pause();
  } else {
    btn.setAttribute('data-state', 'play');
    video.play();
  }
}
btn.addEventListener('click', toggleVideo);