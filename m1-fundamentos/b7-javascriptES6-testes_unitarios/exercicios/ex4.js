// crie uma funcao que recebe uma frase como parametro e retorne a maior palavra da frase

const longestWord = string => {
  let entrada = string.split(' ').sort((a, b) => a.length - b.length);
  return entrada[entrada.length - 1];
};

console.log(longestWord('Antonio foi no banheiro e nao sabemos o que aconteceu'));