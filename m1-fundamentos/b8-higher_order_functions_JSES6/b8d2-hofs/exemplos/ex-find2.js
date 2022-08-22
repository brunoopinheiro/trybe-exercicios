const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);
console.log(isEven);

const isEven2 = numbers.find((number) => number % 2 === 0);
console.log(isEven2);

// Fixar: Utilize find() para retornar o primeiro numero do array divisivel por 3 e 5 caso exista.

const findDivisibleBy3And5 = (number) => (number % 3 === 0 && number % 5 === 0) ? true : false;
console.log(numbers.find(findDivisibleBy3And5));

// Fixar: Encontrar o primeiro nome com cinco letras caso exista.

const names = ['Joao', 'Irene', 'Fernando', 'Maria'];

const findName5Letters = (name) => (name.length === 5) ? true : false;
console.log(names.find(findName5Letters));

// Fixar: Encontrar musica com id igual a 31031685 caso exista.

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  const idInput = id;
  const musica = musicas.find((element) => {
    if (element.id === idInput) {
      return element;
    }
  });
  return musica.title;
}

console.log(findMusic('31031685'));
