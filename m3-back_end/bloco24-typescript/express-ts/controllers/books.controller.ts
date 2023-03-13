import { Request, Response } from "express";
import statusCodes from "../statusCodes";
import BookService from "../services/book.service";

class BooksController {
  constructor(private bookService = new BookService()) { }

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const books = await this.bookService.getAll();
    return res.status(statusCodes.OK).json(books);
  }
}

export default BooksController;