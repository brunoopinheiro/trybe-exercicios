const API_URL = 'https://icanhazdadjoke.com/';
const API_OBJ = { method: 'GET', headers: { 'Accept' : 'application/json' }};

function displayJoke(joke) {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerText = joke;
}

const fetchJoke = async () => {
  try {
    const jokeResponse = await fetch(API_URL, API_OBJ);
    const jokeObj = await jokeResponse.json();
    const { joke } = jokeObj;
  
    displayJoke(joke);
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => fetchJoke();
