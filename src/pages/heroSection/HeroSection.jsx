import React from 'react'
import './HeroSection.css'
import logo from '../../assets/images/logo.png';
import image1 from '../../assets/images/11.webp';
import image2 from '../../assets/images/22.webp';
import image3 from '../../assets/images/33.webp';
export default function HeroSection() {
  return (
    
    




<div className="hero-section">
  <div className="buy"> <button className="buy-now">Buy Now</button></div>
      <nav className="nav">
         <img src={logo} alt="logo" className="logo-img" />
        <div className="logo">Blayden *</div>

        
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#demo">Demo</a></li>
          <li><a href="#purchase">Purchase</a></li>
        </ul>
       {/* <div className="buy"> <button className="buy-now">Buy Now</button></div> */}
      </nav>
      <div className="hero-content">
        
 


        <h1>
          Make your work<br />stand out
        </h1>

 </div>


<div className="decoration left">
        <div className="rock left-rock"></div>
        <div className="flower left-flower"></div>
      </div>
    
      <div className="decoration right">
        <div className="rock right-rock"></div>
        <div className="flower right-flower"></div>
      </div>

 








 







        
        <a href="#demos" className="view-demos">View demos</a>
      {/* </div> */}

      







 

<div className="image1">
      <img src={image1} alt="image" className="img1" />





    </div>
 


<div className="image2">
<img src={image2} alt="image" className="img2" />

</div>


 





<div className="image3">
<img src={image3} alt="image" className="img3" />

</div>




 














    </div>








  )






}       
