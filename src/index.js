const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const errorMiddleware = require("./middlewares/errorMiddleware");
const bookingsRouter = require("./controllers/bookingsController");
const { authMiddleware } = require("./middlewares/authMiddleware");

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/bookings", authMiddleware, bookingsRouter);

app.use(errorMiddleware);

app.listen(3001, () => console.log("Server running on port 3001"));
