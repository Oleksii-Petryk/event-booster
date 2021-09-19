import refs from './refs';

refs.selected.addEventListener('click', () => {
  refs.optionsWrapper.classList.toggle('active');
  refs.selected.style.zIndex = '101';
  refs.body.addEventListener('click', selectedMisClick);
});

refs.optionsWrapper.addEventListener('click', e => {
  let selectedCountry = e.target.lastElementChild.textContent;
  refs.selected.innerHTML = selectedCountry;
  refs.optionsWrapper.classList.remove('active');
  refs.selected.classList.add('colored');
  refs.selected.style.zIndex = '';

  refs.body.removeEventListener('click', selectedMisClick);
});

function selectedMisClick(e) {
  if (e.target !== refs.selected) {
    refs.optionsWrapper.classList.remove('active');
    refs.body.removeEventListener('click', selectedMisClick);
    refs.selected.style.zIndex = '';
  }
}
