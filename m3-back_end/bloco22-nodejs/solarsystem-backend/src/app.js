const express = require('express');
const {
  updateMissionData,
  deleteMissionData,
} = require('./utils/fsUtils');

const {
  findAll,
  insert,
} = require('./db/missionsDB');

require('express-async-errors');

const app = express();
app.use(express.json());

// Middlewares
const validateMissionId = (req, res, next) => {
  const { id } = req.params;
  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) {
    res.status(400).send({ message: 'ID invalido! Precisa ser um numero.' });
  } else {
    next();
  }
};

const validateMissionData = (req, res, next) => {
  const requiredProperties = ['name', 'year', 'country', 'destination'];
  if (requiredProperties.every((property) => property in req.body)) {
    next();
  } else {
    res.sendStatus(400);
  }
};
// Routes
app.get('/missions', async (_req, res) => {
  const missions = await findAll();

  return res.status(200).json({ missions });
});

app.post('/missions', validateMissionData, async (req, res) => {
  const newMission = req.body;

  const newMissionWithId = await insert(newMission);

  return res.status(201).json({ mission: newMissionWithId });
});

app.put('/missions/:id', validateMissionId, validateMissionData, async (req, res) => {
  const { id } = req.params;
  const updatedMissionData = req.body;

  const updatedMission = await updateMissionData(Number(id), updatedMissionData);

  return res.status(201).json({ mission: updatedMission });
});

app.delete('/missions/:id', validateMissionId, async (req, res) => {
  const { id } = req.params;
  await deleteMissionData(Number(id));

  return res.status(204).end();
});

app.use((error, _req, _res, next) => {
  console.error(error.stack);
  next(error);
});

app.use((_error, _req, res, _next) => {
  res.status(500).send({ message: 'Eita, deu ruim!' });
});

module.exports = app;
