const mongoose = require("mongoose")


const AnalyticsSchema = new mongoose.Schema({
    
    urlId: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "URL",
    },

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    clickedAt: {
        type: Date,
    }


})

const AnalyticsModel = mongoose.model("Analytics", AnalyticsSchema)


module.exports = AnalyticsModel