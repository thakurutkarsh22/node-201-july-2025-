const BLogService = require("../Service/BlogService");

function getAllBlogs(req, res) {

}

async function createBlog(req, res) {
    const body = req.body;
    const title = body.title;
    const content = body.content;


    try{
        const response = await BLogService.createBlogServiceFunc(title, content);
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





// Bcrypt 