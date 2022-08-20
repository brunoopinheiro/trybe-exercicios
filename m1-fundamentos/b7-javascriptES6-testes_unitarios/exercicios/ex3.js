// crie uma funcao que receba um numero e retorne seu fatorial

// const factorial = n => {
//   let resultado = n;
//   for (let i = n - 1; i > 0; i -= 1) {
//     resultado = resultado * i;
//   }
//   return resultado;
// }

const factorial = n => (n > 0 ? n * factorial(n - 1) : 1);

const a = 150;
console.log(`Esse e o fatorial de ${a}: ${factorial(a)} `);