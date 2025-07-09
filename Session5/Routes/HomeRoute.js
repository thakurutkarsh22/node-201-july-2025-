const express = require("express");
const { homeResponse, contactResponse } = require("../Controller/HomeController");
const router = express.Router();


router.get("/", homeResponse)
router.get("/home", homeResponse)
router.get("/contacts", contactResponse)


module.exports = router;