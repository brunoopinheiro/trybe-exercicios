function auth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token invalido!' });
  }
  next();
}

module.exports = auth;