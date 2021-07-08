const express = require("express")
const router = express.Router()

const userHandler = require("./handlers/user");
// const missingHandler = require("./handlers/missing");
const autocompleteHandler = require("./handlers/autocomplete");
const homeHandler = require("./handlers/home")
const logoutHandler = require('./handlers/log_out')

router.get("/", homeHandler)
router.post("/user", userHandler)
router.get('/autocomplete', autocompleteHandler);
router.get('/log_out', logoutHandler)

module.exports = router;