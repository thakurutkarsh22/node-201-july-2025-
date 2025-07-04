const express = require("express");
const userData = require("./usersData");
const { homeResponse } = require("./Controller/HomeController");
const PORT = 8089;
const server = express();


server.get("/", homeResponse)

server.get("/home", homeResponse)


server.get("/contacts", (req, res) => {
    res.end("contact number: email address : balh @gmail.com");
})


server.get("/fitness", (req, res) => {
    const dietChart = {
            name: "utkarsh",
            age: 28,
            weight: 72,
            diet: ["eggs", "chicken"],
            gymAddress: {
                pincode: 10033,
                strretName: "cult road indranagar",
            },
            shouldSleep8Hours: false,
        }

    res.json(dietChart);
})


// ACTIVITY 

// THESE ARE ENDPOINT/REst API/API

// 1. get all the users
server.get("/api/v1/activity/getAllUsers", (req, res) => {
    res.json(userData.data);
});

// 2. get all female users 
// QUERY PARAM WAY: EXAMPLE https://www.google.com/search?q=virat || https://www.google.com/search?q=sachin

server.get("/api/v1/activity/search", (req, res) => {
    const query = req.query;
    const requestedGender = query.gender;

    const data = userData.data;
    const filteredData = data.filter(user => user.gender === requestedGender);
    res.json(filteredData);
});



// 3. we want only detail of 1 user 
// PARAMS : https://pokeapi.co/api/v2/pokemon/Charizard

server.get("/api/v1/activity/user/:username", (req, res) => {
    const params = req.params;
    const requestedUsername = params.username;  // EMILY

    const filteredData = userData.data.filter(user => user.name.first === requestedUsername); // []
    res.json(filteredData);
})



server.listen(PORT, () => {
     console.log("THUMBS UP I am running server at port EXPRESS JS ", PORT);
})


// Node use common js not ES6; 
// (BE) common js module.exports, requires
// (FE)es6 -> import and export