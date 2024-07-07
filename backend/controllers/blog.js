const Blog = require("../models/blog");

const getAllBlog = (req, res) => {
    res.send("get all blog")
}
const createBlog = async (req, res) =>{
    const {title, desc, image, authorname, url} = req.body;
    const result = await Blog.create({title, desc, image, authorname, url})
    console.log("result", result)
    res.send(result)
}
const updateBlog = (req, res) => {
    res.send("update blog")
}
const deleteBlog = (req, res) => {
    res.send("delete blog")
}

module.exports={
    getAllBlog,
    createBlog,
    updateBlog,
    deleteBlog,
}