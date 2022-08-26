// 1 = Dado o codigo abaixo, altere a funcao rectangleArea() de forma que seja impressa a area dos 3 retangulos.
// expected 2, 15, 54.

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));
});

// 2 - Crie uma funcao sum que dado um numero ilimitado de parametros retorna a soma desses parametros. Ao chamar a funcao dessa forma : sum (4, 5, 6) o numero 15 deve ser retornado.
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num);

console.log(sum(4, 5, 6));
