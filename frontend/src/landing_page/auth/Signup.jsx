import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;
// Signup
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // ✅ Just create user, pre-save hook will hash password
    const user = await UsersModel.create({ username, email, password });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.error("Signup error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: "Server error during signup" });
  }
});

export default Signup;
