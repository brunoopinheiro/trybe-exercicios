/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true,
    },
  );

  return User;
};