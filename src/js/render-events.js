import refs from './refs.js';
import cardEventTemplate from '../templates/card-event-template.hbs';
import errorTemplate from '../templates/error-template.hbs';
import countryNotification from '../templates/country-notification.hbs';
import moreFromAuthorNotification from '../templates/moreFromAuthorNotification.hbs';

export function renderEventsList(events) {
    removeFooter();
    const cardEventsMarkup = cardEventTemplate(events);
    refs.mainContent.insertAdjacentHTML('beforeend', cardEventsMarkup);
}

export function clearEventsList() {
    refs.mainContent.innerHTML = '';
}

export function catchError() {
    const errorMarkup = errorTemplate();    
    refs.mainContent.innerHTML = errorMarkup;
    addFooter();
}

export function renderNotification() {
    const notification = countryNotification();
    refs.mainContent.innerHTML = notification;
    addFooter();
}

export function addFooter() {
    refs.footer.classList.add('footer--error');
    const innerScreenHeight = window.innerHeight;
    refs.footerText.style.top = innerScreenHeight + "px";
}

export function removeFooter() {
    if (refs.footer.classList.contains('footer--error')) {
        refs.footer.classList.remove('footer--error');
    };
}

export function renderMorefromAuthorNotif() {
    const notification = moreFromAuthorNotification()
    refs.mainContent.innerHTML = notification;
    addFooter();

}