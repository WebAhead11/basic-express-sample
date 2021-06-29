const fs = require("fs");
const path = require("path");
const data = require('../data.json')

function autocomplete(req, res) {
    // console.log("fkevrthng");
    console.log(data);
    res.end("btata")
}
module.exports = autocomplete;