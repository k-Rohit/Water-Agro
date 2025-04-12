
import React from 'react';
import '../styles/components/Footer.css' // Import the CSS
import FooterImage from '../assets/waves.svg'; // Import the image

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='footer-image-container'>
            <img src={FooterImage} alt="Footer" className="footer-image" />
            </div>
            <div className="footer-links">
                <a href="#">About</a>
                <a href="#">Product</a>
                <a href="#">Social Links</a>
                <a href="#">Contact Info</a>
                <a href="#">Address</a>
            </div>
            <div className="footer-copyright">
                <p>2025@Water-Agro. All Rights reserved</p>
            </div>
            <div className="footer-terms">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Services</a>
            </div>
        </div>
    );
};

export default Footer;
