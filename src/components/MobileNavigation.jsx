// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../styles/components/MobileNavigation.css'; // Make sure to create this CSS file

// // This is a separate component for the mobile navigation
// // You can import and use this in both LandingPage and ProductPage

// const MobileNavigation = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;

//   return (
//     <div className="mobile-navigation">
//       <Link to="/" className={`mobile-nav-item ${currentPath === '/' ? 'active' : ''}`}>
//         <div className="mobile-nav-icon home-icon"></div>
//         <span>Home</span>
//       </Link>
//       <Link to="/products" className={`mobile-nav-item ${currentPath === '/products' ? 'active' : ''}`}>
//         <div className="mobile-nav-icon products-icon"></div>
//         <span>Products</span>
//       </Link>
//       <Link to="/about-us" className={`mobile-nav-item ${currentPath === '/about-us' ? 'active' : ''}`}>
//         <div className="mobile-nav-icon about-icon"></div>
//         <span>About</span>
//       </Link>
//       <Link to="/research" className={`mobile-nav-item ${currentPath === '/research' ? 'active' : ''}`}>
//         <div className="mobile-nav-icon research-icon"></div>
//         <span>R&I</span>
//       </Link>
//       <Link to="/contact-us" className={`mobile-nav-item ${currentPath === '/contact-us' ? 'active' : ''}`}>
//         <div className="mobile-nav-icon contact-icon"></div>
//         <span>Contact</span>
//       </Link>
//     </div>
//   );
// };

// export default MobileNavigation;
// MobileNavigation.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/MobileNavigation.css';

const MobileNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mobile-navigation-container">
      {/* Hamburger button */}
      <button 
        className={`hamburger-button ${menuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Navigation menu that appears when hamburger is clicked */}
      <div className={`mobile-navigation-menu ${menuOpen ? 'open' : ''}`}>
        <Link 
          to="/" 
          className={`mobile-nav-item ${currentPath === '/' ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <div className="mobile-nav-icon home-icon"></div>
          <span id='Home'>Home</span>
        </Link>
        <Link 
          to="/products" 
          className={`mobile-nav-item ${currentPath === '/products' ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <div className="mobile-nav-icon products-icon"></div>
          <span>Products</span>
        </Link>
        <Link 
          to="/about-us" 
          className={`mobile-nav-item ${currentPath === '/about-us' ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <div className="mobile-nav-icon about-icon"></div>
          <span>About</span>
        </Link>
        <Link 
          to="/research" 
          className={`mobile-nav-item ${currentPath === '/research' ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <div className="mobile-nav-icon research-icon"></div>
          <span>R&I</span>
        </Link>
        <Link 
          to="/contact-us" 
          className={`mobile-nav-item ${currentPath === '/contact-us' ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <div className="mobile-nav-icon contact-icon"></div>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;