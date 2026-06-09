import './offers.css'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import KitechenIcon from '@mui/icons-material/Kitchen';
export default function Offer() {
  return (
    <section className='Offers'>
        <diV className = "offe">
             <h2> Offers</h2>
        </diV>
        <div className='offrs'>
      <div className='firstoder'>
        <h1>
          Get
          <br />
          10 % off <br/>
          <p> On  your very First order</p>
        </h1>
      </div>
      <div className='Off'> 
       <h2> 5% off  <br/>
       on Every Electronic Accessories  </h2>
       <p>Use the Cupoon Code "MMMXT34"</p> 
       <LaptopMacIcon sx= {{fontSize : {xs: 60 , md :100}}}/>
      </div>
      <div className='Off'> 
       <h2> 25% off  <br/>
       on Every Fashion Accessories  </h2>
       <p>Use the Cupoon Code "FASHXT34"</p> 
       <KitechenIcon sx = {{fontSize: {xs: 60 , md : 100}}} />
      </div>
      <div className='Off'> 
       <h2> 15% off  <br/>
       on Every Kitechen Accessories  </h2>
       <p>Use the Cupoon Code "FAXT45"</p> 
       <CheckroomIcon sx= {{fontSize: {xs:60 , md :100}}}/>
      </div>
      
      </div>
    </section>
  )
}