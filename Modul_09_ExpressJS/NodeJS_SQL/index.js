import express from 'express';
import './db/server.js';
import booksRouter from './routes/booksRouter.js';

const app = express();
const PORT = 8000;

// cors etc.
// app.use(cors());
app.use(express.json()); // body-parser for POST-REQUESTS w/ JSON-Payloads

// ROUTES
app.use('/books', booksRouter);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
