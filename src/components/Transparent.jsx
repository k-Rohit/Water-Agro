import React from 'react';
import '../styles/components/Transparent.css';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom'; // Import Link

const TransparentNavbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-links">
          <li><Link to="/"><span className='text' >Home</span></Link></li>
          <li><Link to="/about-us"><span className='text'>About Us</span></Link></li>
          <li><Link to="/products"><span className='text'>Product</span></Link></li>
          <li><Link to="/ourcorp"><span className='text'>Our Corp Family</span></Link></li>
          <li><Link to="/research"><span className='text'>R & I</span></Link></li>
          <li><Link to="/contact-us"><span className='text'>Contact Us</span></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default TransparentNavbar;