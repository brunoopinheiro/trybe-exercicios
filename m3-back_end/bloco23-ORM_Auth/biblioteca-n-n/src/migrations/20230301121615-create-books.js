// 'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'books',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        releaseYear: {
          allowNull: false,
          type: Sequelize.INTEGER,
          field: 'release_year',
        },
        totalPages: {
          allowNull: false,
          type: Sequelize.INTEGER,
          field: 'total_pages',
        },
      },
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('books');
  },
};
