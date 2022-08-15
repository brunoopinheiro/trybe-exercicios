const verificaValores = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error ('Erro! Os valores precisam ser numericos.');
  }
}

const soma = (a, b) => {
  try {
    verificaValores(a, b);
    return a + b;
  } catch (erro) {
    return erro.message;
  }
}

console.log(soma(5, 5));
console.log(soma(5, '5'));
