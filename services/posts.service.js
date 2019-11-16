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

const retrievePostbyId = async(_id)=>{
  try{
    return getPost_DB(_id)
  }catch(err){
    return Promise.reject(err)
  }
}

module.exports = {
  retrievePosts,
  retrievePostbyId
};
