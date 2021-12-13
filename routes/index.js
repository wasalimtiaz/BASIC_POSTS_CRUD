const express = require("express");
const router = express.Router();

// Import Routes

const postsRoute = require("./posts");

router.use("/posts", postsRoute);

module.exports = router;
