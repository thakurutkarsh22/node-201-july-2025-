const MY_SECRET_SERVER_PASSWORD = "aeroplane";
const jwt = require("jsonwebtoken");
const PRIVATE_JWT_KEY = "asdjahkjsdghlasjfhlaskf";

function AuthMiddleware(req, res, next) {

    const headers = req.headers;
    const authorization = headers.authorization;// bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRoYWt1cnV0a2Fyc2gyMiIsImlhdCI6MTc1Mjg1MjU1MywiZXhwIjoxNzUyODUyNTYzfQ.Kdza2vWMn6VWs8cCjNxEDGVNXyzoYleVA2XxKHHkSLU
    const token = authorization?.split(" ")[1]; // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRoYWt1cnV0a2Fyc2gyMiIsImlhdCI6MTc1Mjg1MTY1NywiZXhwIjoxNzUyODUxNjY3fQ.OHZC9eTaBlezyn30nviX-HfjxX4Vpc7_Cmx894JbYtk
    console.log("token", token);


    if(!token) {
        res.status(401).json({message: "please LOGIN!!"});
    } else {
        // 1. verify the token 
        jwt.verify(token, PRIVATE_JWT_KEY, (error, decodedJwt) => {
            if(error) {
                // 1.  someone has given us the bogus token 
                // 2. my token has genuinely expired

                res.status(401).json({message: "please Re- LOGIN!!"});
            } else {
                console.log(decodedJwt, 'decodedJwt');
                next();
            }
        })
    }

}

module.exports = {AuthMiddleware, PRIVATE_JWT_KEY}