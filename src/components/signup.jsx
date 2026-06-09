import { motion } from "framer-motion";
import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AUTH_API_BASE_URL } from "../config/api";

const MotionLink = motion(Link);

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUserData } = useAuth();
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
        setError("Please fill in all fields");
        setLoading(false);
        return;
      }

      if (formData.password.trim().length < 6) {
        setError("Password must be at least 6 characters");
        setLoading(false);
        return;
      }

      const res = await fetch(`${AUTH_API_BASE_URL}/api/v1/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          password: formData.password,
        })
      });

      const data = await res.json();

      if (res.ok) {
        setUserData(data.user);
        navigate("/pages/admin");
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.message || "An error occurred during signup");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pages">
      <form onSubmit={handleSubmit}>
        <motion.div
          className="container1"
          id="signup"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Create Account</h1>
          <p className="auth-subtitle">Create a local account to access the admin dashboard.</p>

          <motion.input
            whileHover={{ scale: 1.1 }}
            type="text"
            name="name"
            required
            value={formData.name}
            placeholder="Full name"
            onChange={handleChange}
          />

          <motion.input
            whileHover={{ scale: 1.1 }}
            type="email"
            name="email"
            required
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />

          <motion.input
            whileHover={{ scale: 1.1 }}
            type="password"
            name="password"
            required
            minLength={6}
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
          />

          {error ? <p className="auth-error">{error}</p> : null}

          <motion.button
            whileHover={{ scale: 1.1 }}
            type="submit"
            className="lbtn"
            disabled={loading}
          >
            {loading ? "Creating..." : "Sign Up"}
          </motion.button>

          <MotionLink to="/" whileHover={{ scale: 1.1 }}>
            {"<- Back to home"}
          </MotionLink>

          <motion.div whileHover={{ scale: 1.1 }}>
            <h3><Link to="/login">Already have an account? Login</Link></h3>
          </motion.div>
        </motion.div>
      </form>
    </div>
  );
}
