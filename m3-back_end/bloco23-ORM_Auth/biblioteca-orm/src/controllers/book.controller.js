const BookService = require('../services/book.service');

const errorMessages = {
  status500: 'An error has occurred',
  status404: 'Book not found',
};

const getAll = async (_req, res) => {
  try {
    const { author } = req.query;
    let books;

    if (author) {
      books = await BookService.getByAuthor(author);
    } else {
      books = await BookService.getAll();
    }
  
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessages.status500 });
  };
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);

    if (!book) return res.status(404).json({ message: errorMessages.status404 });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessages.status500 });
  };
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const newBook = await BookService.createBook(title, author, pageQuantity, publisher);

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessages.status500 });
  };
};

const udpateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    const updatedBook = await BookService.updateBook(id, { title, author, pageQuantity, publisher });

    if (!updatedBook) return res.status(404).json({ message: errorMessages.status404 });

    return res.status(200).json({ message: 'Book updated!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessages.status500 });
  }
};

const removeBook = async (req, res) => {
  try {
    const { id } = req.params;
    await BookService.removeBook(id);

    return res.status(200).json({ message: 'Book successfully deleted' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessages.status500 });
  };
};

module.exports = {
  getAll,
  getById,
  createBook,
  udpateBook,
  removeBook,
};