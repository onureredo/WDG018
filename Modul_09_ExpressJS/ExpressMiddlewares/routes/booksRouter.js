import { Router } from 'express';
import {
  addNewBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from '../controller/books.js';
import { booksLogger } from '../middlewares/booksLogger.js';
import { timeLogger } from '../middlewares/timeLogger.js';

const booksRouter = Router();
// booksRouter.use(booksLogger, timeLogger);

booksRouter.route('/').get(booksLogger, timeLogger, getAllBooks);
booksRouter.route('/').post(addNewBook);
booksRouter.route('/:id').get(getBookById);
booksRouter.route('/:id').put(updateBook);
booksRouter.route('/:id').delete(deleteBook);

// booksRouter.route('/').get(getAllBooks).post(addNewBook);
// booksRouter.route('/:id').get(getBookById).put(updateBook).delete(deleteBook);

export default booksRouter;
