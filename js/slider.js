const slides = document.querySelectorAll('.slide');
// 全要素全取得
let currentIndex = 0;
// 一番最初のスライド(一枚目は0番スタート)

function showSlide(index) {
  slides.forEach((slides, i) => {
    slides.classList.toggle('active', i === index);
  });
  // function 関数名()
  // forEachは要素の集合体に対して一個ずつ処理したい時に使う
  // toggleは付けたり外したりするときに便利な機能

  const currentSlide = slides[index];
  // 今表示しようとしてるスライド要素を取得

  if (currentSlide.tagName === 'VIDEO') {
    currentSlide.currentTime = 0;
    currentSlide.play();

    currentSlide.onended = () => {
      console.log('動画終了');
      goToNextSlide();
    };
  } else {
    setTimeout(() => {
      goToNextSlide();
    }, 3000);
  }

  // もし動画やったら↓
  // 再生位置０,動画再生命令,終了後次のスライド自動進行
  // 画像だったら↓
  // 3秒間表示した後次へ自動進行
}

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);

  // 次のスライドに切り替える関数を定義
  // 最初の0番に+1して次へ
  // 最後まで行ったら、% slides.lengthで3/3余り0で元に戻る
  // 最後の行は()の数値に見合ったスライドを表示させてる
}

showSlide(currentIndex);
// 今ここで初めて一枚目が表示される
// 上はここを通る前の関数を準備してる段階