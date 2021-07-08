const path = require("path");

function logoutHandler(req, res) {
    // public directory is one level above this, so we need the ".."
    res.clearCookie('user');
    // res.redirect('/');
    // res.json(JSON.stringify({ success: true }));
    // console.log(req.body);
    const filePath = path.join(__dirname, "..", "public", "login.html");
    res.sendFile(filePath);

}
module.exports = logoutHandler;