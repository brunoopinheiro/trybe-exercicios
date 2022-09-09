const { getUserGit, getUserInfo } = require('./scripts');
const { expect } = require('@jest/globals');

const expected = {
  name: 'Thiago "BRADDOCK" Oliveira',
  bio: 'Professor, Programador, Montanhista, Jogador de CS, Karateca, entusiasta metido a cozinheiro e sommelier.',
  location: 'Espírito Santo do Pinhal, SP - Brasil',
  company: '@betrybe',
}

describe('Test scripts.js', () => {
  it('tests getUserInfo', async () => {
    expect.assertions(1);
    expect(await getUserInfo('thiagobraddock')).toEqual(expected);
  });
});
