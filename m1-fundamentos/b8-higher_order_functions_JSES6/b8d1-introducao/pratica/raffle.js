const compare = (n1, n2) => (n1 === n2) ? 'Parabens, voce ganhou' : 'Tente novamente';

const raffle = (number, compareFunction) => {
  const luckyNumber = Math.ceil(Math.random() * 5);
  const result = compareFunction(number, luckyNumber);
  return result;
};

console.log(raffle(1, compare));
