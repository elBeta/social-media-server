const { retrievePosts,retrievePost } = require("../services/posts.service");

const getPosts = async (req, res, next) => {
  try {
    const posts = await retrievePosts();
    res.json(posts);
  } catch (err) {
    res.status(500).send(err.message);
    next(err);
  }
};

const getPostId = async(req, res, next)=>{
  try{
    const _id = req.params.id;
    const post = await retrievePosts(_id)
    res.json(post)
  }catch(err){
    res.status(500).send(err.message)
  }
}

module.exports = {
  getPosts,getPostId
};
