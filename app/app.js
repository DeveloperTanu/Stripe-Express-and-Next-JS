const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const paymentRoutes = require("../routes/payment.routes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/payment", paymentRoutes);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    message: "API is running",
  });
});

module.exports = app;