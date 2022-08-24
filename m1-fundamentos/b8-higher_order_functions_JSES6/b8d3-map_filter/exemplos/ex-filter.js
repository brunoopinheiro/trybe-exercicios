// Exemplo 1
const arr = ['Ana', 'Pedro', 'Giovana'];

// arr.filter((element, _index, _array) => {});
const filtered = arr.filter((element) => element === 'Pedro');
console.log(filtered);

// Exemplo 2
const notasEstudantes = [
  {
    nome: 'Joice',
    nota: 100
  },
  {
    nome: 'Ronald',
    nota: 50
  },
  {
    nome: 'Joel',
    nota: 80
  },
  {
    nome: 'Ana',
    nota: 90
  },
  {
    nome: 'Carol',
    nota: 70
  }
];

const estudantesComAprovacao = notasEstudantes.filter((pessoa) => pessoa.nota >= 80);
console.log(estudantesComAprovacao);

const estudantesSemAprovacao = notasEstudantes.filter((pessoa) => !(pessoa.nota >= 80));
console.log(estudantesSemAprovacao);

// Exemplo 3
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);
// const isEven = numbers.filter((number) => number % 2 === 0);
console.log(isEven);

// Exemplo 4
const objPeople = [
  { name: 'Jose', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18},
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);
console.log(verifyAgeDrive(objPeople));

// Exemplo 5
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => listStudents.filter((student) => student !== name);

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents);
