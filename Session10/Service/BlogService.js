const BlogsModel = require("../Models/Blogs.Model");

class BLogService {



    static async createBlogServiceFunc(title, content) {
        
        // Business logic
        const blogobj = BlogsModel({
            title,
            content
        });


        // save it in DB 

        try {
            const response = await blogobj.save();
            return response;
        } catch(Error ) {
            return Error;
        }
    }

    static async deleteBlogServiceFunction(id) {

    }

    static async getBlogServiceFunction(id) {
        
    }
}


module.exports = BLogService