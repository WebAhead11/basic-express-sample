const fs = require("fs");
const path = require("path");

function homeHandler(req, res) {
    // public directory is one level above this, so we need the ".."
    console.log(req.body);
    const filePath = path.join(__dirname, "..", "public", "login.html");
    res.sendFile(filePath);
}
module.exports = homeHandler;