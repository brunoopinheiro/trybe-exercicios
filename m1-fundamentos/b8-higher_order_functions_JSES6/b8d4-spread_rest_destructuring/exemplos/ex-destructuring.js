const character = {
  name: 'Luke Skywalker',
  age: 53,
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// Desestruturando
const { name, age, homeWorld: { name : planetName }, description: { jedi } } = character;
console.log(`Esse e o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrivel que possa parecer, ele ${jedi ? 'e um Jedi' : 'nao e um Jedi'}.`);

// Exemplo 2
const daysOfWeek = {
  workDays : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays);
console.log(weekend);

const weekdays = [...workDays, ...weekend];
console.log(weekdays);

// Exemplo 3
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nome, b: classAssigned, c: subject } = student;

console.log(nome);
console.log(classAssigned);
console.log(subject);

// Exemplo 4 - Funcao
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promocao! ${name} por apenas ${price} aqui nas: ${seller}`);
};

printProductDetails(product);

// Exemplo 5 - Fixar
const user = {
  firstName: 'Maria',
  idade: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software Engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const employee = { ...user, ... jobInfos};
const { firstName, idade, nationality, profession, squad, squadInitials } = employee;

console.log(`Hi, my name is ${firstName}, I'm ${idade} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials} - ${squad}.`);
