// crie duas funcoes com as seguintes especificacoes

// funcao 1 - substitua a letra x em uma frase.

const substituaX = nome => `Tryber ${nome} aqui!`;

// funcao 2 - recebe retorno da funcao 1 e retorna uma nova string

function minhasSkills(string) {
  const skills = ['Javascript', 'HTML', 'CSS'];
  let retorno = `${string}\nMinhas tres principais habilidades sao:`
  for (skill of skills) {
    retorno += `\n* ${skill}`
  }
  return retorno;
}

console.log(minhasSkills(substituaX('Bebeto')));