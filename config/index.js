const path = require( "path" );
require( "dotenv" ).config( {
    path: path.resolve( __dirname , "../.env" ) ,
} );

const config = {
    server:{
        port: process.env.PORT || 9000 ,
        dev: process.env.NODE_DEV || 'development',
        prod: process.env.NODE_ENV || 'production',
        tools: process.env.MORGAN
    },
    bbdd:{
        db_prod: process.env.DB_PROD ,
        db_dev: process.env.DB_DEV ,
    }
};

module.exports = { config: config };