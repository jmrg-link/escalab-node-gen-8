const express = require("express");
const router = express.Router();
const {loginUser} = require('../controllers/user.login')

// [ENDPOINTS GLOBAL LOGIN]
router.post( "/login", loginUser)

module.exports = router;