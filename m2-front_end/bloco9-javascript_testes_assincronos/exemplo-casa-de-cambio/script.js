const btnPesquisar = document.getElementById('search-button');
const input = document.getElementById('currency-input');
const currenciesList = document.getElementById('currency-list');

const createFavoriteItem = (moeda, valor) => {
  const favoriteList = document.getElementById('favorite_currencies');

  const li = document.createElement('li');

  const div = document.createElement('div');
  div.append(moeda);
  
  li.appendChild(div);
  li.append(valor);

  favoriteList.appendChild(li);
};

const addItemToLocalStorage = () => {
  const favoriteList = document.getElementById('favorite_currencies');

  localStorage.setItem('moedas', favoriteList.innerHTML);
};

const getItemsFromLocalStorage = () => localStorage.getItem('moedas');

const createList = ([moeda, valor]) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.id = moeda;
  span.className = 'material-symbols-outlined heart';
  span.innerHTML = 'favorite';

  span.addEventListener('click', () => {
    createFavoriteItem(moeda, valor);
    addItemToLocalStorage();
  });

  const div = document.createElement('div');
  div.append(moeda);
  div.appendChild(span);

  li.appendChild(div);
  li.append(valor);

  currenciesList.appendChild(li);
};

btnPesquisar.addEventListener('click', async () => {
  const inputCoin = input.value;
  
  const base = document.getElementById('base');
  base.innerHTML = `MOEDA BASE: ${inputCoin || 'EUR'}`;

  const moedas = await fetchCurrencies(inputCoin);

  const array = Object.entries(moedas.rates);

  currenciesList.innerHTML = '';

  array.forEach(createList);
})

window.onload = () => {
  const favoriteList = document.getElementById('favorite_currencies');
  const moedasFavoritas = getItemsFromLocalStorage();
  favoriteList.innerHTML = moedasFavoritas;
};
