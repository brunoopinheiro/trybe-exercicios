const VALID_USERNAME = 'thiagobraddock';
const VALID_URL = `https://api.github.com/users/${VALID_USERNAME}`;

const data = {
  name: 'Thiago "BRADDOCK" Oliveira',
  company: 'GreenCatDev',
  bio: 'Professor, Programador, Jogador de CS, Karateca, entusiasta metido a cozinheiro e sommelier.',
  location: 'Espírito Santo do Pinhal',
};

const fetchMock = (url) => {
  if (!url || url !== VALID_URL) {
    return Promise.reject(new Error('Usuário inválido'));
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve(data),
      });
    }, 200);
  });
};

global.fetch = jest.fn(fetchMock);

afterEach(jest.clearAllMocks);

module.exports = { fetchMock, VALID_URL, VALID_USERNAME};