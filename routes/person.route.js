const express = require("express");

const router = express.Router();

const { findAll, findOneByName, save, del } = require("../controllers/person.controller");
const auth = require("../auth/auth");

router.get("/", auth, findAll);
router.get("/:name", auth, findOneByName);
router.post("/", auth, save);
router.delete("/:name", auth, del);

module.exports = router;