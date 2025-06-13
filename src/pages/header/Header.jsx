import './header.css'
import logo from '../../assets/images/logo.png';
function Header() {
return (
    <div className="header">
        


      <div className="nav">
         <img src={logo} alt="logo" className="logo-img" />
        <div className="logo">Blayden *</div>

        
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#demo">Demo</a></li>
          <li><a href="#purchase">Purchase</a></li>
        </ul>
       {/* <div className="buy"> <button className="buy-now">Buy Now</button></div> */}
      </div>





<div className="buy"> <button className="buy-now">Buy Now</button></div>




    </div>
)
    
}


export default Header;