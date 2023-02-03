const teams = require('../data/teams');

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    res.sendStatus(400);
  }
  const validTeam = teams.find((team) => team.id === id);
  if (validTeam) {
    next();
  } else {
    res.status(404).json({ message: 'Time não encontrado' });
  }
};

module.exports = existingId;