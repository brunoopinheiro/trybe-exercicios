module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'comments',
      [
        {
          text: 'Este é um livro para aprofundar os conhecimentos',
          author: 'Sheila',
          book_id: 1,
        },
        {
          text: 'Este livro me ajudou a adquirir mais experiência em desenvolvimento do código',
          author: 'Presto',
          book_id: 1,
        },
        {
          text: 'Aprendi a fujir dos perigos de um código mal implementado',
          author: 'Eric',
          book_id: 2,
        },
        {
          text: 'Pra quem precisa organizar seus códigos o livro fornece diagramas e explicações sobre os padrões de projeto.',
          author: 'Diana',
          book_id: 3,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('books', null, {});
  },
};