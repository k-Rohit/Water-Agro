import React, { useState } from 'react';
import Sapling from '../assets/sapling.png';
import Logo from '../assets/logo.png';
import Arrow from '../assets/right-arrow.png';
import cowImage from '../assets/Welcomecow.png';
import '../styles/pages/LandingPage.css';
import { Link } from 'react-router-dom';
import MobileNavigation from '../components/MobileNavigation';
import Footer from '../components/Footer';
import SlideNotification from '../components/SlideNotification';
import Capsicum from '../assets/capsicum.svg'
import HamburgerTooltip from '../components/HamburgerTooltip';


const isMobile = window.innerWidth <= 480;
const slogans = [
  "Innovation at the Heart of Every Field",
  "We stand by the farmers, season after season.",
  "We don’t just follow change — we lead it.",
  "We grow with those who grow for the world."
];

const LandingPage = () => {
  const [sloganIndex, setSloganIndex] = useState(0);
  const [showSlogan, setShowSlogan] = useState(false);

  const handleSloganClick = () => {
    setShowSlogan(true);
    setTimeout(() => setShowSlogan(false), 8000);
    setSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
  };

  return (
    <>
      <div className="landingpage-container">
        <div className="landingpage-header">
          <img src={Logo} className="logo" alt="Water Agro Logo" />
        </div>

        {/* <MobileNavigation /> */}
        <MobileNavigation />
        {isMobile && <HamburgerTooltip />}  

        <div className={`slogan-box ${showSlogan ? 'show' : ''}`}>
          {slogans[sloganIndex]}
        </div>

        <div className="landingpage-mid">
          <div className="content">
            <div className='comp-name'>
              <h1 className="water">Water</h1>
              <h1 className="agro-life">Agro Life</h1>
            </div>

            <div className="content-description">
              <p>
                At Water Agro Life LLP, we are committed to delivering high-quality agricultural solutions that help farmers achieve better yields, healthier crops, and sustainable growth. Our focus is on developing trusted, effective, and farmer-friendly products that support modern farming practices across India. We believe that agriculture is more than a profession — it's a legacy. And we're here to protect and nurture it with science-backed innovation and unmatched service.
              </p>
            </div>

            <div className="content-buttons">
              <Link to='/about-us' className="view-button">About Us</Link>
              <Link to='/about-us' className="arrow">
                <img src={Arrow} className="arrow-img" alt="Arrow" />
              </Link>
              <button className="slogan-button" onClick={handleSloganClick}>
                Know More
              </button>
            </div>
          </div>

          <div className="sapling-image-div">
            <img src={Sapling} className="sapling-image" alt="Sapling" />
          </div>

          <div className="div-right">
            <div className="tabs">
              <Link to="/" className="tabs-home tab-button">Home</Link>
              <Link to="/about-us" className="tabs-aboutus tab-button">About Us</Link>
              <Link to="/products" className="tabs-products tab-button">Products</Link>
              <Link to="/ourcorp" className="tabs-corp tab-button"> Our Corp Family</Link>
              <Link to="/research" className="tabs-ri tab-button">Research & Innovation</Link>
              <Link to="/contact-us" className="tabs-contactus tab-button">Contact Us</Link>
              

            </div>
            <div className="cow-image">
              <img src={Capsicum} alt="Cow" />
            </div>
          </div>
        </div>
      </div>

      {!isMobile && (
        <SlideNotification 
          message="Click the 'Know More' button to see our vision!" 
          duration={4000} 
        />
      )}

      <Footer />
    </>
  );
};

export default LandingPage;
