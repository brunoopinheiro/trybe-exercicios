import { NextFunction, Request, Response } from "express";
import Book from "../interfaces/book.interface";
import statusCodes from "../statusCodes";

const properties = ['title', 'price', 'author', 'isbn'];

function differenceBetweenArrays(arr1: unknown[], arr2: unknown[]) {
  return arr1.filter(x => !arr2.includes(x));
}

function validatePartialBook(req: Request, res: Response, next: NextFunction) {
  const book: Partial<Book> = req.body;
  const difference = differenceBetweenArrays(Object.keys(book), properties);
  const isValidBook = difference.length === 0;

  if (!isValidBook) {
    return res.status(statusCodes.BAD_REQUEST).send(`Os campos ${difference} não existem no tipo Book.`)
  }

  next();
}

export default validatePartialBook;