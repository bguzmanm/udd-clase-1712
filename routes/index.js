const express = require("express");
const router = express.Router();

const personRouter = require("./person.route");
const productRouter = require("./product.route");
const userRouter = require("./user.route");
const authRouter = require("./auth.route");

router.use("/person", personRouter);
router.use("/product", productRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);

module.exports = router;

