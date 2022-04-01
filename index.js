// index.js
const http = require('http')
const connectDB = require("./db");
const { config } = require('./config')
const app = require('./server');

const prod = config.server.prod
const dev  = config.server.dev

// Read fs key xxx.pem

// db
connectDB()

// extract  port config
const { port } = config.server 

// create http or http2 with fs
const server = http.createServer(app);

// listen server http with express APP
server.listen(port, () => {
    console.log(`🧑‍💻 - Server running ${process.env.NODE_DEV ? dev : prod} in port :${port} - 🌐`)
  })