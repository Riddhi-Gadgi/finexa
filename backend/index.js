require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Routers
const authRoutes = require("./routers/authRoutes");

// Models
const { HoldingsModel } = require("./model/HoldingsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UsersModel } = require("./model/UsersModel");
const { PositionsModel } = require("./model/PositionsModel");

const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Auth routes
app.use("/api/auth", authRoutes);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});
app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

// Create a new order
app.post("/newOrder", async (req, res) => {
  try {
    const { userId, name, qty, price, mode } = req.body;

    if (!userId) return res.status(400).send("Missing userId");

    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
      user: userId, // userId must be a valid ObjectId
    });

    await newOrder.save();

    // Push order to user's orders array
    await UsersModel.findByIdAndUpdate(userId, {
      $push: { orders: newOrder._id },
    });

    res.json({ message: "Order saved and linked to user!", order: newOrder });
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).send("Error saving order");
  }
});

// Get orders by userId
app.get("/userOrders/:userId", async (req, res) => {
  try {
    const userOrders = await OrdersModel.find({
      user: req.params.userId,
    }).populate("user");
    res.json(userOrders);
  } catch (err) {
    console.error("Error fetching user orders:", err);
    res.status(500).send("Error fetching user orders");
  }
});

// Connect to MongoDB and start server
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected!");
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.error("DB connection error:", err));
