import refs from './refs.js';
import cardEventTemplate from '../templates/card-event-template.hbs';

export function renderEventsList(events) {
    const cardEventsMarkup = cardEventTemplate(events);
    refs.mainContent.insertAdjacentHTML('beforeend', cardEventsMarkup);
}

export function clearEventsList() {
    refs.mainContent.innerHTML = '';
}