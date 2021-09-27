import countryDatabase from './countryDatabase';
import countryListTemplate from '../templates/countryListTemplate.hbs';
import refs from './refs';
import searchEventByCountryName from './searchEventByCountryName';

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

  normalCaseCountries = searchCountry.map(element => {
    let result = element.charAt(0).toUpperCase() + element.slice(1);
    if (result.includes('_')) {
      let splitResult = result.split('');
      for (let i = 0; i < splitResult.length; i++) {
        const element = splitResult[i];
        if (element === '_') {
          const nextLetter = splitResult[i + 1];
          const bigNextLetter = nextLetter.toLocaleUpperCase();
          splitResult.splice(i + 1, 1, bigNextLetter);
        }
      }
      result = splitResult.join('');
    }

    return result;
  });

  countryListMarkup(normalCaseCountries);

  return countryStr;
}

export function clearCountrySearch() {
  countryArr = [];
}

refs.selected.addEventListener('keydown', e => {
  if (e.code === 'NumpadEnter') {
    e.preventDefault();
    return;
  }
  if (e.code === 'Enter') {
    e.preventDefault();

    return;
  }
  if (e.code === 'Space') {
    e.preventDefault();
    return;
  }
  if (e.code === 'Backspace') {
    return searchCountryByPart(e);
  }
  return;
});
