import refs from './refs';
import { addFooter } from './render-events';

window.addEventListener('load', () => {
    refs.mask.classList.add('hide');
    setTimeout(() => { 
        refs.mask.remove();
    }, 600);
    // addFooter();
});



