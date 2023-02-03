function validateName(req, res, next) {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: 'Campo "name" obrigatório' });

  if (name.length < 4) {
    return res.status(400).json({ message: '"name" deve ter 4 ou mais caracteres' });
  }

  next();
}

module.exports = validateName;