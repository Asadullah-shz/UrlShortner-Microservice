const express=require("express")
const cookieParser = require("cookie-parser")
const URLRouter=require("./routes/url.route")
const AdminRouter=require("./routes/admin.route")

const app=express()

app.use(express.json())
app.use(cookieParser())

app.use(URLRouter)
app.use(AdminRouter)

const errorMiddleware = require("./middleware/error.middleware")
app.use(errorMiddleware)

module.exports=app