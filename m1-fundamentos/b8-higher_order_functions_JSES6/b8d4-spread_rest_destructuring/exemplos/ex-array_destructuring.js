const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry, secondCountry, thirdCountry, fourthCountry);

// Exemplo 2
const saudacoes = ['Ola', (saudacao) => console.log(saudacao)];
const [msg, func] = saudacoes;
func(msg);

// Exemplo 3
let comida = 'gato';
let animal = 'agua';
let bebida = 'arroz';

const arr = [comida, animal, bebida];
[animal, bebida, comida] = arr;

console.log(`Animal: ${animal}. Bebida: ${bebida}. Comida: ${comida}`);

// Exemplo 4
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[v1, v3, v5, v6, v8, v10, v12] = numerosPares;
numerosPares = [v6, v8, v10, v12];

console.log(numerosPares);
