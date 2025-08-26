function setFullHeight() {
  document.body.style.height = window.innerHeight + 'px';
}
setFullHeight();
window.addEventListener('resize', setFullHeight);