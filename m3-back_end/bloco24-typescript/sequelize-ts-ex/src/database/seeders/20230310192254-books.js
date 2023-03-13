'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          title: 'Código Da Vinci',
          author_id: 1,
          genre_id: 3,
        },
        {
          title: 'Origem',
          author_id: 1,
          genre_id: 3,
        },
        {
          title: 'O Iluminado',
          author_id: 2,
          genre_id: 1,
        },
        {
          title: 'Harry Potter e a Pedra Filosofal',
          author_id: 3,
          genre_id: 2,
        },
        {
          title: 'Harry Potter e a Câmara Secreta',
          author_id: 3,
          genre_id: 2,
        },
        {
          title: 'Harry Potter e o Prisioneiro de Azkaban',
          author_id: 3,
          genre_id: 2,
        },
        {
          title: 'Harry Potter e o Cálice de Fogo',
          author_id: 3,
          genre_id: 2,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('books', null, {});
  },
};
