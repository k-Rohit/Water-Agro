import React from 'react';
import '../styles/components/Footer.css';
import FooterImage from '../assets/waves-1.svg';
import { Link } from 'react-router-dom';
import InstaImage from '../assets/insta.svg'
import LinkedInImage from '../assets/linkedin.svg'
import WhatsAppImage from '../assets/whatsapp.svg'


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="wave-container">
                <img src={FooterImage} className="footer-image" alt="Footer background" />
                <div className="footer-links">
                    <div className='address-container'>
                        <a href="#">Address</a>
                        <div className='address'>
                            245/6, Model Town Extension, Hisar, Haryana – 125001
                        </div>
                    </div>
                    <div className='social-links-container'>
                        <a href="#">Social Links</a>
                        <div className='image-container'>
                            <img src={InstaImage} className='social-link-image' />
                            <img src={LinkedInImage} className='social-link-image' />
                            <img src={WhatsAppImage} className='social-link-image' />
                        </div>
                    </div>
                    <div className='contact-info-container'>
                        <a href="#">Contact Info</a>
                        <div className='phone-number-container'>
                            <span className='phone'>+91 8765432109</span>
                            <span className='phone'>+91 9123456780</span>
                            <span className='phone'>+91 9876543210</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p>2025@Water-Agro. All Rights reserved</p>
                </div>
                <div className="footer-terms">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Services</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;


