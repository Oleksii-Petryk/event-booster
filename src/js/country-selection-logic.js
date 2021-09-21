import countryDatabase from './countryDatabase';
import countryListTemplate from '../templates/countryListTemplate.hbs';
import DiscoveryApiService from './api-service';
import refs from './refs';
import searchEventByCountryName from './searchEventByCountryName';
import { clearSelect } from './dropdown-menu';

export let code = '';
export let countryArr = [];
let normalCaseCountries;

const countryNames = Object.keys(countryDatabase);

const countriesToSortAlphabetically = [...countryNames];

export const sortedCountries = countriesToSortAlphabetically.sort((a, b) =>
  a.localeCompare(b),
);

const containerForMarkup = refs.optionsContainer;

export const countryListMarkup = sortedCountriesMarkup => {
  containerForMarkup.innerHTML = countryListTemplate(sortedCountriesMarkup);
};

export const getCountryCode = e => {
  let selectedCountry = e.target.lastElementChild.textContent;
  let countryCode = countryDatabase[selectedCountry];
  if (selectedCountry === 'All countries') {
    refs.input.value = '';
    searchEventByCountryName('');
    return (code = '');
  }
  searchEventByCountryName(countryCode);

  refs.input.value = '';
  code = countryCode;
  return countryCode;
};

const selectedCountryCode = containerForMarkup.addEventListener(
  'click',
  getCountryCode,
);

countryListMarkup(sortedCountries);

const LowerCaseCountries = sortedCountries.join(' ').toLowerCase().split(' ');

refs.selected.addEventListener('keypress', searchCountryByPart);

let countryStr;

function searchCountryByPart(e) {
  if (e.code === 'Enter') {
    return;
  }
  if (e.code === 'Backspace') {
    countryArr.pop();
  } else {
    countryArr.push(e.key);
  }

  countryStr = countryArr.join('').toLowerCase();

  const searchCountry = LowerCaseCountries.filter(country => {
    return country.includes(countryStr);
  });

  normalCaseCountries = searchCountry.map(e => {
    return e.charAt(0).toUpperCase() + e.slice(1);
  });
  countryListMarkup(normalCaseCountries);
  return countryStr;
}

export function clearCountrySearch() {
  countryArr = [];
}

refs.selected.addEventListener('keydown', e => {
  if (e.code === 'Enter') {
    e.preventDefault();

    return;
  }
  if (e.code === 'Backspace') {
    return searchCountryByPart(e);
  }
  return;
});
