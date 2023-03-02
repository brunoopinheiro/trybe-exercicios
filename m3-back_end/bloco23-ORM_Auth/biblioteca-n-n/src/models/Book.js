/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      releaseYear: DataTypes.INTEGER,
      totalPages: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true,
    },
  );

  return Book;
};