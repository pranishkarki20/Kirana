import { motion } from "framer-motion";
import "./login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AUTH_API_BASE_URL } from "../config/api";

const MotionLink = motion(Link);

function Login() {
  const navigate = useNavigate();
  const { setUserData } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      if (!form.email || !form.password) {
        setError("Please fill in all fields");
        setLoading(false);
        return;
      }

      // Call backend login API
      const res = await fetch(`${AUTH_API_BASE_URL}/api/v1/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        // Store user data with correct key and update AuthContext state
        localStorage.setItem("kinara_user", JSON.stringify(data.user));
        setUserData(data.user);
        navigate("/pages/admin");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "An error occurred while logging in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pages">
      <form onSubmit={handleSubmit}>
        <motion.div
          className="container1"
          id="login"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Welcome Back</h1>
          <p className="auth-subtitle">Login to access your admin dashboard</p>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <motion.input
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
              type="email"
              id="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <motion.input
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
              type="password"
              id="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          {error && (
            <motion.p 
              className="auth-error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="lbtn"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>

          <div className="auth-footer">
            <p>Don't have an account? 
              <MotionLink 
                to="/signup" 
                whileHover={{ scale: 1.05 }}
                className="auth-link"
              >
                Sign Up
              </MotionLink>
            </p>
          </div>
        </motion.div>
      </form>
    </div>
  );
}

export default Login;
