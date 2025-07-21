const { PRIVATE_JWT_KEY } = require("../Middleware/AuthMiddleware");

const JwtStratergy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt; // will be used to extract payload from the token

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PRIVATE_JWT_KEY
}

const stratergy = new JwtStratergy(options, (payload, done) => {
    const {username} = payload;

    try {
        // you can do anything here 
        return done(null, username);
    } catch(erorr) {
         return done(error, false);
    }

})


module.exports = (passport) => {
    passport.use(stratergy)
}