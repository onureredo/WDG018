// import express from 'express';
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.send('get users');
});

userRouter.get('/something', (req, res) => {
  res.send('create users');
});

export default userRouter;
