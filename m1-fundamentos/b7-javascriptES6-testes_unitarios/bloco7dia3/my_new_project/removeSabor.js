const removeBebida = (array, remover) => {
  array.splice(array.indexOf(`${remover}`), 1);
  return array;
};

module.exports = removeBebida;
