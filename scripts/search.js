import { persons } from './persons.js';

const searchBtn = document.querySelector('.search__button');
const searchInput = document.querySelector('.search__input');

const showPerson = () => alert(`${persons[0].name}`);
const showSpecialMessage = () => alert('Yandex круче. Но это не точно');
function showValue() {
  alert(`${this}`);
}

const alertManager = (value) => {
  if (typeof value === 'string' && value === 'google') {
    setTimeout(showSpecialMessage, 3000)
  } else {
    setTimeout(showValue.bind(value), 3000)
  }
  setTimeout(showPerson, 3000);
}

const searchBtnHandler = () => {
  searchInput.value ? alertManager(searchInput.value) : setTimeout(showPerson, 3000);
}

searchBtn.addEventListener('click', searchBtnHandler);