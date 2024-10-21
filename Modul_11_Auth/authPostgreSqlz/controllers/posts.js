import Post from '../models/Post.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

// Get all posts
export const getAllPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.findAll({ include: 'User' });
  if (!posts.length) throw new ErrorResponse('No posts found', 404);
  res.json(posts);
});

// Get single post
export const getSinglePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findByPk(req.params.id, { include: 'User' });
  if (!post) throw new ErrorResponse('Post not found', 404);
  res.json(post);
});

// Create post
export const createPost = asyncHandler(async (req, res, next) => {
  const newPost = await Post.create({ ...req.body, author: req.uid });
  res.status(201).json(newPost);
});

// Update post
export const updatePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) throw new ErrorResponse('Post not found', 404);
  if (post.author !== req.uid) throw new ErrorResponse('Unauthorized', 401);

  const updatedPost = await post.update(req.body);
  res.json(updatedPost);
});

// Delete post
export const deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) throw new ErrorResponse('Post not found', 404);

  if (post.author !== req.uid) throw new ErrorResponse('Unauthorized', 401);

  await post.destroy();
  res.json({ success: 'Post deleted' });
});
