import refs from './refs';
import modalTemplate from '../templates/modal-template.hbs';


    function renderModal() {
        const modalOpener = modalTemplate();
        refs.mainContent.insertAdjacentHTML('beforeend', modalOpener);
    }

export function onEventCardClick(evt) {
  try {
        console.log(refs.eventCard);
        console.dir(evt.target);
         if (!e.target.classList.contains('events__item')) {
    return
  };

        renderModal();

      } catch (error) {
        console.log('error');
      }
        
        
        // refs.backdrop.classList.remove("is-hidden");
};