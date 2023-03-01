const { User, Book } = require('../models');

const getUsersBooksById = (id) => User.findOne({
  where: { id },
  include: [{ model: Book, as: 'books', through: { attributes: [] } }],
  // A propriedade `through: { attributes: [] }` deve estar presente.
  // Sem ela, cada `book` apareceriam todos seus respectivos `users`.
});

module.exports = {
  getUsersBooksById,
};
