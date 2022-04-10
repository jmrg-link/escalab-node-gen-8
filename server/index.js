//server/index.js
const express = require( 'express' )
const http2Express = require( 'http2-express-bridge' )
const helmet = require( "helmet" );
const morgan = require( 'morgan' )
const { readdirSync } = require( "fs" )
const cors = require( 'cors' )
const { config } = require( '../config' )
const logger = require( '../utils' )

// const global file
const { tools } = config.server;

// Iniciate App
const app = http2Express( express )

// Police Security [*] Remove Headers => add middleware [*]
app.use(
    helmet.hidePoweredBy() ,
    helmet.xssFilter() ,
    helmet( {
        referrerPolicy: { policy: "no-referrer" } ,
        action: "sameorigin" ,
    } )
)

// Setup middleware
app.use( morgan( tools , { stream: logger.stream } ) );
app.use( express.json( { limit: "2mb" } ) )
//app.use(cors( { origin: '*' }))

// ROUTES - > Setup router and routes versionate v1 & more
readdirSync( "./server/api/v1/global/routes" ).map( ( r ) => app.use( "/api/v1" , require( "./api/v1/global/routes/" + r ) ) );
readdirSync( "./server/api/v1/timeControl/routes" ).map( ( r ) => app.use( "/api/v1" , require( "./api/v1/timeControl/routes/" + r ) ) );


// No route found handler
app.use( ( req , res , next ) => {
    next( {
        message: 'Route not found' ,
        statusCode: 404 ,
        level: 'warn' ,
    } );
} )

// Error handler
app.use( ( err , req , res , next ) => {
    const { statusCode = 500 ,  message } = err
    logger.error( statusCode )
    res.json( {
        message
    } )
} )


module.exports = app