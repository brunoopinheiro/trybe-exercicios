// Exemplo some()
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames));
console.log(verifyFirstLetter('X', listNames));

// Exemplo every()
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));

// Fixar: funcao que recebe 2 parametros (arrayDeNomes, nomeQualquer). True se nomeQualquer estiver em arrayDeNomes
const names = ['Mateus', 'Jose', 'Ana', 'Claudia', 'Bruna'];

const hasName = (arr, name) => arr.some((el) => el === name);
console.log(hasName(names, 'Bruna'));

// Fixar: funcao que dado um array de pessoas e idade minima, retorne true se todos tiverem idada maior ou igual a minima.
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 19 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((person) => person.age >= minimumAge);

console.log(verifyAges(people, 18));
