import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        setToast({
          open: true,
          message: "Please enter both email and password",
          severity: "warning",
        });
        return;
      }

      const { data } = await axios.post(
        "http://localhost:3002/api/auth/login",
        { email, password }
      );

      const userId = data.user.id;

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("userId", userId);

      console.log("Logged in userId:", userId);

      if (!userId) {
        setToast({
          open: true,
          message: "No userId found. Redirecting to login.",
          severity: "error",
        });
        navigate("/login");
        return;
      }

      setToast({
        open: true,
        message: "Login successful!",
        severity: "success",
      });
      navigate("/app");
    } catch (err) {
      console.error("Login error:", err.response || err.message);
      const message = err.response
        ? `Error ${err.response.status}: ${err.response.data.message}`
        : "Network error, please try again";
      setToast({ open: true, message, severity: "error" });
    }
  };

  const handleCloseToast = () => {
    setToast({ ...toast, open: false });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-fuchsia-100">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-xl border border-fuchsia-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-purple-600 font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>

      {/* Snackbar Toast */}
      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseToast}
          severity={toast.severity}
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;
