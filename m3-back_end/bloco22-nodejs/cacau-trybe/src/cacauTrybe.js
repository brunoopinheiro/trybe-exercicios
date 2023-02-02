const fs = require('fs').promises;
const { join } = require('path');

const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (content) => {
  try {
    const completePath = join(__dirname, path);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (e) {
    console.error('Erro ao salvar arquivo', e.message);
    return null;
  };
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter((chocolate) => chocolate.brandId === brandId);
}

const findChocolateByName = async (query) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter((chocolate) => chocolate.name.toLowerCase().includes(query.toLowerCase()));
};

const updateChocolate = async (id, update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const newChocolate = { id, ...update };
  const updatedList = cacauTrybe.chocolates.reduce((acc, curr) => {
    if (curr.id === newChocolate.id) return [...acc, newChocolate];
    return [...acc, curr];
  }, []);

  await writeCacauTrybeFile({...cacauTrybe.brands, ...updatedList});
  return { chocolate: newChocolate };
}

const createChocolate = async (name, brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  const newChocolate = { id: cacauTrybe.nextChocolateId, name, brandId };
  
  cacauTrybe.chocolates.push(newChocolate);
  cacauTrybe.nextChocolateId += 1;
  await writeCacauTrybeFile(cacauTrybe);

  return newChocolate;
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  findChocolateByName,
  updateChocolate,
  createChocolate,
};
