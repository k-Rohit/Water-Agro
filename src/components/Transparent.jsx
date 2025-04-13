import React from 'react';
import '../styles/components/Transparent.css';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-links">
          <li><Link to="/"><span>Home</span></Link></li>
          <li><Link to="/products"><span>Product</span></Link></li>
          <li><Link to="/about-us"><span>About Us</span></Link></li>
          <li><Link to="/contact-us"><span>Contact Us</span></Link></li>
          <li><Link to="/research"><span>R & I</span></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;