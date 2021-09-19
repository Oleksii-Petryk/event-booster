import countryDatabase from './countryDatabase';
import countryListTemplate from '../templates/countryListTemplate.hbs';
import DiscoveryApiService from './api-service';
import refs from './refs';
import searchEventByCountryName from './searchEventByCountryName';


export let code = '';

const countryNames = Object.keys(countryDatabase);

const countriesToSortAlphabetically = [...countryNames];

const sortedCountries = countriesToSortAlphabetically.sort((a, b) =>
  a.localeCompare(b),
);

const containerForMarkup = refs.optionsContainer;

const countryListMarkup = sortedCountriesMarkup => {
  containerForMarkup.innerHTML = countryListTemplate(sortedCountriesMarkup);
};

export const getCountryCode = e => {
  let selectedCountry = e.target.lastElementChild.textContent;
  let countryCode = countryDatabase[selectedCountry];
  if (selectedCountry === 'All countries') {
    if (refs.input.value === '') {
      searchEventByCountryName('');
    }
    
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
