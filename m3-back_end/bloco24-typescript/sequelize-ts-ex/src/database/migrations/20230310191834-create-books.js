'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'books',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: Sequelize.STRING(40),
          allowNull: false,
        },
        author_id: {
          type: Sequelize.INTEGER,
          field: 'author_id',
          references: {
            model: 'authors',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        genreId: {
          type: Sequelize.INTEGER,
          field: 'genre_id',
          references: {
            model: 'genres',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('books');
  }
};
