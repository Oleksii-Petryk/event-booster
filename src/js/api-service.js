import { options, getPagination } from './pagination';
import { getEventsArray } from './render-modal';

export default class DiscoveryApiService {
  constructor() {
    this.BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
    this.API_KEY = 'bIBLGvpcT7TD3MY3B8D4bqq1qkXBBRdl';
    this.keyWord = '';
    this.countryCode = '';
    this.page = 0;
    this.attractionsId = ''
    this.size = 20;
  }

  async getEventsByInputValue() {
    try {
      options.itemsPerPage = window.innerWidth > 767 && window.innerWidth < 1280 ? 21 : 20
      this.size = options.itemsPerPage
      const responce = await fetch(
        `${this.BASE_URL}events.json?keyword=${this.keyWord}&countryCode=${this.countryCode}&page=${this.page}&size=${this.size}&apikey=${this.API_KEY}`,
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

  async getEventsByAttractionId() {
    try {
      const responce = await fetch(
        `${this.BASE_URL}events.json?keyword=${this.keyWord}&countryCode=${this.countryCode}&page=${this.page}&attractionId=${this.attractionsId}&apikey=${this.API_KEY}`,
      );
      const data = await responce.json();
      options.totalItems = 20;
      getPagination()
      const events = data._embedded ? data._embedded.events : [];
      getEventsArray(events);
      return events;
    } catch (error) {
      console.log(error);
    }
  }
}
