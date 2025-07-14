const { Schema, default: mongoose } = require("mongoose");


const userSchema = new Schema({
    name: {type: String, required: true}
})

// users is name of collection
// model is JOINING "users" COLLECTION (IN DB) and userSchema (in JS NODEJS)
module.exports = mongoose.model("users", userSchema);



