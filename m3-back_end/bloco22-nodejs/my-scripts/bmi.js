// imc = peso / altura^2
const resync = require('readline-sync');

const BMI_INDEX = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weigth': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100,
  },
}

function bmi(weight, height) {
  try {
    return weight / (height ^ 2);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

function main() {
  const weight = resync.questionFloat('Enter your weight (kg): ');
  const height = resync.questionFloat('Enter your height (m): ');
  const bmiResult = bmi(weight, height);

  const statuses = Object.keys(BMI_INDEX);
  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_INDEX[status];

    return bmiResult >= minBMI && bmiResult <= maxBMI;
  })

  console.log(`BMI: ${bmiResult}`);
  console.log(resultFind);
}

main();

module.exports = { bmi };
