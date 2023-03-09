const jwt = require('jsonwebtoken');
require('dotenv/config');

const { JWT_SECRET } = process.env;

module.exports = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    req.user = payload;

    return next();
  } catch (e) {
    e.statusCode = 401;
    return next(e);
  }
};