document.getElementById("fullscreenBtn").addEventListener("click", () => {
  const iframe = document.getElementById("gameFrame");
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.mozRequestFullScreen) {
    iframe.mozRequestFullScreen();
  } else if (iframe.msRequestFullscreen) {
    iframe.msRequestFullscreen();
  }
});

document.getElementById("reloadBtn").addEventListener("click", () => {
  const iframe = document.getElementById("gameFrame");
  iframe.src = iframe.src;
});
