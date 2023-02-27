const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const createBook = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity });

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
  createBook,
  updateBook,
  removeBook,
}