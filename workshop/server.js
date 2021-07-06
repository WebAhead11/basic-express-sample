const express = require("express")
const router = require("./router");
const PORT = process.env.PORT || 3000;

const server = express();
server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.use(router)
server.use(express.static('workshop/public'))


server.listen(PORT, () => console.log(`Listening at http://localhost:3000`));