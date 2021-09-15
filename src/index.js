import './sass/main.scss';
import DiscoveryApiService from './js/api-service';
import { renderEventsList, clearEventsList } from './js/render-events.js';
import refs from './js/refs';
import debounce from 'lodash.debounce';
import searchByEventName from './js/searchEventsByName';
import './js/up';
import './js/dropdown-menu.js';

refs.input.addEventListener('input', debounce(searchByEventName, 500));

const discoveryApiService = new DiscoveryApiService();

async function getEventsOnFirstLoad() {
  try {
    const events = await discoveryApiService.getEventsByInputValue();
    renderEventsList(events);
  } catch (error) {
    console.log(error);
  }
}

getEventsOnFirstLoad();
