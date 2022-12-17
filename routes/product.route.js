const express = require("express");
const router = express.Router();
const { findAll, findOndByName, save, del, update } = require("../controllers/product.controller");
const auth = require("../auth/auth");

router.get("/", findAll);
router.get("/:name", findOndByName);

router.post("/", auth, save);
router.put("/:id", auth, update);
router.delete("/:name", auth, del);

module.exports = router;
