import express from 'express';
import {
  addNewBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from '../controller/books.js';
import upload from '../services/Upload.js';

const booksRouter = express.Router();

booksRouter.route('/').get(getAllBooks);
booksRouter.route('/').post(upload.single('image'), addNewBook);
booksRouter.route('/:id').get(getBookById);
booksRouter.route('/:id').put(updateBook);
booksRouter.route('/:id').delete(deleteBook);

export default booksRouter;
