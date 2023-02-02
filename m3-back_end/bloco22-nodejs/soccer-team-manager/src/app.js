const express = require('express');
require('express-async-errors');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const apiCredentials = require('./middlewares/apiCredentials');

let nextId = 3;
const teams = require('./data/teams');

const app = express();
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
