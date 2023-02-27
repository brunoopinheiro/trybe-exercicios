const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../src/models/user.model');

describe('User Model', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('Possui o nome "User"', () => {
    checkModelName(User)('User');
  });

  describe('Possui as propriedades "fullName" e "email"', () => {
    ['fullName', 'email'].forEach(checkPropertyExists(user));
  });
});