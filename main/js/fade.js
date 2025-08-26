document.addEventListener('DOMContentLoaded', () => {
  const open = document.querySelector('.open');
  const fadeTargets = document.querySelector('.fade-targets');

  open.addEventListener('click', () => {
    open.classList.toggle(active);
    const isOpen = open.classList.contains('active');
    fadeTargets.forEach(el => {
      el.classList.toggle('hidden', isOpen);
    });
  });
})