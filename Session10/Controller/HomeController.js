function homeResponse(req, res) {
    res.send("Welcome to the home page express");
}


function contactResponse(req, res) {
    res.end("contact number: email address : balh @gmail.com");
}



module.exports = {homeResponse, contactResponse}