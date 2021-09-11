export default class DiscoveryApiService {
    constructor() {
        this.BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
        this.API_KEY = 'bIBLGvpcT7TD3MY3B8D4bqq1qkXBBRdl'

    }
    async featchEvents() {
        try {
            const responce = await fetch(`${this.BASE_URL}events.json?apikey=${this.API_KEY}`)
            const events = await responce.json();
            return events._embedded.events;
        } catch (error) {
            console.log(error);
        }
    }
}