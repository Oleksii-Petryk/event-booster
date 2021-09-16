import DiscoveryApiService from './api-service';
import { renderEventsList, clearEventsList, catchError } from './render-events.js';
import { code} from './country-selection-logic';


const discoveryApiService = new DiscoveryApiService();

export default async function searchByEventName(e) {
    discoveryApiService.countryCode = code ? code : '';
    discoveryApiService.keyWord = e.target.value.trim();
        try {
            const events = await discoveryApiService.getEventsByInputValue();
            if (events.length === 0) {
                catchError();
                return;
            }
            console.log(events);
            clearEventsList();
            renderEventsList(events);
            
    } catch (error) {
        console.log(error);
    }
}