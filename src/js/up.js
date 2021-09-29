import refs from './refs';

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { 
    if (!refs.toUp.classList.contains("back_to_top__show")) {
      refs.toUp.classList.remove("back_to_top__hover")
      refs.toUp.classList.remove("animate__zoomOutDown");
      refs.toUp.classList.add("back_to_top__show");
      refs.toUp.classList.add("animate__zoomInDown");
    }
  }
  else { 
    if(refs.toUp.classList.contains("back_to_top__show")) {
      refs.toUp.classList.remove("back_to_top__show");
      refs.toUp.classList.remove("animate__zoomInDown");
      refs.toUp.classList.add("animate__zoomOutDown");
    }
  }
}

refs.toUp.addEventListener('click', () => refs.toUp.classList.add("back_to_top__hover"))