const listaAprovadas = [
  'ada.lovelace@example.com',
  'marie.curie@example.com',
  'margaret.hamilton@example.com',
  'alan.turing@example.com'
];

const enviarEmail = (item, posicao, array) => {
  console.log(`Email para ${item} foi enviado com sucesso!`);
  console.log(`Sua posicao foi: ${posicao + 1}/${array.length}`);
};

listaAprovadas.forEach(enviarEmail);

// Exemplo 2

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index, array) => {
  array[index] = name.toUpperCase();
}

names.forEach(convertToUpperCase);
console.log(names);
