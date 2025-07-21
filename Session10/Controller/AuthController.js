const UserModel = require("../Models/User.Model");
const AuthService = require("../Service/AuthService");

async function signup(req, res, next) {

    const body = req.body;
    const { name, username, email, password } = body;


    // this password is the plain password we have to hash it 
    const hashedPassword = await AuthService.encryptPassword(password);

    try {
        const response = await AuthService.createUser(username,email, hashedPassword, name);
        res.status(201).json(response);
    } catch(error) {
        res.status(500).json({message: "something went wrong", error});
    }

}

async function login(req, res, next) {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    try {
        const response = await AuthService.login(username, password);
        if(response.isLogged) {
            res.status(200).json(response)
        } else {
            res.status(403).json({message: "invalid credentials"})
        }
        
    } catch(error) {
        res.status(500).json({message: "server error"})
    }


}

module.exports = {signup, login}

// HAS FOR asdf1234 -  312433c28349f63c4f387953ff337046e794bea0f9b9ebfcb08e90046ded9c76
// HAS FOR asdf1235 -  f889f91200cce908c5f196fa36c2d7ff341717473ddb3b72ab934612b4ece012
// HAS FOR asdf12345 - 1fcb4fe1a53ccad98d375bae1aa3b4128874010c9517c09944263fbbcca4af7f