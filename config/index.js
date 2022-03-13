const path = require( "path" );
require( "dotenv" ).config( {
    path: path.resolve( __dirname , "../.env" ) ,
} );

const config = {
    server:{
        port: process.env.PORT || 8000 ,
        dev: process.env.NODE_DEV || 'development',
        prod: process.env.NODE_ENV || 'production',
    },
    bbdd:{
        db_cnn_prod: process.env.DB_CNN_PROD ,
        db_cnn_dev: process.env.DB_CNN_DEV ,
    }
};

module.exports = { config: config };