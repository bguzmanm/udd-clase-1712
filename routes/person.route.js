const express = require("express");

const router = express.Router();

const { findAll, findOneByName, save, del } = require("../controllers/person.controller");

router.get("/", findAll);
router.get("/:name", findOneByName);
router.post("/", save);
router.delete("/:name", del);

module.exports = router;