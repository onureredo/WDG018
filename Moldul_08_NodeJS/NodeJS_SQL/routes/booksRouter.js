import express from 'express';
import {
  addNewBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from '../controller/books.js';

const booksRouter = express.Router();

booksRouter.route('/').get(getAllBooks).post(addNewBook);
booksRouter.route('/:id').get(getBookById).put(updateBook).delete(deleteBook);

export default booksRouter;
