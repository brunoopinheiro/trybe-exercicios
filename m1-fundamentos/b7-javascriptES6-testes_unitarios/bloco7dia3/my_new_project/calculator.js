const sum = (a, b) => a + b;

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

function div(a, b) {
  if (b === 0) {
    throw new Error('Divisao por zero!');
  }
  return a / b;
}

module.exports = {sum, sub, mul, div};
