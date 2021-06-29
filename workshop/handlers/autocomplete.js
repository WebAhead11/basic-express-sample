const fs = require("fs");
const path = require("path");
const data = require('../data/data.json')

function autocomplete(req, res) {
    // console.log("fkevrthng");
    console.log(data);
    const inp = document.getElementById('inp')
    let arr = data.filter(element => {
        return element.firstName.includes(inp.value)
    });
    res.end(JSON.stringify(arr))
}
module.exports = autocomplete; 