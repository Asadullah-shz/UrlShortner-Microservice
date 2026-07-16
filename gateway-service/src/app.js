const express=require("express")
const cors = require("cors")
const morgan = require("morgan")
const authRoutes = require("./routes/auth.route")
const urlRoutes = require("./routes/url.route")
const analyticsRoutes = require("./routes/analytics.route")
const  rateLimit = require("./middleware/ratelimit")
const { notFoundHandler, errorHandler } = require("./middleware/error.middleware")


const app=express()
app.use(rateLimit)
app.use(cors())
app.use(morgan("dev"))
app.use(express.json({ limit: "10kb" }))



app.use("/api/auth", authRoutes)
app.use("/api/urls", urlRoutes)
app.use("/api/analytics", analyticsRoutes)



app.get("/health", (req, res) => {
    res.status(200).json({ status: "Gateway is up and running!" });
});

app.use(notFoundHandler);
app.use(errorHandler);


module.exports=app