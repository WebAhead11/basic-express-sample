const express = require("express")
const router = express.Router()

const userHandler = require("./handlers/user");
const publicHandler = require("./handlers/public");
const missingHandler = require("./handlers/missing");
const autocompleteHandler = require("./handlers/autocomplete");
const homeHandler = require("./handlers/home")

router.get("/", homeHandler)
router.post("/user", userHandler)

// function router(request, response) {
//     const url = request.url;
//     if (url === "/") {
//         homeHandler(request, response);
//     } else if (url.includes("public")) {
//         publicHandler(request, response);
//     } else if (url.includes("/autocomplete")) {
//         autocompleteHandler(request, response);
//     } else if(url.includes("/home")){
//         userHandler(request, response)
//     }else {
//         missingHandler(request, response);
//     }
// }

module.exports = router;