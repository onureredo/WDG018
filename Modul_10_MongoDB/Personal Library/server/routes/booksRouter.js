import { Router } from 'express';
import * as bookController from '../controllers/books.js';

const booksRouter = Router();

booksRouter
  .route('/')
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

booksRouter
  .route('/:id')
  .get(bookController.getBookById)
  .put(bookController.updateBook)
  .delete(bookController.deleteBook);

export default booksRouter;
