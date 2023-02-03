const express = require('express');

const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');
const auth = require('../middlewares/auth');

const activiesRouter = express.Router();

activiesRouter.post(
  '/',
  validateName,
  validatePrice,
  validateDescription,
  auth,
  (_req, res) => res.sendStatus(201),
  );

module.exports = activiesRouter;