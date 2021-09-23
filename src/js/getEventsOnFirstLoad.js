import DiscoveryApiService from './api-service';
import { renderEventsList } from './render-events';

export default async function getEventsOnFirstLoad() {

  const discoveryApiService = new DiscoveryApiService();
  try {
    const events = await discoveryApiService.getEventsByInputValue();
    renderEventsList(events);
  } catch (error) {
    console.log(error);
  }
}