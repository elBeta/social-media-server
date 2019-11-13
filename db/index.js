const MongoClient = require("mongodb").MongoClient;

const { dbConfig } = require("../config");
const log = require("../utils/logger");

const uri = `mongodb://${dbConfig.hostname}:${dbConfig.port.toString()}`;

const connection = {
  db: null,
  client: null,
}

const dbConnect = () =>
  new MongoClient(uri, { useUnifiedTopology: true })
    .connect()
    .then(client => {
      connection.client = client;
      return connection.db = client.db(dbConfig.dbName)
    })

module.exports = { connection, dbConnect };