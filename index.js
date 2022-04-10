// index.js
const http2 = require( "http2" );
const { readFileSync } = require( "fs" );
const connectDB = require( "./db" );
const { config } = require( "./config" );
const app = require( "./server" );

const prod = config.server.prod;
const dev = config.server.dev;

// Read fs key xxx.pem
const options = {
    key: readFileSync( "server.pem" ) ,
    cert: readFileSync( "server.crt.pem" ) ,
    allowHTTP1: true ,
}

// db
connectDB()

// extract  port config
const { port } = config.server;
let nfo = console.log( `🧑‍💻 - Server running ${ process.env.NODE_DEV ? dev : prod } in port :${ port } - 🌐` )

const notServerSecure = () => {
    const server = http2.createServer( app );
    server.listen( port , () => { nfo } );
};

const secureServer = () => {
    const server = http2.createSecureServer( options , app );
    server.listen( port , () => { nfo } );
};

if ( config.server.prod !== config.server.dev ) {
    secureServer();
} else {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    notServerSecure();
}