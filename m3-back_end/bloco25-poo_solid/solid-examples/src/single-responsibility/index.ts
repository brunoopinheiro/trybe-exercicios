import Book from "./Book";
import BookRepository from "./BookRepository";

const cleanCode = new Book('Robert C. Martin', 'Clean Code');
const dune = new Book('Frank Herbert', 'Dune');
const repository = new BookRepository();

repository.save(cleanCode);
repository.save(dune);
