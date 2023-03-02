const Joi = require('joi');
require('dotenv/config');
const jwt = require('jsonwebtoken');

const { JWT_SECRET, ADMIN_PASSWORD } = process.env;

// Método messages() customiza mensagens de erro.
const validateBody = (body) => Joi.object({
    username: Joi.string().min(5).alphanum().required()
    .messages({
      'string.min': '"username" length must be 5 characters long',
      'string.required': '"username" is required',
    }),
    password: Joi.string().min(5).required()
    .messages({
      'string.min': '"password" length must be 5 characters long',
      'string.required': '"password" is required',
    }),
  }).validate(body);

module.exports = async (req, res, next) => {
  const { error } = validateBody(req.body);

  if (error) return next(error);

  if (req.body.username === 'admin' && req.body.password !== ADMIN_PASSWORD) {
    const err = new Error('Invalid username or password');
    err.statusCode = 401;
    return next(err);
  }
  const admin = req.body.username === 'admin' && req.body.password === ADMIN_PASSWORD;

  const payload = {
    username: req.body.username,
    admin,
  };

  const token = jwt.sign(
    payload,
    JWT_SECRET,
    { expiresIn: '1h' },
  );

  return res.status(200).json({ token });
};
