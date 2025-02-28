// content.js
function checkAndSeekVideo() {
  const progressBar = document.querySelector('.ytp-play-progress.ytp-swatch-background-color');

  if (progressBar && getComputedStyle(progressBar).backgroundColor === 'rgb(255, 204, 0)') {
    const player = document.getElementById('player');
    if (player) {
      const video = player.querySelector('video');
      if (video) {
        video.currentTime = video.duration;
      }
    }
  }
}

// Observe DOM changes to detect elements dynamically
const observer = new MutationObserver(checkAndSeekVideo);
observer.observe(document.body, { childList: true, subtree: true });
