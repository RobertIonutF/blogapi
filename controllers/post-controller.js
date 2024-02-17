const Post = require("../models/post");

const getPosts = async (req, res) => {
  try {
    const author = req.user.userId;

    const posts = await Post.find({ author }).populate("author", "username");
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
};

const getPost = async (req, res) => {
  try {
    const author = req.user.userId;
    const id = req.params.id;

    const post = await Post.findOne({ _id: id, author }).populate(
      "author",
      "username"
    );

    if (!post) {
      return res
        .status(404)
        .json({ message: "Post not found or you are not the author" });
    }

    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
};

const createPost = async (req, res) => {
  const getAuthor = req.user.userId;

  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: getAuthor,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
};

const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.user.userId;

    if (!req.body.title || !req.body.content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }
    
    const owner = await Post.findOne({ _id: id, author: user });
    if (!owner) {
      return res
        .status(404)
        .json({ message: "Post not found or you are not the author" });
    }

    const updatedPost = await Post.updateOne(
      { _id: id, author: user },
      { $set: { title: req.body.title, content: req.body.content } }
    );

    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.user.userId;

    const owner = await Post.findOne({ _id: id, author: user });

    if (!owner) {
      return res
        .status(404)
        .json({ message: "Post not found or you are not the author" });
    }

    const removedPost = await Post.deleteOne({ _id: id, author: user });
    res.json(removedPost);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
