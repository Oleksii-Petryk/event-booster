import Pagination from 'tui-pagination';
import DiscoveryApiService from './api-service';
import refs from './refs.js';
import countryDatabase from './countryDatabase';
import { clearEventsList, renderEventsList } from './render-events';

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
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#main-content" class="tui-page-btn tui-{{type}} tui-hide">1 ...</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#main-content" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

function countryCode() {
  if (refs.selected.textContent.trim() === 'Choose country') {
    return '';
  }
  if (refs.selected.textContent === 'All countries') {
    return '';
  }
  return countryDatabase[refs.selected.textContent];
}

let pagePagination = 1;

export function getPagination() {
  const pagination = new Pagination('pagination', options);
  const lastButton = document.querySelector('.tui-last');

  if (options.totalItems < 21) {
    refs.pagination.classList.add('tui-pagination__hide');
  } else {
    refs.pagination.classList.remove('tui-pagination__hide');
  }

  let totalPage = options.totalItems / options.itemsPerPage;
  let firstButton = document.querySelector('.tui-first');

  lastButton.textContent = '... ' + `${Math.ceil(totalPage)}`;

  if (options.totalItems > 100 && pagePagination < totalPage - 2) {
    lastButton.classList.remove('tui-hide');
  }

  if (options.totalItems > 100 && pagePagination > 3) {
    firstButton.classList.remove('tui-hide');
  }

  pagination.on('afterMove', async function (eventData) {
    const currentPage = eventData.page;
    pagePagination = currentPage;

    const discoveryApiService = new DiscoveryApiService();
    discoveryApiService.page = currentPage - 1;

    discoveryApiService.keyWord = refs.input.value;

    discoveryApiService.countryCode = countryCode();

    options.page = currentPage;
    const events = await discoveryApiService.getEventsByInputValue();

    refs.mainContent.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    clearEventsList();
    renderEventsList(events);
  });
}
