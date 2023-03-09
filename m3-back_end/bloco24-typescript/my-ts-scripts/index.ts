import readline from 'readline-sync';

const scripts = [
  { name: 'Converter comprimento', script: './length' },
  { name: 'Converter mass', script: './mass' },
  { name: 'Converter capacidade', script: './capacity' },
];

const scriptNames = scripts.map(item => item.name);

const choice = readline.keyInSelect(scriptNames, 'Escolha um numero para executar o script de conversão: ');

require(scripts[choice].script);