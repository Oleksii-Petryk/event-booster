import refs from './refs.js';
import cardEventTemplate from '../templates/card-event-template.hbs';

export default function renderEventsList(events) {
    const cardEventsMarkup = cardEventTemplate(events);
    refs.mainContent.insertAdjacentHTML('beforeend', cardEventsMarkup);
}
