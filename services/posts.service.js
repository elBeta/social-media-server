const { getPosts_DB } = require("../db/posts.db");
const log = require("../utils/logger");

const retrievePosts = async () => {
  try {
    return getPosts_DB();
  } catch (err) {
    log(err.message);
    return Promise.reject(err);
  }
};

module.exports = {
  retrievePosts
};
