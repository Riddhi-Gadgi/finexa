import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    console.log("Signing");
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/api/auth/signup`, {
        username,
        email,
        password,
      });

      // Save userId in localStorage
      const userId = data.user.id;
      localStorage.setItem("userId", userId);

      console.log("Saved userId:", localStorage.getItem("userId"));

      setToast({
        open: true,
        message: "Signup successful!",
        severity: "success",
      });

      // Navigate directly to /app
      navigate("/app");
    } catch (err) {
      console.error(err);
      const message = err.response?.data?.message || "Signup failed";
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
          Create Account
        </h2>

        <form className="space-y-5" onSubmit={handleSignup}>
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Choose a username"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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
              placeholder="Create a password"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 font-semibold hover:underline"
          >
            Log in
          </Link>
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

export default Signup;
