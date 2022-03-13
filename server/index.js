//server/index.js
const express = require('express');

const morgan = require('morgan')
const cors = require('cors')
const logger = require('../utils')
const {config} = require('../config')
const api = require('./api/v1');

// const global file
const { tools } = config.server;

// Iniciate App
const app = express()
app.use(express.json({ limit: "2mb" }))

// Setup middleware
app.use(cors());
app.use(morgan(tools, { stream: logger.stream }));

// Setup router and routes versionate v1 & more
app.use('/api/v1', api)


module.exports = app;