const express = require("express");
const app = express();

const routes = require("./routes");
const { dbConnect } = require("./db");
const log = require("./utils/logger");

const port = 4000;
const hostname = "localhost";

dbConnect()
  .then(() => {
    app.get("/", (req, res, next) => res.send("Server is up..."));
    app.use("/api", routes);
    app.listen(port, hostname, () =>
      log(`Server running on ${hostname}:${port}`)
    );
  })
  .catch();
