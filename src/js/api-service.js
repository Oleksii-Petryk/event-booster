export default class DiscoveryApiService {
  constructor() {
    this.BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
    this.API_KEY = 'bIBLGvpcT7TD3MY3B8D4bqq1qkXBBRdl';
    this.keyWord = '';
    this.countryCode = '';
  }

  async getEventsByInputValue() {
    try {
      const responce = await fetch(
        `${this.BASE_URL}events.json?keyword=${this.keyWord}&countryCode=${this.countryCode}&apikey=${this.API_KEY}`,
      );
      const data = await responce.json();
      //   if (!events._embedded) {
      //       console.log('erorr немає таких подій!!!')
      //       return;
      //   }
      const events = data._embedded ? data._embedded.events : [];
      return events;
    } catch (error) {
      console.log(error);
    }
  }
}
