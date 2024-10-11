import { Router } from 'express';
import * as postController from '../controllers/posts.js';
import verifyToken from '../middlewares/verifyToken.js';

const postsRouter = Router();

postsRouter
  .route('/')
  .get(postController.getAllPosts)
  .post(verifyToken, postController.createPost);

postsRouter
  .route('/:id')
  .get(postController.getSinglePost)
  .put(verifyToken, postController.udpatePost)
  .delete(verifyToken, postController.deletePost);

export default postsRouter;
