import DiscoveryApiService from './api-service';
import { renderEventsList, clearEventsList }from './render-events.js';


const discoveryApiService = new DiscoveryApiService();

export default async function searchByEventName(e) {
    discoveryApiService.keyWord = e.target.value;
        try {
            const events = await discoveryApiService.getEventsByInputValue();
            console.log(events);
            clearEventsList();
            renderEventsList(events);
            
    } catch (error) {
        console.log(error);
    }
}