import express from 'express';
import cors from 'cors';
import { products } from './products.js';

const app = express();
const PORT = 8000;

// app.use(cors()); // Cross Origin Ressource Sharing

// CRUD in ExpressJS
// app.get('/', (req, res) => res.send('Hello!'));
// app.post('/', (req, res) => res.send('We create a ressource'));
// app.put('/', (req, res) => res.send('We update a ressource'));
// app.delete('/', (req, res) => res.send('We delete a ressource'));
// app.delete('/delete', (req, res) => res.status(418).send('deleted'));

app
  .route('/')
  .get((req, res) => res.send('Hello'))
  .post((req, res) => res.send('We create a ressource'))
  .put((req, res) => res.send('We update a ressource'))
  .delete((req, res) => res.send('We delete a ressource'));

// Response Types
app.get('/data', (req, res) => {
  const data = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  };
  res.json(data);
});

// app.get('/products', (req, res) => res.json(products));
app.get('/products', async (req, res) => {
  try {
    const products = await fetch('https://fakestoreapi.com/products');
    const data = await products.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Errror');
  }
});

// Redirect
app.get('/redirect', (req, res) => res.redirect('/data'));
app.get('/download', (req, res) => res.download('package.json'));

app.get('/users/:id', (req, res) => {
  const userId = req.params.id; // holt den Parameter
  console.log(userId);
  res.send('check your server console!');
});

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
