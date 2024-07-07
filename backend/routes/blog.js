const express = require("express");
const { getAllBlog, createBlog, deleteBlog, updateBlog } = require("../controllers/blog");
const router = express.Router();
// CRUD
router
  .get("/", getAllBlog )
  .post("/add", createBlog)
  .delete("/:id", deleteBlog)
  .post("/:id", updateBlog);
module.exports = router;