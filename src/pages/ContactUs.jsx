import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactUsBg from "../assets/ContactUsBg.png";
import "../styles/pages/ContactUs.css";
import PhoneImage from "../assets/phone.png";
import gmailImage from "../assets/gmail-icon.png";
import wpImage from "../assets/wp-icon.png";
import cowCall from "../assets/cow-calling.png";
import TransparentNavbar from "../components/Transparent";
import MobileNavigation from "../components/MobileNavigation";

import FacebookImage from "../assets/facebook-yellow.svg"
import InstagramImage from "../assets/instagram-yellow.svg"
import LinkedInImage from "../assets/linkedin-yellow.svg"
import Logo from '../assets/logo.png';

const ContactUs = () => {

  const sendMessage = () => {
    const name = prompt("Tell us your name");
    const message = prompt("What do you want to tell us?");
  
    if (name && message) {
      const fullMessage = `⁠Hi, ${name}. ${message}⁠`;
      const whatsappURL = `https://wa.me/918222900711?text=${fullMessage}`;
      window.location.href = whatsappURL;
    } else {
      alert("Please provide both name and message.");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="contactus-container">
        {/* Desktop Navbar - only visible on larger screens */}
        <div className="navbar">
          <TransparentNavbar />
        </div>
        
        {/* Mobile navigation component - will be handled by CSS media queries */}
        <MobileNavigation currentPage="contact-us" />
        
        {/* Mobile logo - only visible on smaller screens */}
        <div className="mobile-header-contact">
          <Link to="/">
            <img src={Logo} alt="Water Agro Life Logo" className="mobile-logo" />
          </Link>
        </div>
        
        <img
          src={ContactUsBg}
          alt="Contact Us Background"
          className="contactus-background-image"
        />
        <div className="contactus-card">
          <div className="contactus-card-heading">
            Get in touch with <span className="us">us</span>
          </div>
          <div className="contact-options">
            <img src={PhoneImage} className="icon-img-c" alt="Phone Icon" />
            <span className="icon-text">+91 82229-00711</span>
          </div>
          <div className="contact-options">
          <img src={gmailImage} className="icon-img-c" alt="Email Icon" />
          <a href="mailto:wateragrolife@gmail.com" className="email-text">  <span className="icon-text">wateragrolife@gmail.com</span></a>
          </div>
          <div className="contact-options">
            <img src={wpImage} className="icon-img-c" alt="WhatsApp Icon" />
            <a href="https://wa.me/9340316706?text=SaaleChhakke%F0%9F%A4%AC"><span className="icon-text">+91 82229-00711</span></a>
          </div>
          <div className="socials">
            <div className="contactus-facebook">
            <a href="https://www.facebook.com/share/15xFzMrTpd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <img src={FacebookImage} className="icon-img-c" alt="Facebook Icon" />
            </a>
            </div>

            <div className="contactus-facebook">
              <a href="https://www.instagram.com/water_agro_life?igsh=MWxyYWllbXUyeHN3aQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <img src={InstagramImage} className="icon-img-c" alt="Instagram Icon" />
              </a>
            </div>

            <div className="contactus-facebook">
              <a href="https://www.linkedin.com/company/water-agro-life-llp/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInImage} className="icon-img-c" alt="LinkedIn Icon" />
              </a>
            </div>


          </div>
          
          <div className="button-div">
          <button className="message" onClick={sendMessage}>
              Send us a message
          </button>
          </div>
          
          <div className="cow-image-container">
            <img src={cowCall} className="cow-image" alt="Cow Calling" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
