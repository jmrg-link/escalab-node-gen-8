const express = require( "express" );
const router = express.Router();

const { createUser , findAllUser , findUser , updateUser} = require('../controllers/user.controller')

// [ENDPOINTS GLOBAL USER]
// [GET - READ]
router.get( "/user/:id",findUser )
router.get( "/users",findAllUser )

// [PUT - UPDATE]
router.put( "/user/:id",updateUser )

// [POST - CREATE]
router.post( "/user", createUser )

// [PATCH - REMOVESOFT]
//router.patch("/user/:id", removeSoftUser);

// [DELETE - DELETE]
//router.delete( "/user/:id",removeUserId )

module.exports = router;