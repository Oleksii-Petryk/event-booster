import DiscoveryApiService from './api-service';
import refs from './refs';
import { renderModal } from './modal.js';

let events = [];
export let obj = {};
export function getClicedCardObj(eventId) {
    if (eventId) {
        obj = events.find(obj => obj.id === eventId);
        renderModal(obj);
    }
}

export function getEventsArray(arr) {
    events = arr;
}