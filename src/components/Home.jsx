import './Css.css';
import{motion} from "framer-motion";
export default function Home(){
return (
    <div>
    <section id = "home" className = "home">
    <div className="home-container"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}
    >
    <motion.video autoPlay loop muted playsInline className="bg-video"
     initial={{ opacity: 0, y: 50 }} 
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 2 }}
           >
        <source src = "/product.mp4"/>
    </motion.video>
     <h3 > Welcome  to Kinara </h3>
    <h1> Get 10 % Off On your First Order </h1>
    </div>
    
    </section></div>
)
}