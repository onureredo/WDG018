import { Router } from 'express';
import * as userController from '../controllers/users.js';

const usersRouter = Router();

usersRouter
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

usersRouter
  .route('/:id')
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

usersRouter.route('/:id/books').post(userController.addToReadingList);

usersRouter
  .route('/:id/books/:bookId')
  .put(userController.toggleBookStatus)
  .delete(userController.removeBookFromList);

export default usersRouter;
