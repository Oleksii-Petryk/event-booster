import refs from './refs.js';
import cardEventTemplate from '../templates/card-event-template.hbs';
import errorTemplate from '../templates/error-template.hbs';
import countryNotification from '../templates/country-notification.hbs';

export function renderEventsList(events) {
    const cardEventsMarkup = cardEventTemplate(events);
    refs.mainContent.insertAdjacentHTML('beforeend', cardEventsMarkup);
}

export function clearEventsList() {
    refs.mainContent.innerHTML = '';
    if (refs.footer.classList.contains('footer--error')) {
        refs.footer.classList.remove('footer--error');
    };
}

export function catchError() {
    const errorMarkup = errorTemplate();    
    refs.mainContent.innerHTML = errorMarkup;
    refs.footer.classList.add('footer--error');
}

export function renderNotification() {
    const notification = countryNotification();
    refs.mainContent.innerHTML = notification;
    refs.footer.classList.add('footer--error');
}
