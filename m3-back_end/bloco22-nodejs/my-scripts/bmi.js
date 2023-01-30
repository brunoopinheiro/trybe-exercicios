// imc = peso / altura^2
const resync = require('readline-sync');

function bmi(weight, height) {
  try {
    return weight / (height ^ 2);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

function main() {
  const weight = resync.questionInt('Enter your weight (kg): ');
  const height = resync.questionInt('Enter your height (m): ');
  const bmiResult = bmi(weight, height);

  console.log(`BMI: ${bmiResult}`);
}

main();

module.exports = { bmi };