const fs = require('fs').promises;
const path = require('path');

const MOVIES_DATA_PATH = '../movies.json';

async function readMoviesData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, MOVIES_DATA_PATH));
    const movies = JSON.parse(data);

    return movies;
  } catch (error) {
    console.error(`Erro na leitura do arquivo ${error}`);
  }
}

async function writeNewMovieData(newMovie) {
  try {
    const oldMovies = await readMoviesData();
    const newMovieObj = { id: Date.now(), ...newMovie };
    const allMovies = JSON.stringify([...oldMovies, newMovieObj]);

    await fs.writeFile(path.resolve(__dirname, MOVIES_DATA_PATH), allMovies);
    return newMovieObj;
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`);
  }
}

async function updateMovieData(id, newData) {
  const oldMovies = await readMoviesData();
  const updatedMovie = { id, ...newData };

  const newMoviesList = oldMovies.reduce((moviesList, movie) => {
    if (movie.id === updatedMovie.id) return [...moviesList, updatedMovie];
    return [...moviesList, movie];
  }, []);

  const updatedData = JSON.stringify(newMoviesList);

  try {
    await fs.writeFile(path.resolve(__dirname, MOVIES_DATA_PATH), updatedData);

    console.log(`Atualizou filme com ID: ${id}`);

    return updatedMovie;
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`);
  }
}

async function deleteMovieData(id) {
  const oldMoviesList = await readMoviesData();
  const newMoviesList = oldMoviesList.filter((movie) => movie.id !== id);

  const updatedData = JSON.stringify(newMoviesList);

  try {
    await fs.writeFile(path.resolve(__dirname, MOVIES_DATA_PATH), updatedData);
    console.log(`Deletou filme com ID: ${id}`);
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`);
  }
}

module.exports = {
  readMoviesData,
  writeNewMovieData,
  updateMovieData,
  deleteMovieData,
}