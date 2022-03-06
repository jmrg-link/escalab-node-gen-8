const path = require( "path" );
require( "dotenv" ).config( {
    path: path.resolve( __dirname , "../.env" ) ,
} );

const config = {
    port: process.env.PORT || 8000 ,
    db_cnn_prod: process.env.DB_CNN_PROD ,
    db_cnn_dev: process.env.DB_CNN_DEV ,
    dev: process.env.NODE_DEV ,
    prod: process.env.NODE_ENV ,
};

module.exports = { config: config };