import refs from './refs';

refs.selected.addEventListener('click', () => {
  refs.optionsContainer.classList.toggle('active');
});

refs.optionsContainer.addEventListener('click', e => {
  let selectedCountry = e.target.lastElementChild.textContent;
  refs.selected.innerHTML = selectedCountry;
  refs.optionsContainer.classList.remove('active');
  //   console.log(selectedCountry);
});
