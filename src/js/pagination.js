import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import DiscoveryApiService from './api-service';
import refs from './refs.js';
import countryDatabase from './countryDatabase';
import { clearEventsList, renderEventsList } from './render-events'



export const options = {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#main-content" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#main-content" class="tui-page-btn tui-{{type}}">1 ...</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#main-content" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
      '</a>'
  }
};

function countryCode() {
    for (const key in countryDatabase) {
        if (refs.selected.textContent === 'Choose country') {
            return ''
        } else (key === refs.selected.textContent);{
            return `${countryDatabase[key]}`
        }
    }
}


export function getPagination() {
    const pagination = new Pagination('pagination', options);
    const lastButton = document.querySelector('.tui-last')

    lastButton.textContent = '... ' + `${Math.ceil(options.totalItems / options.itemsPerPage)}`
    lastButton.style.padding = "5px 10px";

    if (options.totalItems < 101 && options.totalItems > 20) {
        lastButton.classList.add('tui-hide')
    } if (options.totalItems > 100) {
        lastButton.classList.remove('tui-hide')
    } if (options.totalItems < 21) {
        refs.pagination.classList.add('tui-pagination__hide')
    } if (options.totalItems > 20) {
        refs.pagination.classList.remove('tui-pagination__hide')
    }


    pagination.on('afterMove', async function (eventData) {
        const currentPage = eventData.page;

        if (options.totalItems < 101 && currentPage > 1) {
            const firstButton = document.querySelector('.tui-first')
            firstButton.classList.add('tui-hide')
        }

        const discoveryApiService = new DiscoveryApiService();
        discoveryApiService.page = currentPage - 1
        discoveryApiService.keyWord = refs.input.value
        discoveryApiService.countryCode = countryCode()
        options.page = currentPage
        const events = await discoveryApiService.getEventsByInputValue()

        clearEventsList();
        renderEventsList(events);

    })
}
