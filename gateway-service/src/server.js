require("dotenv").config();

const app=require("./app")

const PORT=process.env.PORT


const server = app.listen(PORT, () => {
    console.log(`Gateway is running at Port ${PORT}`);
});

server.on("error", (error) => {
    console.error("Internal Server Error:", error);
});




