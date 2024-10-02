import Book from '../models/booksSchema.js';
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
      throw new ErrorResponse('no book found', 404);
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
};

export const addNewBook = async (req, res, next) => {
  const { name, author, imageUrl } = req.body;

  try {
    const newBook = await Book.create({
      name,
      author,
      imageUrl,
    });
    res.status(201).json(newBook);
    // const newBook = new Book({ name, author, imageUrl });
    // const savedBook = await newBook.save();
    // res.status(201).json(savedBook);
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  const { id } = req.params;
  const { name, author, imageUrl } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { name, author, imageUrl },
      { new: true } //this ensures the updated document is returned!
    );

    if (!updatedBook) {
      throw new ErrorResponse('Book not found', 404);
    }
    res.json(updatedBook);
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndDelete(id);
    res.json({ message: `Book with the id ${id} was deleted` });
  } catch (error) {
    next(error);
  }
};
