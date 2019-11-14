const express = require("express");
const router = express.Router();

const { getPosts,getPostId } = require("../controllers/posts.controller");

router.get("/posts", getPosts);

router.get('/posts/:id',getPostId);

module.exports = router;