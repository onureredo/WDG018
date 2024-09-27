import express from 'express';
import './db/server.js';
import booksRouter from './routes/booksRouter.js';
import cors from 'cors';
import { getOnlyMiddleware } from './middlewares/getOnlyMiddleware.js';
import { timeLogger } from './middlewares/timeLogger.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const PORT = 8000;

// Middlewares
app.use(cors({ origin: 'localhost:5173' }));
app.use(express.static('public'));
app.use(express.json()); // body-parser for POST-REQUESTS w/ JSON-Payloads
// app.use(getOnlyMiddleware);
// app.use(timeLogger);

// ROUTES
app.get('/', (req, res) => res.send('Welcome!'));
app.use('/books', booksRouter);
// app.use('/test', timeLogger);

// Error-Handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
