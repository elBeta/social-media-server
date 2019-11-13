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

module.exports = {
  getPosts_DB
};
