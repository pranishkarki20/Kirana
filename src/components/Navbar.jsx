import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/cartContext";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const { cart } = useCart();

  const navitems = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/pages/product" },
    { name: "Contact", link: "/pages/contact" },
  ];

  const cartCount = cart.reduce((total, item) => {
    return total + item.quantity ;  } , 0 ) ;
  return (
    <nav className="navbar">
      <h2 className="logo">Kinara.com</h2>

      <ul className="nav-links">
        {navitems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/checkout">
        <button className="cart-btn">Cart ({cartCount})</button>
      </Link>

      <div className="auth-buttons">
        {isAuthenticated ? (
          <>
            <span className="auth-user">
              Hi, {user?.name || "User"}
            </span>

            <Link to="/pages/admin">
              <button className="login-btn">Dashboard</button>
            </Link>

            <button className="Signup-btn" onClick={logout}>
              Logout
            </button>
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
    </nav>
  );
}

export default Navbar;
