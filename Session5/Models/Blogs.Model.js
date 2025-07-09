const { Schema, default: mongoose } = require("mongoose");
const validatorLibrary = require("validator");


const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true, // its bad keyword 
        minlength: 5,
        maxlength: 100,
        trim: true,
        validate: (data) => validatorLibrary.isAlphanumeric(data) // data is title that is provided by user
    },
    content: {
        type: String, 
        required: true,
        maxlength: 1000,
    }
}, {timestamps: true});




module.exports = mongoose.model("blog", blogSchema);



