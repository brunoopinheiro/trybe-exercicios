// Esse codigo contem varios exemplos e nao uma logica unica.
// Nao executar direto.

// exemplo 1
const soma = (num1, num2) =>  num1 + num2;

console.log(soma(2, 2));

// exemplo 2
function contaPalavrasOld(frase) {
  return frase.split(' ').length;
}

console.log(contaPalavrasOld('Fala tribo, beleza?'));

// usando arrow function
const contaPalavras = frase => frase.split(' ').length; // quando ha apenas 1 parametro, nao precisa dos ()

console.log(contaPalavras('Fala tribo, beleza?'));

// exemplo 3
function objetoPessoaOld (nome, idade) {
  return {
    nome: nome,
    idade: idade
  }
}

console.log(objetoPessoaOld('Joaquim', 25));

// usando arrow function
const objetoPessoa = (nome, idade) => ({nome:nome, idade: idade}); // os () depois da => para permitir a criacao do objeto

console.log(objetoPessoa('Joaquim', 25));

// exemplo 4
const printName = () => 'Lucas';
console.log(printName());