import DiscoveryApiService from './api-service';
import { renderEventsList, clearEventsList, renderNotification } from './render-events.js';
import { options, getPagination } from './pagination';
import { getEventsArray } from './render-modal';

const discoveryApiService = new DiscoveryApiService();

export default async function searchEventByCountryName(countryNameCode) {
  options.page = 1
  discoveryApiService.countryCode = countryNameCode;

  try {
    const events = await discoveryApiService.getEventsByInputValue();
    if (events.length === 0) {
      renderNotification();
      return;
      
    }
    getEventsArray(events);
    clearEventsList();
    renderEventsList(events);
  } catch (error) {
    console.log(error);
  }
}
