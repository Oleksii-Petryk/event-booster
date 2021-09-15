import DiscoveryApiService from './api-service';
import { renderEventsList, clearEventsList } from './render-events.js';

const discoveryApiService = new DiscoveryApiService();

export default async function searchEventByCountryName(countryNameCode) {
  discoveryApiService.countryCode = countryNameCode;

  try {
    const events = await discoveryApiService.getEventsByInputValue();
    if (events.length === 0) {
      console.log('Немає таких подій');
    }
    clearEventsList();
    renderEventsList(events);
  } catch (error) {
    console.log(error);
  }
}
