import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validatePartialBook from '../middlewares/books.middleware';

const router = Router();

const booksController = new BooksController();

router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
router.post('/books', booksController.create);
router.put('/books/:id', booksController.update);
router.delete('/books/:id', booksController.remove);
router.patch('/books/:id', validatePartialBook, booksController.partialUpdate);

export default router;