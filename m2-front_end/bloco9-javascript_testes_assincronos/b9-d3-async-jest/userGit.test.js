const { getUserGit, getUserInfo } = require('./scripts');
const { VALID_URL, VALID_USERNAME, fetchMock} = require('./fetchMock');
const { expect } = require('@jest/globals');

const expected = {
  name: 'Thiago "BRADDOCK" Oliveira',
  company: 'GreenCatDev',
  bio: 'Professor, Programador, Jogador de CS, Karateca, entusiasta metido a cozinheiro e sommelier.',
  location: 'Espírito Santo do Pinhal',
}

describe('Test scripts.js', () => {
  it('tests getUserInfo', async () => {
    expect.assertions(1);
    expect(await getUserInfo('thiagobraddock')).toEqual(expected);
  });

  it('verifies if fetch have been called', async () => {
    expect.assertions(1);
    await getUserInfo(VALID_USERNAME);
    expect(fetch).toHaveBeenCalled();
  });

  it('verifies if fetch was called with the valid url', async () => {
    expect.assertions(1);
    await getUserInfo(VALID_USERNAME);
    expect(fetch).toHaveBeenCalledWith(VALID_URL);
  });

  it('should return an error when called with an invalid user', async () => {
    try{
      await getUserInfo('INVALID_USERNAME');
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toEqual(new Error('Usuário inválido'));
    }
  });
});
