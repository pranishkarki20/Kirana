import ANavbar from "./anavbar";
import "./admin.css";
import { useAuth } from "../context/AuthContext";
import Box from "@mui/material/Box"
function Admin() {
  const { user } = useAuth();
  const info = [
    {id: 1 ,  name:"TotalProduct"},
    {id:2 , name:"Sales"} ,
    {id: 3 , name:"Order"},
    {id: 4 , name : "Return"},
    {id: 5 , name : "Sales"}
  ]
  return (
  <div className="admin-panel">
  <ANavbar />   {/* sidebar */}
  <div className="admin">
    <h1>Welcome seller !</h1>
    <div className="Scontainers">
      <div className = "Seller">
        <img src="/pexels-izafi-29148928.jpg" alt="profile" className="profile-img" />
        <div className="Seler">
        <h4>Hello {user?.name || 'User'}</h4>
      </div>
    </div>
    </div>
  <Box sx = {{p:2 , border: '1px solid grey' , width : 850 , marginLeft: 5 ,marginTop : 2 ,
  display:"flex" , flexDirection: "row" , gap: 20,
    boxShadow:'0 4px 12px rgba(0, 0, 0, 0.15)'
   }} >
     {info.map((item , index) =>(
      <Box 
      sx = {{ border:'2px solid black', width: 43, textAlign: 'center' }}>
    <h6>{item.name}</h6>
    </Box>
    ))}
      </Box>
  </div>
</div>
  );
}

export default Admin;
