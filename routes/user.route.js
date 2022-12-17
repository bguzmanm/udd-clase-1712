const express = require("express");
const router = express.Router();
const { findAll, signup } = require("../controllers/user.controller");

router.get("/", findAll);
router.post("/signup", signup);

module.exports = router;