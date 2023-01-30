// imc = peso / altura^2

function bmi(weight, height) {
  try {
    return weight / (height ^ 2);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

console.log(bmi(80, 1.66));

module.exports = { bmi };