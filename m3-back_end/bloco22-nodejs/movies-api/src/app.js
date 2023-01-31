const express = require('express');
const { readMoviesData } = require('./utils/fsUtils');

const app = express();

app.use(express.json());

app.get('/movies', async (_req, res) => {
  const allMovies = await readMoviesData();

  return res.status(200).json({ movies: allMovies });
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  
  const movies = await readMoviesData();
  const requestedMovie = movies.find((m) => m.id === Number(id));

  if (!requestedMovie) return res.status(404).json({ message: 'Movie not found' });

  return res.status(200).json({ movie: requestedMovie });
});

module.exports = app;