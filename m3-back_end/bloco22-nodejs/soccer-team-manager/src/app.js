const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const apiCredentials = require('./middlewares/apiCredentials');

let nextId = 3;
const teams = require('./data/teams');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(apiCredentials);

// Routes

// app.get('/', (req, res) => res.status(200).json({ message: 'Hello, world!' }));

app.get('/teams', (_req, res) => res.json({ teams }));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  
  const team = teams.find((t) => t.id === id);

  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

app.post('/teams', validateTeam, (req, res) => {
  if (
    // confere se a sigla proposta esta inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se ja nao existe um time com essa sigla
    || !teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla' });
  }

  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});

module.exports = app;
