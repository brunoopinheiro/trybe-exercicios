const numbers = [1, 32, 44, 2, 3];

const iteracoesDoReduce = numbers.reduce((acc, curr) => {
  console.log(`valor atual (acc): ${acc}`);
  console.log(`valor atual (curr): ${curr}`);
  console.log('--------------');

  return acc + curr;
});

console.log(`O resultado final: ${iteracoesDoReduce}`);

// Exemplo 2 - Usando Initial Value
const numbers2 = [1, 32, 44, 2, 3];

const totalSum = numbers2.reduce((acc, curr) => {
  console.log(`valor acc: ${acc}; valor curr: ${curr}`);

  return acc + curr;
}, 30);

console.log(`valor final: ${totalSum}`);

// Exemplo 3 - from MDN Doc
const array = [15, 16, 17, 18, 19];

function reducer(previousValue, currentValue, index) {
  const returns = previousValue + currentValue;
  console.log(`previous value: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`);
  return returns;
}

array.reduce(reducer);
array.reduce(reducer, 10);