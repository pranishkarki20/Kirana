import './navbar.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  const navitems = [
    { name: "Home", link: "/" },
    { name: "Category", link: "/#category" },
    { name: "Products", link: "/pages/product" },
    { name: "Contact", link: "/pages/contact" }
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="logo">Kinara.com</h2>

      <ul className="nav-links">
        {navitems.map((item, index) => (
          <motion.li key={index} whileHover={{ scale: 1.1 }}>
            <a href={item.link}>{item.name}</a>
          </motion.li>
        ))}
      </ul>
      <div className="auth-buttons">
        {isAuthenticated ? (
          <>
            <span className="auth-user">Hi, {user?.name || "User"}</span>
            <Link to="/pages/admin">
              <button className="login-btn">Dashboard</button>
            </Link>
            <button className="Signup-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="Signup-btn">Signup</button>
            </Link>
          </>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
