import './sass/main.scss';
import DiscoveryApiService from './js/api-service';
import { renderEventsList, clearEventsList, catchError } from './js/render-events.js';
import refs from './js/refs';
import debounce from 'lodash.debounce';
import searchByEventName from './js/searchEventsByName';
import './js/dropdown-menu.js';
import './js/country-selection-logic';
import './js/searchEventByCountryName';
import './js/loader';
import { onEventCardClick, renderModal} from './js/modal.js';
import './js/up';


renderModal();

refs.input.addEventListener('input', debounce(searchByEventName, 500));
refs.mainContent.addEventListener('click', onEventCardClick);


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