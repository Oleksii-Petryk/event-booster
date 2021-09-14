import DiscoveryApiService from './api-service';
import { renderEventsList, clearEventsList }from './render-events.js';


const discoveryApiService = new DiscoveryApiService();

export default async function searchByEventName(e) {
    e.preventDefault();
    discoveryApiService.keyWord = e.target.value.trim();
        try {
            const events = await discoveryApiService.getEventsByInputValue();
            if (events.length === 0) {
                console.log('Немає таких подій')
            }
            console.log(events);
            clearEventsList();
            renderEventsList(events);
            
    } catch (error) {
        console.log(error);
    }
}