const fs = require('fs').promises;
const readlineSync = require('readline-sync');

const SIMPSONS_BASEFILE = './data/simpsons.json';
const SIMPSONS_FAMILY = './data/simpsonsFamily.json';

async function getData(filepath) {
  const data = await fs.readFile(filepath, 'utf-8');
  const simpsonsData = JSON.parse(data);
  return simpsonsData;
}

async function listCharacters() {
  try {
    const data = await getData(SIMPSONS_BASEFILE);
    data.forEach((simpson) => console.log(`${simpson.id} - ${simpson.name}`));
  } catch (e) {
    console.error(e.message);
  }
}

async function getCharacterById(id) {
  const data = await getData(SIMPSONS_BASEFILE);

  const promise = new Promise((resolve, reject) => {
    const character = data.find((sim) => Number(sim.id) === id);

    if (!character) reject(new Error('Id invalido'));

    resolve(character);
  });

  return promise;
}

async function filterSimpsons() {
  const data = await getData(SIMPSONS_BASEFILE);

  const newArray = data.filter((simp) => simp.id !== '10' && simp.id !== '6');
  // Deveria ser inserido no mesmo arquivo, sobrescrevendo.
  // Esta sendo feito em um arquivo diferente da origem propositalmente
  await fs.writeFile('./data/filteredSimpsons.json', JSON.stringify(newArray));
}

async function simpsonsFamily() {
  const data = await getData(SIMPSONS_BASEFILE);

  const newArray = data.filter((simp) => Number(simp.id) <= 4);
  await fs.writeFile(SIMPSONS_FAMILY, JSON.stringify(newArray));
}

async function addToSimpsonsFamilyById() {
  try {
    console.log('Lista de todos os personagens:');
    await listCharacters();
  
    const id = readlineSync.questionInt('Insira o ID do personagem que voce quer adicionar a familia simpson: ');
    const character = await getCharacterById(id);
    
    const oldFamily = await getData(SIMPSONS_FAMILY);
    const newFamily = [...oldFamily, character];
    await fs.writeFile(SIMPSONS_FAMILY, JSON.stringify(newFamily));
  
    console.log('Personagem Inserido com Sucesso!');
  } catch (e) {
    console.error(e.message);
  }
}



async function main() {
  // E6a
  // listCharacters();

  // E6b
  // const simpson = await getCharacterById(4);
  // console.log(simpson);

  // E6c
  // filterSimpsons();

  // E6d
  // simpsonsFamily();

  // E6e
  addToSimpsonsFamilyById();
}

main();

module.exports = {
  listCharacters,
  getCharacterById,
  filterSimpsons,
  simpsonsFamily,
}