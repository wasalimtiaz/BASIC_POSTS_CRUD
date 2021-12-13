const express = require("express");
const router = express.Router();

//const authToken = require("../utils/authToken");

const {
  allPosts,
  submitPost,
  specificPost,
  deletePost,
  updatePost,
} = require("../controllers/posts");

router.route("/").get(allPosts);
router.route("/").post(submitPost);
router.route("/:postId").get(specificPost);
router.route("/:postId").delete(deletePost);
router.route("/:postId").patch(updatePost);

module.exports = router;
