// config.js

let config = {};
config.dbConfig = {};

config.dbConfig.port = 27017;
config.dbConfig.hostname = "localhost";
config.dbConfig.url = `mongodb://${
  config.dbConfig.hostname
  }:${config.dbConfig.port.toString()}`;
config.dbConfig.dbName = "mainDB";
config.dbConfig.postsCollectionName = "posts";

module.exports = config;
