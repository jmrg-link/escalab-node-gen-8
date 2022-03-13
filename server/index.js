//server/index.js
const express = require('express').Router();
const morgan = require('morgan')
const { readdirSync } = require("fs")
const cors = require('cors')
const {config} = require('../config')
const logger = require('../utils')

// const global file
const { tools } = config.server;

// Iniciate App
const app = express()

// Setup middleware
app.use(morgan(tools, { stream: logger.stream }));
app.use(express.json({ limit: "2mb" }))
app.use(cors());

// ROUTES - > Setup router and routes versionate v1 & more
readdirSync("./api/v1/global/routes").map((r) => app.use("/api", require("./api/v1/global/routes/" + r)));
//readdirSync("./api/v1/timeControl/routes").map((r) => app.use("/api", require("./api/v1/timeControl/routes/" + r)));

// No route found handler
app.use((req, res, next) => {
    next({
      message: 'Route not found',
      statusCode: 404,
      level: 'warn',
    });
  });

module.exports = app;