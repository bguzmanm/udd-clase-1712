const express = require("express");
const router = express.Router();
const { create, getAll } = require("../controllers/post.controller");
const auth = require("../auth/auth");

router.post("/", auth, create);
router.get("/", auth, getAll);

module.exports = router;