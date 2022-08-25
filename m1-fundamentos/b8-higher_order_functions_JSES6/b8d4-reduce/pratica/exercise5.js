const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Exercicio 5 - Dado o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiuscula ou minuscula

const containsA = (array) => array.reduce((acc, curr) => acc + curr.toLowerCase().split('')
  .reduce((acc, letter) => (letter === 'a') ? acc += 1 : acc, 0), 0);

console.log(containsA(names));
