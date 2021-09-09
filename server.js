const express = require("express")
const router = require("./router");
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const SECRET = "nkA$SD89&&282hd";

const server = express();

server.use(cookieParser());
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use((req, res, next) => {
    const token = req.cookies.user;

    if (token) {
        const user = jwt.verify(token, SECRET);
        req.user = user;
    }
    next();
});

server.use(router)
server.use(express.static('public'))


server.listen(PORT, () => console.log(`Listening at http://localhost:3000`));