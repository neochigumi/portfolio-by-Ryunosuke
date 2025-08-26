let swiperInstance = null;

function toggleSwiper() {
  const detail = document.querySelector('.about-detail');

  if (window.innerWidth <= 768) {
    // --- スマホの時 ---
    detail.classList.add('swiper');

    // 既存のwrapperがある場合は削除
    const oldWrapper = detail.querySelector('.swiper-wrapper');
    if (oldWrapper) oldWrapper.remove();

    // wrapperを作成
    const wrapper = document.createElement('div');
    wrapper.classList.add('swiper-wrapper');

    // 子要素を取得
    const aboutName = detail.querySelector('.about-name');
    const aboutMe = detail.querySelector('.about-me');
    const aboutCareer = detail.querySelector('.about-career');

    // --- 1枚目スライド ---
    const slide1 = document.createElement('div');
    slide1.classList.add('swiper-slide');
    slide1.appendChild(aboutName);
    slide1.appendChild(aboutMe);

    // --- 2枚目スライド ---
    const slide2 = document.createElement('div');
    slide2.classList.add('swiper-slide');
    slide2.appendChild(aboutCareer);

    // wrapperに追加
    wrapper.appendChild(slide1);
    wrapper.appendChild(slide2);

    // detailに追加
    detail.appendChild(wrapper);

    // Swiper 初期化（既存のインスタンスがなければ）
    if (!swiperInstance) {
      swiperInstance = new Swiper('.about-detail.swiper', {
        pagination: { el: '.swiper-pagination' },
      });
    }

  } else {
    // --- PCの時 ---
    detail.classList.remove('swiper');

    // Swiperが存在する場合は破棄
    if (swiperInstance) {
      swiperInstance.destroy(true, true); // true, true で完全リセット
      swiperInstance = null;
    }

    // wrapper 内の子要素を元に戻す
    const wrapper = detail.querySelector('.swiper-wrapper');
    if (wrapper) {
      const slides = Array.from(wrapper.children);
      slides.forEach(slide => {
        while (slide.firstChild) {
          detail.appendChild(slide.firstChild);
        }
      });
      wrapper.remove();
    }
  }
}

// ページロード＆リサイズ時に実行
window.addEventListener('load', toggleSwiper);
window.addEventListener('resize', toggleSwiper);
