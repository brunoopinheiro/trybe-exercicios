const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'Joao'],
  wife: 'Ana',
};

Object.assign(person, info, family);
console.log(person);

// clone
console.log('-----------------');

const clone = Object.assign(person);

clone.name = 'Duncan';
console.log('Mudando a propriedade name atraves do objeto clone');
console.log(clone);
console.log(person);

person.lastName = 'Idaho';
console.log('Mudando a propriedade lastName atraves do objeto person');
console.log(clone);
console.log(person);

// clonar objeto sem link
console.log('-----clonando objeto sem link--------------');

const newPerson = Object.assign({}, person);
newPerson.name = 'Paul';
newPerson.lastName = 'Atreides';
console.log(newPerson);
console.log(person);
