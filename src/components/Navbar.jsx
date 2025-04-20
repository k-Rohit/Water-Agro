import React, { useState } from 'react';
import '../styles/components/Navbar.css';
import Logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menu, setmenu] = useState(null);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-links">
          <li><Link to="/" className={getLinkClass('/')}>Home</Link></li>
          <li><Link to="/products" className={getLinkClass('/products')}>Products</Link></li>
          <li><Link to="/about-us" className={getLinkClass('/about-us')}>About Us</Link></li>
          <li><Link to="/contact-us" className={getLinkClass('/contact-us')}>Contact Us</Link></li>
          <li><Link to="/research" className={getLinkClass('/research')}>R & I</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
