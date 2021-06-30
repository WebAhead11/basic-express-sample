const fs = require("fs");
const path = require("path");
const data1 = require('../data/data.json')

function autocomplete(req, res) {
    // let arr2 = document.getElementById('inp')
    const data = new URLSearchParams(req.url.split('?')[1]);
    const name = data.get('firstName');
    let arr = data1.filter(element => {
        return element.firstName.toUpperCase().includes(name.toUpperCase()) ||
            element.lastName.toUpperCase().includes(name.toUpperCase())
    });
    res.end(JSON.stringify(arr))
}
module.exports = autocomplete;