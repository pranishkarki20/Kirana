import './offers.css'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import KitechenIcon from '@mui/icons-material/Kitchen';
export default function Offer() {
  return (
    <section className='Offers'>
        <div className="offe">
          <h2>Current Offers</h2>
        </div>
        <div className='offrs'>
      <div className='firstoder'>
        <h1>
          10% off
        </h1>
        <p>On your first order</p>
      </div>
      <div className='Off'> 
       <h2>5% off electronics</h2>
       <p>Use coupon MMMXT34</p> 
       <LaptopMacIcon sx= {{fontSize : {xs: 60 , md :100}}}/>
      </div>
      <div className='Off'> 
       <h2>25% off fashion</h2>
       <p>Use coupon FASHXT34</p> 
       <KitechenIcon sx = {{fontSize: {xs: 60 , md : 100}}} />
      </div>
      <div className='Off'> 
       <h2>15% off kitchen</h2>
       <p>Use coupon FAXT45</p> 
       <CheckroomIcon sx= {{fontSize: {xs:60 , md :100}}}/>
      </div>
      
      </div>
    </section>
  )
}
