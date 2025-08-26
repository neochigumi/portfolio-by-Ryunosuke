const open = document.getElementById('open');
const close = document.getElementById('close');
const works = document.getElementById('works');
const first = document.getElementById('first');
const left = document.getElementById('left-top');
const right = document.getElementById('right-bottom');
const list = document.getElementById('list-of-works');

open.addEventListener('click', () => {
  works.style.top = '0';
  left.style.transform = 'translateY(0)';
  right.style.transform = 'translateY(0)';
  list.style.transform = 'translateY(0)';
  first.style.opacity = '0';

  setTimeout(() => {
    close.style.opacity = '1';
    close.style.transform = 'translateY(0)';
    left.style.opacity = '1';
    left.style.transform = 'translateY(0)';
    right.style.opacity = '1';
    right.style.transform = 'translateY(0)';
    list.style.opacity = '1';
    list.style.transform = 'translateY(0)';
  }, 600);

  //openボタン自体も消す
  open.classList.add('hide');
});

close.addEventListener('click', () => {

  close.style.opacity = '0';
  left.style.opacity = '0';
  right.style.opacity = '0';
  list.style.opacity = '0';

  close.style.transform = 'translateY(-10px)';
  left.style.transform = 'translateY(-10px)';
  right.style.transform = 'translateY(-10px)';
  list.style.transform = 'tranlateY(-10px)';
  works.style.top = '-100vh';
  first.style.opacity = '1';

  setTimeout(() => {
    open.classList.remove('hide');
  }, 600);
});
