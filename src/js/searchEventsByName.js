import DiscoveryApiService from './api-service';
import { alertNotice, errorNotice } from './pnotify-module';
import { renderEventsList, clearEventsList, catchError } from './render-events.js';
import { code } from './country-selection-logic';
import { options, getPagination } from './pagination';
import refs from './refs';

const discoveryApiService = new DiscoveryApiService();

export default async function searchByEventName(e) {
  options.page = 1;
  discoveryApiService.countryCode = code ? code : '';

  discoveryApiService.keyWord = e.target.value.trim();
  try {
    const events = await discoveryApiService.getEventsByInputValue();
    if (events.length === 0) {
      alertNotice();
      catchError();
      return;
    }
    console.log(events);
    clearEventsList();
    renderEventsList(events);
  } catch (error) {
    errorNotice();
  }
}

 