//util/index.js
const appRoot = require( "app-root-path" );
const winston = require( "winston" );
const { config } = require( "../config" )
const req = require( "express/lib/request" );

const logger = winston.createLogger( {
    level: "info" ,
    format: winston.format.combine(
        winston.format.timestamp( { format: "DD-MM-YYYY HH:mm:ss" } ) ,
        winston.format.printf( ( { level , label , message ,  timestamp } ) => {
            return `[ ${ level } | ${ timestamp } | ${ message.trim() } ]`;
        } )
    ) ,
    transports: [
        new winston.transports.File( {
            filename: `${ appRoot }/logs/info.log` ,
            level: "info" ,
            colorize: true ,
        } ) ,
    ] ,
    exitOnError: false ,
    handleExceptions: true ,
    maxsize: 10485760 , // 10 MB
    maxFiles: 5 ,
} )
if ( config.server.prod !== config.server.dev ) {
    logger.add(
        new winston.transports.Console( {
            format: winston.format.combine( winston.format.colorize() ) ,
        } )
    );
}
logger.stream = {
    write: function ( message , encoding ) {
        logger.info( message );
    } ,
};

module.exports = logger;
