/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 */
module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define(
    'UserBook',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'users_books',
    },
  );

  UserBook.associate = (models) => {
    models.Book.belongsToMany(
      models.User,
      {
        as: 'users',
        through: UserBook,
        foreignKey: 'bookId', // se refere ao id de book na tabela de user_books
        otherKey: 'userId', // se refere a outra chave de user_books
      },
    );
    models.User.belongsToMany(
      models.Book,
      {
        as: 'books',
        through: UserBook,
        foreignKey: 'userId', // Se refere ao id de user na tabela de user_books
        otherKey: 'bookId',
      },
    );
  };

  return UserBook;
};
