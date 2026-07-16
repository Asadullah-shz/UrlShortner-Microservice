require("dotenv").config()
const mongoose=require("mongoose")


const Connect=async function AuthDatabase() {

    try {
         
         const connection = await mongoose.connect(process.env.MONGO_URL)
    
    console.log("Auth DB Connected Successfully")

    return connection

    } catch (error) {
        
        console.error("Error connecting to Auth DB:", error)
        process.exit(1)
    }


    
}


module.exports= Connect