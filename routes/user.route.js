const express = require("express");
const router = express.Router();
const { findAll, signup, findOne } = require("../controllers/user.controller");

const auth = require("../auth/auth");

router.get("/", auth, findAll);
router.get("/one", auth, findOne);
router.post("/signup", signup);

module.exports = router;