const fetch = require('node-fetch');

const getRandomAdvice = () => {
  const url = 'https:/api.adviceslip.com/advice';
  const request = fetch(url)
    .then((response) => response.json())
    .then(({ slip: { id, advice } }) => console.log(advice))
    .catch((error) => console.log(error));
};

getRandomAdvice();
