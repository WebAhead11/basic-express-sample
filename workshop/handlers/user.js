const path = require("path");
const data1 = require('../data/data.json')
const jwt = require('jsonwebtoken');
const SECRET = "nkA$SD89&&282hd";

function userHandler(req, res) {
    let index = data1.find(x => x.email === req.body.email);

    if (index != undefined && index.email === req.body.email) {
        const filePath = path.join(__dirname, "..", "public", "index.html");
        const token = jwt.sign(index, SECRET);
        res.cookie("user", token, { maxAge: 600000 });
        res.sendFile(filePath);
    } else {
        const filePath = path.join(__dirname, "..", "public", "login.html");
        res.sendFile(filePath);
    }

}
module.exports = userHandler;