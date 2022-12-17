const express = require("express");
const router = express.Router();
const { findAll, signup } = require("../controllers/user.controller");

const auth = require("../auth/auth");

router.get("/", auth, findAll);
router.post("/signup", signup);

module.exports = router;