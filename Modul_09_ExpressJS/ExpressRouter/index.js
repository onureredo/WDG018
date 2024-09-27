import express from 'express';
import userRouter from './routes/userRouter.js';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.use('/users', userRouter);

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
