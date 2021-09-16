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
}

export function catchError() {
    const errorMarkup = errorTemplate();    
    refs.mainContent.innerHTML = errorMarkup;
    refs.body.classList.add('body__bg--error');
}

export function renderNotification() {
    const notification = countryNotification();
    refs.mainContent.innerHTML = notification;
    refs.body.classList.add('body__bg--error');
}
