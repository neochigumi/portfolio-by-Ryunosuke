const lines = document.querySelectorAll('.line');

function playAnimation() {
  lines.forEach((line, index) => {
    const delay = index * 180;

    setTimeout(() => {
      line.classList.add('animate');

      setTimeout(() =>{
        line.classList.remove('animate');
      }, 600);
    }, delay);
  });
}

// 5秒おきに自動再生
setInterval(() => {
  playAnimation();
}, 5000);

// hover時にも即再生
document.querySelector('.burger').addEventListener('mouseenter', playAnimation);