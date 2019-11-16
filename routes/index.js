const express = require("express");
const router = express.Router();

const { getPosts,getPostbyId } = require("../controllers/posts.controller");

router.get("/posts", getPosts);

router.get('/posts/:id',getPostbyId);

module.exports = router;