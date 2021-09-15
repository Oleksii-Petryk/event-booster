import countryDatabase from './countryDatabase';
import countryListTemplate from '../templates/countryListTemplate.hbs';

import refs from './refs';
import searchEventByCountryName from './searchEventByCountryName';

export let code = '';

const countryNames = Object.keys(countryDatabase);

const countriesToSortAlphabetically = [...countryNames];

const sortedCountries = countriesToSortAlphabetically.sort((a, b) => a.localeCompare(b));

const conteinerForMarkup = refs.optionsContainer;

const countryListMarkup = sortedCountriesMarkup => {
  conteinerForMarkup.innerHTML = countryListTemplate(sortedCountriesMarkup);
};


export const getCountryCode = (e) => {
let selectedCountry = e.target.lastElementChild.textContent;
  let countryCode = countryDatabase[selectedCountry];
  searchEventByCountryName(countryCode);
  code = countryCode;
  return countryCode;
}

const selectedCountryCode = conteinerForMarkup.addEventListener('click', getCountryCode);

countryListMarkup(sortedCountries);
