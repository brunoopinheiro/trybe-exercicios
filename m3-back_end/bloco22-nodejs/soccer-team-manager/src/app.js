const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const teamsRouter = require('./routes/teamsRouter');
// const validateTeam = require('./middlewares/validateTeam');
// const existingId = require('./middlewares/existingId');
// const apiCredentials = require('./middlewares/apiCredentials');

// const nextId = 3;
// const teams = require('./data/teams');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/teams', teamsRouter);
// app.use(apiCredentials);

// Routes

// app.get('/', (req, res) => res.status(200).json({ message: 'Hello, world!' }));

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;
