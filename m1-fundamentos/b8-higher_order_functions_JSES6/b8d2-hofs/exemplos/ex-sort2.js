// Fixar: utilize sort para ordenar o array pelas idades em ordem crescente
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age - b.age);
console.log(people);

// Fixar: utilize sort para order em ordem descrescente
people.sort((a, b) => b.age - a.age);
console.log(people);
