const { getPosts_DB, getPost_DB } = require("../db/posts.db");
const log = require("../utils/logger");

const retrievePosts = async () => {
  try {
    return getPosts_DB();
  } catch (err) {
    log(err.message);
    return Promise.reject(err);
  }
};

const retrievePost = async(id)=>{
  try{
    return getPost_DB(id)
  }catch(err){
    return Promise.reject(err)
  }
}

module.exports = {
  retrievePosts,
  retrievePost
};
