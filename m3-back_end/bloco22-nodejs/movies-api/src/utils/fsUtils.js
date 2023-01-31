const fs = require('fs').promises;
const path = require('path');

const MOVIES_DATA_PATH = '../src/movies.json';

async function readMoviesData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, MOVIES_DATA_PATH));
    const movies = JSON.parse(data);

    return movies;
  } catch (error) {
    console.error(`Erro na leitura do arquivo ${error}`);
  }
}

module.exports = {
  readMoviesData,
}