import { options, getPagination } from './pagination';
import { getEventsArray } from './render-modal';

export default class DiscoveryApiService {
  constructor() {
    this.BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
    this.API_KEY = 'bIBLGvpcT7TD3MY3B8D4bqq1qkXBBRdl';
    this.keyWord = '';
    this.countryCode = '';
    this.page = 0;
  }

  async getEventsByInputValue() {
    try {
      const responce = await fetch(
        `${this.BASE_URL}events.json?keyword=${this.keyWord}&countryCode=${this.countryCode}&page=${this.page}&apikey=${this.API_KEY}`,
      );
      const data = await responce.json();
      options.totalItems = data.page.totalElements > 1000 ? 1000 : data.page.totalElements
      getPagination()
      const events = data._embedded ? data._embedded.events : [];
      getEventsArray(events);
      return events;
    } catch (error) {
      console.log(error);
    }
  }
}
