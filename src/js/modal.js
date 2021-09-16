import refs from './refs';
import modalTemplate from '../templates/modal-template.hbs';

// refs.selected.addEventListener('click', onOpenModal)

//     function onOpenModal() {
//         document.body.classList.add('show-modal');
//     }

     function renderModal(card) {
        const modalOpener = modalTemplate(card);
        refs.mainContent.insertAdjacentHTML('beforeend', modalOpener);
    }

    export function onEventCardClick(evt) {
        evt.preventDefault();
        if (!evt.target.classList.contains('.events__item')) {
          return
        };

        renderModal(card);
        refs.backdrop.classList.remove("is-hidden");
    }