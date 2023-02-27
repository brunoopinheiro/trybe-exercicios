const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

module.exports = {
  getAll,
};
