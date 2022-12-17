const express = require("express");
const router = express.Router();

const personRouter = require("./person.route");
const productRouter = require("./product.route");
const userRouter = require("./user.route");
const authRouter = require("./auth.route");
const postRouter = require("./post.route");

router.use("/person", personRouter);
router.use("/product", productRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/post", postRouter);

module.exports = router;

