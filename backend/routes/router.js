const verifyToken = require("../tools/verifyToken");
const express = require("express");
const router = express.Router();

const auth = require("./auth/index");
const posts = require("./posts/index");

router.use("/auth", auth);
router.use("/posts", posts);

module.exports = router;