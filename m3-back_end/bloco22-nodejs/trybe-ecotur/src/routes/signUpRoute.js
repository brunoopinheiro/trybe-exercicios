const express = require('express');
const generateToken = require('../utils/generateToken');
const validateSignup = require('../middlewares/validateSignUp');

// middlewares

const signUpRoute = express.Router();

signUpRoute.post('/', validateSignup, (_req, res) => {
  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = signUpRoute;