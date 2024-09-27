import pool from '../db/server.js';

export const getAllBooks = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM books'); // boooooks
    res.json(result.rows);
  } catch (error) {
    // res.status(500).json({ message: 'something broke' });
    next(error);
  }
};

export const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    // const result = await pool.query(`SELECT * FROM books WHERE id = ${id}`);
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]); // SECURE
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
};

export const addNewBook = async (req, res) => {
  const { name, author, image_url } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO books (name, author, image_url) VALUES ($1, $2, $3) RETURNING *',
      [name, author, image_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { name, author, image_url } = req.body;

  try {
    const result = await pool.query(
      'UPDATE books SET name = $1, author = $2, image_url = $3 WHERE id = $4 RETURNING *',
      [name, author, image_url, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'something broke' });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM books WHERE ID = $1', [id]);
    res.json({ message: `Book with the id ${id} was deleted.` });
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
};
