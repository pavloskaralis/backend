const express = require("express")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const authController = require("./controllers/authController")
const authMiddleware = require("./middlewares/authMiddleware")
const errorMiddleware = require("./middlewares/errorMiddleware")

const app = express()

app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan("dev"))

app.use("/auth", authController)
app.use(errorMiddleware)

app.listen(3001, () => console.log("Server running on port 3001"))
