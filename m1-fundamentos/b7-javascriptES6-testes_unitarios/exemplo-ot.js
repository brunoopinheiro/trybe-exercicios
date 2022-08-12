// exemplo 1
const checkIfElse = (age) => {
  if (age >= 18) {
    return `Voce tem idade para dirigir`;
  } else {
    return `Voce ainda nao tem idade para dirigir...`;
  }
};

const checkTernary = (age) => (age >= 18 ? `Voce tem idade para dirigir!` : `Voce ainda nao tem idade para dirigir...`);
console.log(checkTernary(29));

// exemplo 2.1
const idade = 22;
const verificaIdade = (idade >= 18) ? `Pode dirigir!` : `Nao pode dirigir!`;
console.log(verificaIdade);

// exemplo 2.2
console.log(idade >= 18 && `Voce ja pode ter a carteira de motorista!`);