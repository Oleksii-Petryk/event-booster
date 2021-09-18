import refs from './refs';
import modalTemplate from '../templates/modal-template.hbs';
import { identity } from 'lodash';
import { getClicedCardObj } from './render-modal';

export function renderModal(evt) {
        const modalOpener = modalTemplate(evt);
        refs.backdrop.insertAdjacentHTML('beforeend', modalOpener);
    }

    export function onEventCardClick(evt) {
      evt.preventDefault();
      
        if (!evt.target.closest('li').classList.contains('events__item')) {
          return
        };
      refs.backdrop.classList.remove("is-hidden");
      const closeButton = document.querySelector('.modal__close-button');
      // closeButton.addEventListener('click', closeModal);
      refs.backdrop.addEventListener('click', onBackDropClick);
     let clickedEventId = evt.target.parentElement.dataset.id;
      getClicedCardObj(clickedEventId);
}
    
function closeModal(e) {
  refs.backdrop.classList.add("is-hidden");
}

function onBackDropClick(e) {
  if (e.target === e.currentTarget) {
    refs.backdrop.classList.add("is-hidden");
    refs.backdrop.removeEventListener('click', onBackDropClick);
  }
}
