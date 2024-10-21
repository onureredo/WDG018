import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

// REGISTER
export const signUp = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, username, email, password } = req.body;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) throw new ErrorResponse('Email already exists', 409);

  const hash = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    firstName,
    lastName,
    username,
    email,
    password: hash,
  });

  const token = jwt.sign({ uid: newUser.id }, process.env.JWT_SECRET);
  res.status(201).send({ token });
});

// LOGIN
export const signIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({
    where: { email },
    attributes: ['id', 'password'],
  });
  if (!existingUser) throw new ErrorResponse('Email does not exist', 404);

  const match = await bcrypt.compare(password, existingUser.password);
  if (!match) throw new ErrorResponse('Password is incorrect', 401);

  const token = jwt.sign({ uid: existingUser.id }, process.env.JWT_SECRET, {
    expiresIn: '30m',
  });

  res.cookie('token', token, { maxAge: 1800000 });
  res.send({ status: 'logged in' });
});

// LOGOUT
export const signOut = asyncHandler(async (req, res, next) => {
  res.clearCookie('token');
  res.send({ status: 'logged out' });
});

// Verify User
export const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByPk(req.uid);
  res.json(user);
});
