import User from '../models/User.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().populate('readingList.bookRefId');
    if (!users.length) {
      throw new ErrorResponse('No users found', 404);
    }
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate('readingList.bookRefId');
    if (!user) {
      throw new ErrorResponse(`User with id ${id} not found`, 404);
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  const { firstName, lastName } = req.body;

  try {
    const newUser = await User.create({ firstName, lastName });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { firstName, lastName },
      { new: true }
    );
    if (!user) {
      throw new ErrorResponse(`User with id ${id} not found`, 404);
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new ErrorResponse(`User with id ${id} not found`, 404);
    }
    res.json({ message: `User with id ${id} was deleted` });
  } catch (error) {
    next(error);
  }
};

export const addToReadingList = async (req, res, next) => {
  const { id } = req.params;
  const { bookRefId } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      throw new ErrorResponse(`User with id ${id} not found`, 404);
    }

    const alreadyInList = user.readingList.some(
      (book) => book.bookRefId.toString() === bookRefId
    );

    if (alreadyInList) {
      throw new ErrorResponse('Book is already in the reading list', 400);
    }

    user.readingList.push({ bookRefId, status: false });
    await user.save();
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const toggleBookStatus = async (req, res, next) => {
  const { id, bookId } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      throw new ErrorResponse(`User with id ${id} not found`, 404);
    }

    const book = user.readingList.id(bookId);
    if (!book) {
      throw new ErrorResponse(
        `Book with id ${bookId} not found in users reading list`,
        404
      );
    }

    book.status = !book.status; // toggle
    await user.save();
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const removeBookFromList = async (req, res, next) => {
  const { id, bookId } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      throw new ErrorResponse(`User with id ${id} not found`, 404);
    }

    user.readingList.pull({ _id: bookId });
    await user.save();
    res.json(user);
  } catch (error) {
    next(error);
  }
};
