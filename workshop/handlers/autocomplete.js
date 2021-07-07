const data1 = require('../data/data.json')

function autocomplete(req, res) {
    res.end(JSON.stringify(req.user))
}
module.exports = autocomplete;