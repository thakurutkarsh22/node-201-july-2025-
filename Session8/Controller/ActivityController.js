const userData = require("../usersData");
const MY_SECRET_SERVER_PASSWORD = "aeroplane";

function getAllUsers(req, res, next) {
    res.json(userData.data);
    
}

function getUserByGender(req, res) {
    const query = req.query;
    const requestedGender = query.gender;

    const data = userData.data;
    const filteredData = data.filter(user => user.gender === requestedGender);
    res.json(filteredData);
}

function getUserByUserName(req, res) {
    const params = req.params;
    const requestedUsername = params.username;  // EMILY

    const filteredData = userData.data.filter(user => user.name.first === requestedUsername); // []
    res.json(filteredData);
}

module.exports = {getAllUsers, getUserByGender, getUserByUserName}