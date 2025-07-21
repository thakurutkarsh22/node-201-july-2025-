const express = require("express");
const userData = require("./usersData");

const ActivityRoute = require("./Routes/ActivityRoute")
const BlogRoute = require("./Routes/BlogsRoute");
const AuthRoute = require("./Routes/AuthRoute");
const HomeRoute = require("./Routes/HomeRoute");
const { default: mongoose } = require("mongoose");
const PORT = 8089;
const server = express();


// COMMON MIDDLWEARE which will work for EVERY request 
// Returns middleware that only parses json
server.use(express.json())



server.use("/", HomeRoute);

server.get("/fitness", (req, res, next) => {
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

// use supoort GET, post put delete
server.use("/api/v1/activity", ActivityRoute)


// Support BLogs creation get delete etc.
server.use("/api/v1/blog", BlogRoute)

server.use("/api/v1/auth", AuthRoute);


// DATA BASE CONNECTION 

 mongoose.connect("mongodb://localhost:27017/CrioJuly2025").then(() => {
     console.log("DB IS UP  ");
 })



server.listen(PORT, () => {
     console.log("THUMBS UP I am running server at port EXPRESS JS ", PORT);
})
