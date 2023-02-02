const fs = require('fs/promises');
const path = require('path');

const AUTHDATA_PATH = '../authdata.json';

module.exports = async function apiCredentials(req, res, next) {
  // pega o token do header, se houver
  const token = req.header('X-API-TOKEN');
  // le o conteudo do authData
  const authdata = await fs.readFile(path.resolve(__dirname, AUTHDATA_PATH), { encoding: 'utf-8' });
  // readFile nos deu uma string, vamos carregar um objeto a partir dela
  const authorized = JSON.parse(authdata);

  if (token in authorized) {
    next();
  } else {
    res.sendStatus(401);
  }
};