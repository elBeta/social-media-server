const { retrievePosts,retrievePostbyId } = require("../services/posts.service");

const getPosts = async (req, res, next) => {
  try {
    const posts = await retrievePosts();
    res.json(posts);
  } catch (err) {
    res.status(500).send(err.message);
    next(err);
  }
};

const getPostbyId = async(req, res, next)=>{
  try{
    const _id = req.params.id;
    const post = await retrievePostbyId(_id)
    res.json(post)
  }catch(err){
    res.status(500).send(err.message)
  }
}

module.exports = {
  getPosts,getPostbyId
};
