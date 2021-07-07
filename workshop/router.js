const express = require("express")
const router = express.Router()

const userHandler = require("./handlers/user");
// const missingHandler = require("./handlers/missing");
const autocompleteHandler = require("./handlers/autocomplete");
const homeHandler = require("./handlers/home")

router.get("/", homeHandler)
router.post("/user", userHandler)
router.get('/autocomplete', autocompleteHandler);

module.exports = router;