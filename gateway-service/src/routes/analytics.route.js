const express = require("express");
const { verifyAuth } = require("../middleware/auth.middleware")
const analyticsProxy = require("../config/analytics.proxy");

const router = express.Router();

router.use("/",verifyAuth, analyticsProxy);

module.exports = router;
