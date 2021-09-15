import DiscoveryApiService from './api-service';
import { renderEventsList, clearEventsList, catchError } from './render-events.js';


const discoveryApiService = new DiscoveryApiService();

export default async function searchByEventName(e) {
    e.preventDefault();
    discoveryApiService.keyWord = e.target.value.trim();
        try {
            const events = await discoveryApiService.getEventsByInputValue();
            if (events.length === 0) {
                catchError();
                console.log('Немає таких подій');
                return;
            }
            console.log(events);
            clearEventsList();
            renderEventsList(events);
            
    } catch (error) {
        console.log(error);
    }
}