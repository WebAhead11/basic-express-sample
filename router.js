const express = require("express")
const router = express.Router()

const loginHandler = require("./handlers/login");
const autocompleteHandler = require("./handlers/autocomplete");
const homeHandler = require("./handlers/home")
const logoutHandler = require('./handlers/logout')

router.get("/", homeHandler)
router.post("/login", loginHandler)
router.get('/logout', logoutHandler)
router.get('/autocomplete', autocompleteHandler);

module.exports = router;