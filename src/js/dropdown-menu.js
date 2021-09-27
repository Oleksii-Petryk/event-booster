import refs from './refs';
import searchEventByCountryName from './searchEventByCountryName';
import {
  clearCountrySearch,
  countryListMarkup,
  sortedCountries,
} from './country-selection-logic';

refs.selected.addEventListener('click', onSelectClick);

function onSelectClick() {
  refs.selected.setAttribute('contenteditable', 'true');
  document.querySelector('.selected').focus();
  clearSelect();
  clearCountrySearch();
  countryListMarkup(sortedCountries);

  refs.optionsWrapper.classList.add('active');
  refs.selected.classList.add('colored');
  refs.selected.style.zIndex = '101';
  refs.body.addEventListener('click', selectedMisClick);
}

refs.optionsWrapper.addEventListener('click', onWrapperClick);

function onWrapperClick(e) {
  let selectedCountry = e.target.lastElementChild.textContent;
  refs.selected.textContent = selectedCountry;
  refs.optionsWrapper.classList.remove('active');
  refs.selected.removeAttribute('contenteditable');

  refs.selected.style.zIndex = '';
  countryListMarkup(sortedCountries);
  refs.body.removeEventListener('click', selectedMisClick);
}

function selectedMisClick(e) {
  if (e.target !== refs.selected) {
    refs.selected.removeAttribute('contenteditable');
    refs.optionsWrapper.classList.remove('active');
    refs.body.removeEventListener('click', selectedMisClick);
    refs.selected.style.zIndex = '';
    refs.selected.textContent = 'All countries';
    refs.input.value = '';
    searchEventByCountryName('');
    clearCountrySearch();
    countryListMarkup(sortedCountries);
  }
}

export function clearSelect() {
  refs.selected.textContent = '';
}

refs.selected.addEventListener('focus', () => {
  clearSelect();
  refs.optionsWrapper.classList.add('active');
  refs.selected.classList.add('colored');
  refs.body.addEventListener('click', selectedMisClick);
});
