function validatePrice(req, res, next) {
  const { price } = req.body;

  if (price === undefined) return res.status(400).json({ message: 'Campo "price" obrigatório.' });

  if (price < 0 || typeof price !== 'number') {
    return res.status(400).json({
      message: 'Campo "price" deve ser maior ou igual a zero',
    });
  }

  next();
}

module.exports = validatePrice;
