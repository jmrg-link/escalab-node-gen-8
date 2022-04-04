const express = require( "express" );
const router = express.Router();

// [ENDPOINTS GLOBAL USER]
// [GET - READ]
router.get( "/user/:id" )
router.get( "/users" )

// [PUT - UPDATE]
router.put( "/user/:id" )

// [POST - CREATE]
router.post( "/user" )

// [DELETE - DELETE]
router.delete( "/user/:id" )

module.exports = router;