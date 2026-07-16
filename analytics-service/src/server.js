require("dotenv").config()
const app = require("./app")
const Connect = require("./config/analyticDB")
const dns = require(`dns`)

dns.setServers(["1.1.1.1", "8.8.8.8"])
Connect()


const PORT = process.env.PORT

const server = app.listen(PORT, () => {
    console.log(`Analytics Service is running at Port ${PORT}`);
});

server.on("error", (error) => {
    console.error("Internal Server Error:", error);
});
