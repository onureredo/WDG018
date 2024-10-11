import Post from '../models/postSchema.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find().populate('author');
  if (!posts.length) throw new ErrorResponse('No post found', 404);
  res.json(posts);
});

export const getSinglePost = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const post = await Post.findById(id).populate('author');
  if (!post) throw new ErrorResponse(`Post ${id} does not exist`, 404);
  res.json(post);
});

export const createPost = asyncHandler(async (req, res, next) => {
  const { body, uid } = req;

  const newPost = await Post.create({ ...body, author: uid });
  const populatedPost = await Post.findById(newPost._id).populate('author');
  res.status(201).json(populatedPost);
});

export const udpatePost = asyncHandler(async (req, res, next) => {
  const {
    body,
    params: { id },
    uid,
  } = req;

  const found = await Post.findById(id);
  if (!found) throw new ErrorResponse(`Post ${id} does not exist`, 404);

  if (uid !== found.author.toString())
    throw new ErrorResponse('You have no permission to update this post', 401);

  const updatedPost = await Post.findByIdAndUpdate(id, body, {
    new: true,
  }).populate('author');
  res.json(updatedPost);
});

export const deletePost = asyncHandler(async (req, res, next) => {
  const {
    body,
    params: { id },
    uid,
  } = req;

  const found = await Post.findById(id);
  if (!found) throw new ErrorResponse(`Post ${id} does not exist`, 404);

  if (uid !== found.author.toString())
    throw new ErrorResponse('You have no permission to delete this post', 401);

  await Post.findByIdAndDelete(id, body, { new: true }).populate('author');
  res.json({ success: `Post with ${id} was deleted` });
});
