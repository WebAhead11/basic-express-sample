const path = require("path");

function logoutHandler(req, res) {
    res.clearCookie('user');
    res.redirect('/')
        // const filePath = path.join(__dirname, "..", "public", "login.html");
        // res.sendFile(filePath);

}
module.exports = logoutHandler;