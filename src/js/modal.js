import refs from './refs';
import modalTemplate from '../templates/modal-template.hbs';
import { identity } from 'lodash';
import { getClicedCardObj } from './render-modal';


window.addEventListener('keydown', onEscapeModalClose);

export function renderModal(evt) {
  const modalOpener = modalTemplate(evt);
  refs.backdrop.classList.remove("animation-close");
  refs.backdrop.classList.add("animation-open");
  refs.backdrop.insertAdjacentHTML('beforeend', modalOpener);
  const closeButton = document.querySelector('.modal__close-button');
  closeButton.addEventListener('click', closeModal);
}

export function onEventCardClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget.querySelector('.events')) {
        return;
  } else if (evt.target.closest('li').classList.contains('events__item')) {
    refs.backdrop.classList.remove("is-hidden");
    refs.backdrop.addEventListener('click', onBackDropClick);
    let clickedEventId = evt.target.closest('li').dataset.id;
    getClicedCardObj(clickedEventId);
  };
  return; 
}

function closeModal(e) {
  addBackdropClass();
}

function onBackDropClick(e) {
  if (e.target === e.currentTarget) {
    addBackdropClass();
    refs.backdrop.classList.add('is-hidden');
    refs.backdrop.removeEventListener('click', onBackDropClick);
  }
}

function onEscapeModalClose(evt) {
    if (evt.key !== 'Escape') {
        return;
    }
    addBackdropClass();
}

function addBackdropClass() {
      refs.backdrop.classList.remove("animation-open");
      refs.backdrop.classList.add("animation-close");
  refs.backdrop.classList.add("is-hidden");
    refs.backdrop.removeEventListener('click', onBackDropClick);
    refs.backdrop.innerHTML = "";
}