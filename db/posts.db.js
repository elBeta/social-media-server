const { connection } = require("./index");
const { dbConfig } = require("../config");
const log = require("../utils/logger");

const getPosts_DB = async () => {
  try {
    log(`Retrieving all posts from collection ${dbConfig.postsCollectionName}`);
    const cursor = await connection.db.collection(dbConfig.postsCollectionName).find();
    return cursor.toArray();
  } catch (err) {
    log(err.message);
    return Promise.reject(err);
  }
};

const getPost_DB = async(id)=>{
  try{
    const post = await connection.db.collection(dbConfig.postsCollectionName).findOne({id})
    return Promise.resolve(post) 
  }catch(err){
    return Promise.reject(err)
  }
}

module.exports = {
  getPosts_DB,
  getPost_DB
};
