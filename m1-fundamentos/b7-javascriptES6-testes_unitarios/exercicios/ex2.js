const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const compareNumbers = (a, b) => a - b;
// const sortOddsAndEvens = array => array.sort(compareNumbers);

const sortOddsAndEvens = array => array.sort((a, b) => a - b);

console.log(`Os numeros ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);