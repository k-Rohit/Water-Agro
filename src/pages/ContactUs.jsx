import React, { useEffect } from "react";
import ContactUsBg from "../assets/ContactUsBg.png";
import "../styles/pages/ContactUs.css";
import PhoneImage from "../assets/phone.png";
import gmailImage from "../assets/gmail-icon.png";
import wpImage from "../assets/wp-icon.png";
import cowCall from "../assets/cow-calling.png";
import TransparentNavbar from "../components/Transparent";
import MobileNavigation from "../components/MobileNavigation";

const ContactUs = () => {
  useEffect(() => {
    // Disable scrolling
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
            <span className="icon-text">+91 98765 43210</span>
          </div>
          <div className="contact-options">
            <img src={gmailImage} className="icon-img-c" alt="Email Icon" />
            <span className="icon-text">wateragro@gmail.com</span>
          </div>
          <div className="contact-options">
            <img src={wpImage} className="icon-img-c" alt="WhatsApp Icon" />
            <span className="icon-text">+91 98900 43210</span>
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