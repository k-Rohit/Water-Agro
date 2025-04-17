import React from 'react';
import Sapling from '../assets/sapling.png';
import Logo from '../assets/logo.png';
import Arrow from '../assets/right-arrow.png';
import cowImage from '../assets/Welcomecow.png';
import '../styles/pages/LandingPage.css';
import { Link } from 'react-router-dom';
import MobileNavigation from '../components/MobileNavigation';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <div className="landingpage-container">
        {/* Fixed header containing logo */}
        <div className="landingpage-header">
          <img src={Logo} className="logo" alt="Water Agro Logo" />
        </div>

        {/* Using the dynamic MobileNavigation component */}
        <MobileNavigation />

        {/* Scrollable content area */}
        <div className="landingpage-mid">
          <div className="content">
            <div className='comp-name'>
            <h1 className="water">Water</h1>
            <h1 className="agro-life">AgroLife</h1>
            </div>
            
            <div className="content-description">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ex modi minus earum nam, eius recusandae iste numquam voluptatem, alias rem illo nihil id hic, expedita et corrupti tempore odit!
              </p>
            </div>
            <div className="content-buttons">
              <Link to='/products' className="view-button">View Products</Link>
              <Link to='/products' className="arrow">
                <img src={Arrow} className="arrow-img" alt="Arrow" />
              </Link>
            </div>
          </div>

          <div className="sapling-image-div">
            <img src={Sapling} className="sapling-image" alt="Sapling" />
          </div>

          <div className="div-right">
            <div className="tabs">
              <Link to="/" className="tabs-home tab-button">Home</Link>
              <Link to="/products" className="tabs-products tab-button">Products</Link>
              <Link to="/about-us" className="tabs-aboutus tab-button">About Us</Link>
              <Link to="/research" className="tabs-ri tab-button">R&I</Link>
              <Link to="/contact-us" className="tabs-contactus tab-button">Contact Us</Link>
            </div>
            <div className="cow-image">
              <img src={cowImage} alt="Cow" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;