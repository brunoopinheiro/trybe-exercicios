const myList = [5, 2, 3];

const swap = ([el3, el2, el1]) => [el1, el2, el3];
console.log(swap(myList));

// 6 - Alterar array carros para objetos.
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugattin', 2016];

const toObject = ([modelo, montadora, anoLancamento]) => ({ modelo, montadora, anoLancamento });

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));

// 7 - funcao shipLength() dado objeto navio retorna string `Ship is 000.0 measurementUnit long.`
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long.`

console.log(shipLength(ships[0]));
console.log(shipLength(ships[1]));
console.log(shipLength(ships[2]));
