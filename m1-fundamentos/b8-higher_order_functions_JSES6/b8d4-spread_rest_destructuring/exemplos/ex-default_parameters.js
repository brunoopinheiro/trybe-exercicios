const greeting = (user = 'pessoa usuaria') => console.log(`Welcome ${user}!`);

greeting();

// Exemplo 2 - Fixar
const multiply = (number, value = 1) => number * value;

console.log(multiply(8));
