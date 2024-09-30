import pool from '../db/server.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllBooks = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM books');
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getBookById = async (req, res, next) => {
  const { id } = req.params;

  try {
    // const result = await pool.query(`SELECT * FROM books WHERE id = ${id}`);
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]); // SECURE
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

// export const addNewBook = async (req, res, next) => {
//   const { name, author, image_url } = req.body;

//   try {
//     const result = await pool.query(
//       'INSERT INTO books (name, author, image_url) VALUES ($1, $2, $3) RETURNING *',
//       [name, author, image_url]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (error) {
//     next(error);
//   }
// };

export const addNewBook = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new ErrorResponse('No file uploaded', 400);
    }

    const { name, author } = req.body;
    const imageUrl = req.file.path;

    if (!name || !author) {
      throw new ErrorResponse('all fields are required', 418);
    }
    const result = await pool.query(
      'INSERT INTO books (name, author, image_url) VALUES ($1, $2, $3) RETURNING *',
      [name, author, imageUrl]
    );
    res
      .status(201)
      .json({ message: 'Book uploaded succesfully', book: result.rows[0] });
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
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
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM books WHERE ID = $1', [id]);
    res.json({ message: `Book with the id ${id} was deleted.` });
  } catch (error) {
    next(error);
  }
};
