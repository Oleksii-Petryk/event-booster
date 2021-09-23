import './sass/main.scss';
import getEventsOnFirstLoad from './js/getEventsOnFirstLoad';
import refs from './js/refs';
import debounce from 'lodash.debounce';
import searchByEventName from './js/searchEventsByName';
import './js/dropdown-menu.js';
import './js/country-selection-logic';
import './js/searchEventByCountryName';
import './js/loader';
import { onEventCardClick } from './js/modal.js';
import './js/up';

refs.form.addEventListener('submit', e => e.preventDefault());
refs.input.addEventListener('input', debounce(searchByEventName, 500));
refs.mainContent.addEventListener('click', onEventCardClick);
getEventsOnFirstLoad();
