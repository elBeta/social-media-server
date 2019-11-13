const express = require("express");
const router = express.Router();

const { getPosts } = require("../controllers/posts.controller");

router.get("/posts", getPosts);

module.exports = router;