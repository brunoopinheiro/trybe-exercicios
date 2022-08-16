const {
  greetingMessage,
  loginErrorMessage,
  verifyCredentials,
} = require('./loginValidation');

describe('a funcao verifyCredentials()', () => {
  
  it('verifyCredentials() calls the correct function depending on the user and password input', () => {
    const user = {
      userName: 'Bob',
      password: 123456,
    };

    const { userName, password } = user;

    // demonster teste falhando
    expect(verifyCredentials({ userName, password })).toBe(
      'Hello, Joana! Glad to have you back.'
      );
  });

  it('greetingMessage() returns a message in the forma: `Hello, ${user}! Glad to have you back.`', () => {
    expect(greetingMessage('Lucas')).toBe(
      'Hello, Lucas! Glad to have you back.'
    );
  });

  it("loginErrorMessage() returns a message in the format: `Pessoa usuaria '${user}' nao encontrada, tente novamente!`", () => {
    expect(loginErrorMessage('Bob')).toBe(
      "Pessoa usuaria 'Bob' nao encontrada, tente novamente!"
    );
  });
});
