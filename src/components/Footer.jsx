import React from 'react';
import '../styles/components/Footer.css';
import FooterImage from '../assets/waves-1.svg';
import InstaImage from '../assets/insta.svg'
import LinkedInImage from '../assets/linkedin.svg'
import WhatsAppImage from '../assets/whatsapp.svg'
import FacebookImage from '../assets/facebook.svg'


const Footer = () => {

    const handleClick = (url) => {
        window.open(url, "_blank"); // Opens the link in a new tab
    };
    return (
        <div className="footer-container">
            <div className="wave-container">
                <img src={FooterImage} className="footer-image" alt="Footer background" />
                <div className="footer-links">
                    <div className='address-container'>
                        <a>Address</a>
                        <div className='address'>
                            D-136, First Floor, Ganga Vihar, Gokul Puri, North East, Delhi, 110094
                        </div>
                    </div>
                    <div className='social-links-container'>
                        <a>Social Links</a>
                        <div className='image-container'>
                            <img
                                src={InstaImage}
                                className="social-link-image"
                                alt="Instagram"
                                onClick={() => handleClick("https://www.instagram.com/water_agro_life?igsh=MWxyYWllbXUyeHN3aQ%3D%3D&utm_source=qr")}
                            />
                            <img
                                src={LinkedInImage}
                                className="social-link-image"
                                alt="LinkedIn"
                                onClick={() => handleClick("https://www.linkedin.com/company/water-agro-life-llp/")} />
                            <img
                                src={WhatsAppImage}
                                className="social-link-image"
                                alt="WhatsApp"
                                onClick={() => handleClick("https://wa.me/918222900711")}
                            />
                            <img
                                src={FacebookImage}
                                className="social-link-image"
                                alt="Facebook"
                                onClick={() => handleClick("https://www.facebook.com/share/15xFzMrTpd/?mibextid=wwXIfr")}
                            />
                        </div>
                    </div>
                    <div className='contact-info-container'>
                        <a>Contact Info</a>
                        <div className='phone-number-container'>
                            <span className='phone'>+91 82229-00711</span>
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


