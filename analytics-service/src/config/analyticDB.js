require("dotenv").config()
const mongoose = require("mongoose")

const Connect = async function AnalyticsDatabase() {

    try {

        const connection = await mongoose.connect(process.env.MONGO_URL)

        console.log("Analytics DB Connected Successfully")

        return connection
    }
    catch (error) {

        console.error("Database is Facing Issue fix it", error)
    }
}

module.exports = Connect