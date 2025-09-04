const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { UsersModel } = require("../model/UsersModel");

const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

// Signup
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  // Check if all fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if user with email already exists
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create new user
    const user = await UsersModel.create({ username, email, password });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

    // Respond with token and user info
    res.status(201).json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.error("Signup error:", error);

    // If error is due to Mongoose validation
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    // Default fallback
    res.status(500).json({ message: "Server error during signup" });
  }
});

module.exports = router;

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", email, password);

  try {
    const user = await UsersModel.findOne({ email });
    if (!user) {
      console.log("No user found with email:", email);
      return res.status(400).json({ message: "Email not registered" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      console.log("Password mismatch for:", email);
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, user: { id: user._id, username: user.username, email } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
