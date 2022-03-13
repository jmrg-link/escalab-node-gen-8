// index.js

const http = require('http');
const app = require('./server');
const { config } = require('./config');

// Read fs key xxx.pem

// extract  port config
const { port } = config.server;

// create http or http2 with fs
const server = http.createServer(app);

// listen server http with express APP
server.listen(port, () => {
    console.log(`Server running is port : ${ port } 🧑‍💻`);
  });