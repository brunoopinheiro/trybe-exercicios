import Book from "./Book";
import Database from "./database";

export default class BookRepository implements Database<Book> {
  save(book: Book): void {
    console.log('Book saved', { author: book.author, title: book.title });
  }
}