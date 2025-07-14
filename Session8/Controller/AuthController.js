const UserModel = require("../Models/User.Model");

async function signup(req, res, next) {

    const body = req.body;
    const { name, username, email, password } = body;

    // const name = body.name;

    // business logic - SEVICE

    const nationality = "TEST_USER";
    const userModelObj = UserModel({
        name,
        username,
        email,
        password,
        nationality
    });

    // Save in the database - SEVICE

    try {
        const response = await userModelObj.save();
        res.status(201).json(response);
    } catch(error) {
        res.status(500).json({message: "something went wrong", error});
    }

}

function login(req, res, next) {
    
}

module.exports = {signup, login}

// HAS FOR asdf1234 -  312433c28349f63c4f387953ff337046e794bea0f9b9ebfcb08e90046ded9c76
// HAS FOR asdf1235 -  f889f91200cce908c5f196fa36c2d7ff341717473ddb3b72ab934612b4ece012
// HAS FOR asdf12345 - 1fcb4fe1a53ccad98d375bae1aa3b4128874010c9517c09944263fbbcca4af7f