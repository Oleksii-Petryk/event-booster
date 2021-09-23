import DiscoveryApiService from './api-service';
import { renderEventsList, clearEventsList, renderNotification } from './render-events.js';
import { options} from './pagination';
import { infoNotice } from './pnotify-module';

const discoveryApiService = new DiscoveryApiService();

export default async function searchEventByCountryName(countryNameCode) {
  options.page = 1;
  discoveryApiService.countryCode = countryNameCode;

  try {
    const events = await discoveryApiService.getEventsByInputValue();
    if (events.length === 0) {
      renderNotification();
      infoNotice();
      return;
    }
    clearEventsList();
    renderEventsList(events);
  } catch (error) {
    console.log(error);
  }
}
