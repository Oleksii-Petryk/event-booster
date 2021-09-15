import countryDatabase from './countryDatabase';
import countryListTemplate from '../templates/countryListTemplate.hbs';

import refs from './refs';
import searchEventByCountryName from './searchEventByCountryName';

const countryNames = Object.keys(countryDatabase);

const countriesToSortAlphabetically = [...countryNames];

const sortedCountries = countriesToSortAlphabetically.sort((a, b) => a.localeCompare(b));

const conteinerForMarkup = refs.optionsContainer;

const countryListMarkup = sortedCountriesMarkup => {
  conteinerForMarkup.innerHTML = countryListTemplate(sortedCountriesMarkup);
};

const selectedCountryCode = conteinerForMarkup.addEventListener('click', e => {
  let selectedCountry = e.target.lastElementChild.textContent;
  let countryCode = countryDatabase[selectedCountry];
  return searchEventByCountryName(countryCode);
});

countryListMarkup(sortedCountries);
