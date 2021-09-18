import refs from './refs';

refs.selected.addEventListener('click', () => {
  refs.optionsContainer.classList.toggle('active');

  refs.body.addEventListener('click', selectedMisClick);
});

refs.optionsContainer.addEventListener('click', e => {
  let selectedCountry = e.target.lastElementChild.textContent;
  refs.selected.innerHTML = selectedCountry;
  refs.optionsContainer.classList.remove('active');
  refs.body.removeEventListener('click', selectedMisClick);
});

function selectedMisClick(e) {
  if (e.target !== refs.selected) {
    refs.optionsContainer.classList.remove('active');
    refs.body.removeEventListener('click', selectedMisClick);
  }
}
