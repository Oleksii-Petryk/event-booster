import refs from './refs';
import modalTemplate from '../templates/modal-template.hbs';

// refs.selected.addEventListener('click', onOpenModal)

//     function onOpenModal() {
//         document.body.classList.add('show-modal');
//     }

    function renderModal() {
        const modalOpener = modalTemplate();
        refs.mainContent.insertAdjacentHTML('beforeend', modalOpener);
    }

    export function onEventCardClick(evt) {
      evt.preventDefault();
      console.dir(evt.target);
        if (!evt.target.classList.contains('events__item')) {
          return
        };
        renderModal();
        // refs.backdrop.classList.remove("is-hidden");
    }