const { retrievePosts } = require("../services/posts.service");

const getPosts = async (req, res, next) => {
  try {
    const posts = await retrievePosts();
    res.json(posts);
  } catch (err) {
    res.status(500).send(err.message);
    next(err);
  }
};

module.exports = {
  getPosts
};
