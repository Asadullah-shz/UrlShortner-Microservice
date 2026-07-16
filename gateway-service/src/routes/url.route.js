const express = require("express");
const { verifyAuth } = require("../middleware/auth.middleware")
const urlProxy = require("../config/url.proxy");


const router = express.Router();

router.use("/", verifyAuth, urlProxy);

module.exports = router;