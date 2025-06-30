const http = require("http");
const PORT = 8089;


const server = http.createServer((req, res) => {

    const url = req.url;
    console.log("url ||| ", url)


    if(url === "/") {
        res.write("Welcome to the home page");
        res.write(" utkarsh");

        // YOu can write end only once 
        res.end();
    } else if (url === "/contacts") {
        // end behind the scenes writes the response first then END IT FOR GOOD.
        res.end("contact number: email address : balh @gmail.com");

    } else if(url === "/fitness") {
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

        res.end(JSON.stringify(dietChart)); // will this work ? ? 
        // JSON.stringify
    }

});

server.listen(PORT, () => {
    console.log("THUMBS UP I am running server at port ", PORT);
})



