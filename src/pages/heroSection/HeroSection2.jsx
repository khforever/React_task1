import React from 'react';
import './HeroSection2.css';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <nav className="nav">
        <div className="logo">Blayden*</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#demo">Demo</a></li>
          <li><a href="#purchase">Purchase</a></li>
        </ul>
        <button className="buy-now">Buy Now</button>
      </nav>
      
      {/* Decorative elements */}
      <div className="left-rock"></div>
      <div className="right-rock"></div>
      <div className="left-flower"></div>
      <div className="right-flower"></div>
      
      {/* Main content */}
      <div className="hero-content">
        <h1>
          Make your work<br />stand out
        </h1>
        <a href="#demos" className="view-demos">View demos</a>
      </div>
    </div>
  );
}