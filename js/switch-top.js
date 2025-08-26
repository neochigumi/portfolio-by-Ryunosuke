function transitionToNextPage() {
  const intro = document.querySelector('.intro-movie');
  const firstview = document.querySelector('.first-view');

  // 現ページを上にスライド
  intro.style.transform = 'translateY(-100%)';
  intro.style.opacity = '0';

  // 次ページを下からスライドイン
  firstview.style.transform = 'translateY(0)';
  firstview.style.opacity = '1';
}

