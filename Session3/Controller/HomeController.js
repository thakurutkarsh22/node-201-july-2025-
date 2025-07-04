function homeResponse(req, res) {
    // send is only in EXPRESS JS 
        // behind the scenes send is writing and ending the response ( res.write , res.end)
    res.send("Welcome to the home page express");
}




module.exports = {homeResponse}