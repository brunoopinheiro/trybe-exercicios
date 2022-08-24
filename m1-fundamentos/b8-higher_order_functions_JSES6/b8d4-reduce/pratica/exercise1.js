const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (array) => array.reduce((acc, curr) => acc.concat(curr), []);

console.log(flatten(arrays));
