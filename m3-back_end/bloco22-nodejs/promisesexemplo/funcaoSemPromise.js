function calcularDivisao(num1, num2) {
  if (num2 === 0) throw new Error('Nao pode ser feita uma divisao por zero');

  const resultado = num1 / num2;
  return resultado;
}

try {
  const resultado = calcularDivisao(2, 1);
  console.log(`Resultado: ${resultado}`);
} catch (e) {
  console.log(`Erro: ${e.message}`);
}