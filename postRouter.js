const express = require('express');
const { authenticateUser } = require('./authMiddleware');
const { getAllPosts, createPost, likePost, commentOnPost } = require('./postController');

const router = express.Router();

router.get('/posts', authenticateUser, getAllPosts);

router.post('/posts', authenticateUser, createPost);

router.post('/posts/like', authenticateUser, likePost);

router.post('/posts/comment', authenticateUser, commentOnPost);

module.exports = router;
