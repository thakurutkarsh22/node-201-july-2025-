const BlogsModel = require("../Models/Blogs.Model");

function getAllBlogs(req, res) {

}

async function createBlog(req, res) {
    const body = req.body;
    const title = body.title;
    const content = body.content;



    // Business Logic 
    const blogobj = BlogsModel({
        title,
        content
    });


    // save it in DB 

    try {
        const response = await blogobj.save();
        res.status(201).json(response);
    } catch(error) {
        res.status(500).json(error);
    }
}

function getBlogById(req, res) {

}

function deleteBlogById(req, res) {
    
}

module.exports = {getAllBlogs, createBlog, getBlogById, deleteBlogById}


