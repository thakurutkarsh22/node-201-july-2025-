const express = require("express");
const userData = require("./usersData");

const ActivityRoute = require("./Routes/ActivityRoute")
const HomeRoute = require("./Routes/HomeRoute")
const PORT = 8089;
const server = express();


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



server.listen(PORT, () => {
     console.log("THUMBS UP I am running server at port EXPRESS JS ", PORT);
})
