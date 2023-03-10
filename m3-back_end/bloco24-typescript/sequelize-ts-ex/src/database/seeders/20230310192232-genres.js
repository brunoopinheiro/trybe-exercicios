'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'genres',
      [
        {
          genre: 'Horror',
        },
        {
          genre: 'Fantasia',
        },
        {
          genre: 'Suspense',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('genres', null, {});
  },
};
