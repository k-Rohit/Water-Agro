import React from 'react';
import '../styles/components/Navbar.css'; // Import CSS
import Logo from '../assets/logo.png';  // Replace logo.svg

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <a href="/" className="navbar-logo-link">  {/* Add link to logo */}
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </a>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">R & I</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;