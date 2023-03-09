const Joi = require('joi');

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

module.exports = { validateBody };