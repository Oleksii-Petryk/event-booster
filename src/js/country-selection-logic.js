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

console.log(LowerCaseCountries);

refs.selected.addEventListener('keypress', e => {
  console.log(e.code);
  countryArr.push(e.key);
  let countryStr = countryArr.join('').toLowerCase();
  console.log(countryStr);

  const searchCountry = LowerCaseCountries.filter(country => {
    return country.includes(countryStr);
  });

  normalCaseCountries = searchCountry.map(e => {
    return e.charAt(0).toUpperCase() + e.slice(1);
  });
  countryListMarkup(normalCaseCountries);
  return normalCaseCountries;
});

export function clearCountrySearch() {
  countryArr = [];
}

refs.selected.addEventListener('keydown', e => {
  if (e.code === 'Backspace') {
    countryArr.pop();
    countryListMarkup(sortedCountries);
    console.log(normalCaseCountries);

    return countryListMarkup(normalCaseCountries);
  }
});
