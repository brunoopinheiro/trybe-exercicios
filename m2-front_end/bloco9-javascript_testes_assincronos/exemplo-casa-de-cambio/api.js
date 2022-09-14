// https://api.exchangerate.host/latest?base=BRL
const URL_API = 'https://api.exchangerate.host/latest';

const fetchCurrencies = async (moeda) => {
  try{
    const endpoint = `${URL_API}?base=${moeda}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.rates;
  } catch (error) {

  }
};

fetchCurrencies('BRL')
  .then(devolvido => console.log(devolvido));

// if (typeof module !== 'undefined') {
//   module.exports = {
//     fetchCurrencies,
//   };
// }
