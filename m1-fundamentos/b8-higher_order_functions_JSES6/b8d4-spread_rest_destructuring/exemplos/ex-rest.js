function quantosParams(...args) {
  console.log('parametros:', args);
  return `Voce passou ${args.length} parametros para a funcao.`;
};

console.log(quantosParams(0, 1, 2));
console.log(quantosParams('string', null, [1, 2, 3], {}));

// Exemplo 2
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60));
