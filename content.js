// content.js
function checkAndSeekVideo() {
  const progressBar = document.querySelector('.ytp-play-progress.ytp-swatch-background-color');

  if (progressBar) {
    const color = getComputedStyle(progressBar).backgroundColor
    if(!(color === 'rgb(255, 204, 0)' || color === '#fc0')) return
    const videos = Array.from(document.querySelectorAll('video'))
      .filter(video => !isNaN(video.duration) && video.duration > 0);
    videos.map(video => video.currentTime = video.duration)
  }
}

// Observe DOM changes to detect elements dynamically
const observer = new MutationObserver(checkAndSeekVideo);
observer.observe(document.body, { childList: true, subtree: true });
