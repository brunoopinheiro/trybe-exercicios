const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const multi = (num1, num2) => num1 * num2;

const div = (num1, num2) => num1 / num2;

const calculator = (func) => func(10, 5);

console.log(calculator(sum));
console.log(calculator(sub));
console.log(calculator(multi));
console.log(calculator(div));
