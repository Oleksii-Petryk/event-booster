import DiscoveryApiService from './api-service';
import { renderEventsList, clearEventsList }from './render-events.js';
import { alertNotice } from './pnotifyAlert';
import { errorNotice } from './pnotifyError';

const discoveryApiService = new DiscoveryApiService();

export default async function searchByEventName(e) {
    e.preventDefault();
    discoveryApiService.keyWord = e.target.value.trim();
        try {
            const events = await discoveryApiService.getEventsByInputValue();
            if (events.length === 0) {
                alertNotice()
            }
            console.log(events);
            clearEventsList();
            renderEventsList(events);
            
    } catch (error) {
        errorNotice();
    }
}