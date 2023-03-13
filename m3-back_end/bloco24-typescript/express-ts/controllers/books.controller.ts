import { Request, Response } from "express";
import statusCodes from "../statusCodes";
import BookService from "../services/book.service";

class BooksController {
  constructor(private bookService = new BookService()) { }

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const books = await this.bookService.getAll();
    return res.status(statusCodes.OK).json(books);
  }

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const book = await this.bookService.getById(id);

    if (!book) {
      return res.status(statusCodes.NOT_FOUND).json({ message: 'Book not found!' });
    }

    return res.status(statusCodes.OK).json(book);
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const book = req.body;

    const bookCreated = await this.bookService.create(book);
    return res.status(statusCodes.CREATED).json(bookCreated);
  }
}

export default BooksController;