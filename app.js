const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT || 3030
const indexRoute = require("./routes/index");
const error_middleware = require("./middleware/error_middleware");

const app = express()



app.use(express.json())


app.use("/api", indexRoute)







// error route
app.use(error_middleware)
app.listen(PORT, () => {
    console.log("Server runing at :", PORT)
})
