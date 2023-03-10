'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'authors',
      [
        {
          name: 'Dan Brown',
        },
        {
          name: 'Stephen King',
        },
        {
          name: 'J. K. Rowling',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('authors', null, {});
  },
};
