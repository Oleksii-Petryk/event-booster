import DiscoveryApiService from './api-service';
import refs from './refs';


const discoveryApiService = new DiscoveryApiService();

async function getEventsArrray() {
    const events = await discoveryApiService.eventsArr;
console.log(events);
}
// getEventsArrray();










// function getCardId() {
//   console.log(evt.target.parentElement.dataset);
// }