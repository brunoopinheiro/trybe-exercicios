const express = require('express');
const { readMoviesData, writeNewMovieData, updateMovieData, deleteMovieData } = require('./utils/fsUtils');

const app = express();

app.use(express.json());

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const allMovies = await readMoviesData();

    if (q) {
      const filteredMovies = allMovies.filter((m) => m.movie.includes(q));

      return res.status(200).json(filteredMovies);
    }

    return res.status(200).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
})

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

app.post('/movies', async (req, res) => {
  const newMovie = req.body;

  const newMovieObj = await writeNewMovieData(newMovie);

  return res.status(201).json({ movie: newMovieObj });
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const newMovieData = req.body;

  const updatedMovie = await updateMovieData(Number(id), newMovieData);

  return res.status(201).json({ movie: updatedMovie });
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;

  await deleteMovieData(Number(id));

  return res.status(204).end();
});

module.exports = app;