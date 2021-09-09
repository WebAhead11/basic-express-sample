const path = require("path");

function homeHandler(req, res) {
    // public directory is one level above this, so we need the ".."
    const filePath = path.join(__dirname, "..", "public", "login.html");

    res.sendFile(filePath);
}
module.exports = homeHandler;