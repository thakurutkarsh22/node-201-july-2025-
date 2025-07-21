const express = require("express");
const userData = require("../usersData");
const { getAllUsers, getUserByGender, getUserByUserName } = require("../Controller/ActivityController");
const { AuthMiddleware } = require("../Middleware/AuthMiddleware");
const router = express.Router();


const passport = require("passport");
const JWTAuthMiddleware =  passport.authenticate("jwt", {session: false, failureRedirect: "/login"})


router.get("/getAllUsers", JWTAuthMiddleware  ,getAllUsers);

router.get("/search", AuthMiddleware, getUserByGender);

router.get("/user/:username", getUserByUserName);


module.exports = router;

// AuthMiddleware -> I have coded 

// JWTAuthMiddleware -> passportjs 