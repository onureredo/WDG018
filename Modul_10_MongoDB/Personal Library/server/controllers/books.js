import Book from '../models/Book.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    if (!books.length) {
      throw new ErrorResponse('No book found', 404);
    }
    res.json(books);
  } catch (error) {
    next(error);
  }
};

export const getBookById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (!book) {
      throw new ErrorResponse(`Book with id ${id} was not found`, 404);
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
};

export const createBook = async (req, res, next) => {
  const { title, author, isbn } = req.body;

  try {
    const newBook = await Book.create({ title, author, isbn });
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  const { id } = req.params;
  const { title, author, isbn } = req.body;

  try {
    const book = await Book.findByIdAndUpdate(
      id,
      { title, author, isbn },
      { new: true }
    );
    if (!book) {
      throw new ErrorResponse(`Book with id ${id} was not found`, 404);
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      throw new ErrorResponse(`Book with id ${id} was not found`, 404);
    }
    res.json({ message: `Book with id: ${id} was deleted` });
  } catch (error) {
    next(error);
  }
};
