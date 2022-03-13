//server/index.js
const express = require('express');
const api = require('./api/v1');

// db

// Iniciate App
const app = express()

// Setup middleware

// Setup router and routes versionate v1 & more
app.use('/api/v1', api)


module.exports = app;