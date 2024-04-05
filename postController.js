let posts = [];

// Get all posts
const getAllPosts = (req, res) => {
    res.json(posts);
};

// Create a new post
const createPost = (req, res) => {
    const { userId, caption, imageUrl } = req.body;
    const newPost = { postId: posts.length + 1, userId, caption, imageUrl, likes: [], comments: [] };
    posts.push(newPost);
    res.status(201).json(newPost);
};

// Like a post
const likePost = (req, res) => {
    const { postId, userId } = req.body;
    const post = posts.find(post => post.postId === postId);
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    if (post.likes.includes(userId)) {
        return res.status(400).json({ error: 'Post already liked' });
    }
    post.likes.push(userId);
    res.json(post);
};

// Comment on a post
const commentOnPost = (req, res) => {
    const { postId, userId, text } = req.body;
    const post = posts.find(post => post.postId === postId);
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    const newComment = { userId, text };
    post.comments.push(newComment);
    res.json(post);
};

module.exports = { getAllPosts, createPost, likePost, commentOnPost };
