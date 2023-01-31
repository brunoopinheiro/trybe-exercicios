const readline = require('readline-sync');
const { writeNewMissionData } = require('./utils/fsUtils');

async function main() {
  const name = readline.question('Qual o nome da missao? ');
  const year = readline.questionInt('Qual o ano da missao? ');
  const country = readline.question('Qual o pais da msisao? ');
  const destination = readline.question('Qual o destino da missao? ');

  const newMission = { name, year, country, destination };
  writeNewMissionData(newMission);
  console.log('Nova missao registrada com sucesso.');
}

main();
