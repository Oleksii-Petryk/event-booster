import './sass/main.scss';
import DiscoveryApiService from './js/api-service';
import './js/up';
import renderEventsList from './js/render-events.js';


const discoveryApiService = new DiscoveryApiService();

async function getEventsOnFirstLoad() {
    try {
        const events = await discoveryApiService.featchEvents();
        renderEventsList(events);
        console.log(events);
    } catch (error) {
        console.log(error);
    }
    
}

getEventsOnFirstLoad();

