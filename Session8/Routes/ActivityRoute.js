const express = require("express");
const userData = require("../usersData");
const { getAllUsers, getUserByGender, getUserByUserName } = require("../Controller/ActivityController");
const AuthMiddleware = require("../Middleware/AuthMiddleware");
const router = express.Router();


router.get("/getAllUsers", AuthMiddleware  ,getAllUsers);

router.get("/search",AuthMiddleware, getUserByGender);

router.get("/user/:username", getUserByUserName);


module.exports = router;
