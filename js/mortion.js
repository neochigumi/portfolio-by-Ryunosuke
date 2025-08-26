const burger = document.querySelector('.open');
let loopTimer;
let isHovered = false;

//常時5秒おきにアニメーション
function startLoop() {
  loopTimer = setInterval(() => {
    if (!isHovered) {
      triggerAnimation();
    }
  }, 5000);
}

//アニメーション発火
function triggerAnimation() {
  burger.classList.add('animate');
  setTimeout(() => {
    burger.classList.remove('animate');
  }, 500);//アニメ時間に合わせて戻す
}

//hover時は即アニメーション&フラグ切替
burger.addEventListener('mouseenter', () => {
  isHovered = true;
  triggerAnimation();
})

burger.addEventListener('mouseleave', () => {
  isHovered = false;
})

//開始
startLoop();
