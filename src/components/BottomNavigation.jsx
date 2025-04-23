import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/BottomNavigation.css';

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="bottom-navigation">
      <Link to="/" className={`bottom-nav-item ${currentPath === '/' ? 'active' : ''}`}>
        <div className="bottom-nav-icon home-icon"></div>
        <span>Home</span>
      </Link>
      
      <Link to="/about-us" className={`bottom-nav-item ${currentPath === '/about-us' ? 'active' : ''}`}>
        <div className="bottom-nav-icon about-icon"></div>
        <span>About</span>
      </Link>
      <Link to="/products" className={`bottom-nav-item ${currentPath === '/products' ? 'active' : ''}`}>
        <div className="bottom-nav-icon products-icon"></div>
        <span>Products</span>
      </Link>
      <Link to="/ourcorp" className={`bottom-nav-item ${currentPath === '/ourcorp' ? 'active' : ''}`}>
        <div className="bottom-nav-icon contact-icon"></div>
        <span>Team</span>
      </Link>
      <Link to="/research" className={`bottom-nav-item ${currentPath === '/research' ? 'active' : ''}`}>
        <div className="bottom-nav-icon research-icon"></div>
        <span>R&I</span>
      </Link>
      <Link to="/contact-us" className={`bottom-nav-item ${currentPath === '/contact-us' ? 'active' : ''}`}>
        <div className="bottom-nav-icon contact-icon"></div>
        <span>Contact</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;