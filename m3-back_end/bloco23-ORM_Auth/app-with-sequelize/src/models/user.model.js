const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });
  (async () => {
    // sync method is being called. This means that everytime the server is initialized, the table will be recreated.
    // This is good for tests, but should NOT be used in production.
    await sequelize.sync({ force: true });
    // Functions here
  })();

  return User;
};

module.exports = UserModel;