const express = require("express").Router()

// endpoints global users
// GET - READ
router.get("/user/:id")
router.get("/users")

// POST - CREATE
router.post("/user")

// DELETE - DELETE
router.delete("/user/:id")

module.exports = router;