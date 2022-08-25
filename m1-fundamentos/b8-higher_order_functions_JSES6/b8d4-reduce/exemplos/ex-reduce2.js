const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger);

// Exemplo 2
const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenSum = numbers2.filter((number) => number % 2 === 0).reduce((nt, ni) => nt + ni);
console.log(evenSum);

const evenSumReduceOnly = numbers2.reduce((nt, ni) => (ni % 2 === 0) ? nt + ni : nt, 0);
console.log(evenSumReduceOnly);

// Exemplo 3 - MDN Docs
const objects = [{ x: 1 }, { x: 2}, { x: 3 }];

// To sum up the values contained in an array of objects, you must supply an `initialValue`, so that each item passes through your function.
const sum = objects.reduce((previousValue, currentValue) => previousValue + currentValue.x, 0);

console.log(sum);

// Exemplo 4 - MDN Docs - Flatten an array of arrays
const flattened = [[0, 1], [2, 3], [4, 5]].reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
console.log(flattened);

// Exemplo 5 - MDN Docs - Counting instances of values in an object
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce((allNames, name) => {
  allNames[name] ??= 0;
  allNames[name] += 1;

  return allNames;
}, {});
console.log(countedNames);

// Exemplo 6 - MDN Docs - Grouping objects by a property
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    acc[key] ??= [];
    acc[key].push(obj);
    return acc;
  }, {});
}

const groupedPeople = groupBy(people, 'age');
console.log(groupedPeople);
