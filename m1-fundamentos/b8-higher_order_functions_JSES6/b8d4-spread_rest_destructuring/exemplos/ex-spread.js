const carros = ["Gol", "HB20", "Focus"];
const motos = ["Biz", "R1"];

const veiculos = ['F40', ... carros, 'Uno', ...motos];
// [...carros, ...motos] = ['F40', carros[0], carros[1], carros[2], 'Uno', motos[0], motos[1]]

console.log(veiculos);

// Exemplo 2
const pessoa = {
  nome: 'Nadia',
  idade: 28,
  cidade: 'BH'
};

const conhecimentosTrybe = {
  softSkills: true,
  hardskills: true,
  trabalho: true,
};

const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe,
  esporte: 'corrida',
};

console.log(pessoaTryber);

// Exemplo 3
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);

// Exemplo 4 - Funcao
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo));

// Exemplo 5
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers));

// Exemplo 6 - Fixar
const specialFruit = ['manga', 'banana', 'laranja'];
const additionalItens = ['granola', 'leite condensado']

const fruitSalada = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalada(specialFruit, additionalItens));
