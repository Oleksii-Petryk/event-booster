import DiscoveryApiService from './api-service.js';
import { renderEventsList, clearEventsList, renderMorefromAuthorNotif } from './render-events.js';
import { options } from './pagination';
import { closeModal } from './modal';
import refs from './refs';



export default async function getAttractionById() {
    const discoveryApiService = new DiscoveryApiService();
    options.page = 1;
    const id = document.querySelector('[data-attractionId]').dataset.attractionid;
  discoveryApiService.attractionsId = id;
  if (!id) {
    clearEventsList();
    refs.pagination.style.display = 'none';
    renderMorefromAuthorNotif();
    closeModal();
    return;
  }
    try {
    const events = await discoveryApiService.getEventsByAttractionId();
        clearEventsList();
        closeModal();
    renderEventsList(events);
    refs.mainContent.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
    })
  } catch (error) {
    console.log(error);
  }
} 