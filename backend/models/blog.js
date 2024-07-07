const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  authorname: {
    type: String
  },
  url: {
    type: String
  },
  image: {
    type: String
  }
}, {
  timestamps: true
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
