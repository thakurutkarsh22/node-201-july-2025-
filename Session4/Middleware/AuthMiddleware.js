const MY_SECRET_SERVER_PASSWORD = "aeroplane";

function AuthMiddleware(req, res, next) {

    const headers = req.headers;
    const authorization = headers.authorization; // user is inputing password

    if(authorization === MY_SECRET_SERVER_PASSWORD) {
        next()
    } else {
        res.status(403).json({message: "please login"});
    }

}

module.exports = AuthMiddleware