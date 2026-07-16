const express = require("express")
const AnalyticsController=require("../controllers/analyticscontroller")


const router = express.Router();

router.post("/analytics/click", AnalyticsController.RecordClick)





module.exports = router