const greetingMessage = user => `Hello, ${user}! Glad to have you back.`;

const loginErrorMessage = user => `Pessoa usuaria '${user}' nao encontrada, tente novamente!`;

const user = {
  userName: 'Joana',
  password: 123456,
};

function verifyCredentials(userName, password) {
  if (password === 123456 && userName === 'Joana') {
    return greetingMessage(userName);
  } else {
    return loginErrorMessage(userName);
  }
};

const { userName, password } = user;

module.exports = { greetingMessage, loginErrorMessage, verifyCredentials }
