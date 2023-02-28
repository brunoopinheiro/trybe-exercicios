const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  });

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const getByAuthor = async (author) => {
  const books = await Book.findAll({
    where: { author },
    order: [['title', 'ASC']],
  });

  return books;
}

const createBook = async (title, author, pageQuantity, publisher) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });

  return newBook;
};

// updateBook(id, updateObject{title, author, pageQuantity})
const updateBook = async (id, updateObject) => {
  const [updatedBook] = await Book.update(
    updateObject,
    { where: { id } },
  );

  console.log(updatedBook);
  return updatedBook;
};

const removeBook = async (id) => {
  const book = await Book.destroy(
    { where: { id } },
  );

  console.log(book);
  return book;
}

module.exports = {
  getAll,
  getById,
  getByAuthor,
  createBook,
  updateBook,
  removeBook,
}