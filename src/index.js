import './sass/main.scss';
import DiscoveryApiService from './js/api-service';

const discoveryApiService = new DiscoveryApiService();

async function getEventsOnFirstLoad() {
    try {
        const events = await discoveryApiService.featchEvents();
        console.log(events);
    } catch (error) {
        console.log(error);
    }
    
}

getEventsOnFirstLoad();