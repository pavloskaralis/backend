const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const errorMiddleware = require("./middlewares/errorMiddleware");
const bookingRouter = require("./controllers/bookingController");
const licenseRouter = require("./controllers/licenseController");
const userRouter = require("./controllers/userController");
const doctorRouter = require("./controllers/doctorController");
const { authMiddleware } = require("./middlewares/authMiddleware");

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// Booking routes (auth required)
app.use("/bookings", authMiddleware, bookingRouter);

// License routes (auth required)
app.use("/licenses", authMiddleware, licenseRouter);

// User routes (auth required)
app.use("/users", authMiddleware, userRouter);

// Doctor routes (auth required for full details)
app.use("/doctors", authMiddleware, doctorRouter);

app.use(errorMiddleware);

app.listen(3001, () => console.log("Server running on port 3001"));
