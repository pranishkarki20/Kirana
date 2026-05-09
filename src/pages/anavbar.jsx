import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
export default function ANavbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  const adminitems = [
    {name : "Home" , link : "/pages/admin"},
    {name : "Dashboard" , link : "/pages/dashboard"} ,
    {name : "Category" , link : "/#Category"},
    {name : "Product" , link : "/#Product"} ,
  ]

  return (
    <nav className="anavbar" >
      <h2 className="logo">Kinara.com</h2>
      <ul className="admin-nav" >
        {adminitems.map((item , index) =>(
          <li key = {index}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
