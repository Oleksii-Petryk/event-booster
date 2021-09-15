// const toUp = document.querySelector('.back_to_top');
import refs from './refs';

window.addEventListener('scroll', trackScroll);
refs.toUp.addEventListener('click', toTop);


function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      refs.toUp.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      refs.toUp.classList.remove('back_to_top-show');
    }
  }

  function toTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(toTop, 0);
    }
  }