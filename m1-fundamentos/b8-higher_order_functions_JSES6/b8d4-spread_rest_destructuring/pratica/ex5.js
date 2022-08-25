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
