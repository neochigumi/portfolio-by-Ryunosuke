document.addEventListener("DOMContentLoaded", () => {


  //スマホの時だけアニメーションカット
  if (window.innerWidth <= 768) {
    const intro = document.querySelector('.intro-movie');
    if (intro) {
      intro.remove(); // 要素ごと削除
    }
  }


  const paths = document.querySelectorAll("path");

  paths.forEach((path, i) => {
    const length = path.getTotalLength();
    const delay = i * 0.2;

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.opacity = 0;
    path.style.stroke = "#231815";
    path.style.fill = "#231815";

    path.style.animation = `
        drawLine 0.4s ease-out forwards ${delay}s,
        softFadeIn 0.4s ease-in forwards ${delay + 0.2}s
      `;
    // 0.2sの差で次の文字へ行くから
    // 総合計時間は、0.2s * (文字数 - 1) + 0.4sになる 

    // 総アニメ経過時間後に次の処理
    if (i === paths.length - 1) {
      const totalDelay = delay + 0.2 + 0.4;
      setTimeout(() => {
        transitionToNextPage();
      }, totalDelay * 1000);//秒からmsへ
    }
  });
});


