const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();

  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (_req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();

  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacauTrybe.findChocolateByName(name);
  res.status(chocolates.length === 0 ? 404 : 200).json(chocolates);
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;

  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

module.exports = app;