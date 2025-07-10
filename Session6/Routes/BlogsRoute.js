const express = require("express");
const { createBlog, deleteBlogById, getBlogById, getAllBlogs } = require("../Controller/BlogsController");
const BlogInputValidatoinMiddleware = require("../Middleware/BlogInputValidationMiddleware");
const router = express.Router();



router.post("/newBlog",BlogInputValidatoinMiddleware, createBlog);
router.delete("/delete/:id", deleteBlogById);
router.get("/getAllBlogs", getAllBlogs);
router.get("/getBlogById/:id", getBlogById);


module.exports = router;