//server/api/v1/index.js

const router = require('express').Router();
const { readdirSync } = require("fs");

// ROUTES - > global
readdirSync("./global/routes").map((r) => app.use("/api/v1", require("./global/routes/" + r)))

// ROUTES - > timeControl
readdirSync("./timeControl/routes").map((r) => app.use("/api/v1", require("./timeControl/routes/" + r)))

module.exports = router;