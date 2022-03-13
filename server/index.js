//server/index.js
const express = require('express');
const morgan = require('morgan')
const logger = require('../utils')
const {config} = require('../config')
const api = require('./api/v1');


const { tools } = config.server;
// db

// Iniciate App
const app = express()
app.use( express.json());
app.use(morgan(tools, { stream: logger.stream }));

// Setup middleware

// Setup router and routes versionate v1 & more
app.use('/api/v1', api)


module.exports = app;