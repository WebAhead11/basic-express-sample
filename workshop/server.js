const http = require("http");
const router = require("./router");
const exp = require('express');
const app = exp();
const PORT = process.env.PORT || 3000;
const server = http.createServer(router);
app.get('/', (req, res) => {
    res.sendFile('index.html');
})
server.listen(PORT, () => console.log(`Listening at http://localhost:3000`));