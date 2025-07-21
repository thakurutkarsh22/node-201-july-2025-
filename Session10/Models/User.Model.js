const { Schema, default: mongoose } = require("mongoose");
const validatorLibrary = require("validator");

const userSchema = new Schema({
    name: {type: String, required: true, validate: (data) => validatorLibrary.isAlpha(data)},
    username: {type: String, unique: true, required: true, validate: (data) => validatorLibrary.isAlphanumeric(data)},
    email: {type: String, unique: true, required: true, validate: (data) => validatorLibrary.isEmail(data)},
    password: {type: String, minlength: 8, maxlength: 100, validate: (data) => validatorLibrary.isStrongPassword(data)},
    nationality: {type: String}
})

// users is name of collection
// model is JOINING "users" COLLECTION (IN DB) and userSchema (in JS NODEJS)
module.exports = mongoose.model("users", userSchema);



