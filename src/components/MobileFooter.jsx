import React from 'react';
import '../styles/components/MobileFooter.css';
import FooterImage from '../assets/mobilefooter.svg';
import InstaImage from '../assets/insta.svg'
import LinkedInImage from '../assets/linkedin.svg'
import WhatsAppImage from '../assets/whatsapp.svg'
import FacebookImage from '../assets/facebook.svg'


const MobileFooter = () => {

    const handleClick = (url) => {
        window.open(url, "_blank"); // Opens the link in a new tab
    };
    return (
        <div className="mobilefooter-container">
            <div className="rect-container">
                <img src={FooterImage} className="footer-image" alt="Footer background" />
                <div className="footer-links">
                    <div className='address-container-1'>
                    <div className='mobilehead-office-div'>
                        <a>Head Office</a>
                        </div>
                        <div className='address-mobile'>
                            D-136, First Floor, Ganga Vihar, Gokul Puri, North East, Delhi, 110094
                        </div>
                    </div>
                    <div className='social-links-container-1'>
                        <a>Social Links</a>
                        <div className='image-container'>
                            <img
                                src={InstaImage}
                                className="social-link-image-1"
                                alt="Instagram"
                                onClick={() => handleClick("https://www.instagram.com/water_agro_life?igsh=MWxyYWllbXUyeHN3aQ%3D%3D&utm_source=qr")}
                            />
                            <img
                                src={LinkedInImage}
                                className="social-link-image-1"
                                alt="LinkedIn"
                                onClick={() => handleClick("https://www.linkedin.com/company/water-agro-life-llp/")} />
                            <img
                                src={WhatsAppImage}
                                className="social-link-image-1"
                                alt="WhatsApp"
                                onClick={() => handleClick("https://wa.me/918222900711")}
                            />
                            <img
                                src={FacebookImage}
                                className="social-link-image-1"
                                alt="Facebook"
                                onClick={() => handleClick("https://www.facebook.com/share/15xFzMrTpd/?mibextid=wwXIfr")}
                            />
                        </div>
                    </div>
                    <div className='contact-info-container-1'>
                        <a>Contact Info</a>
                        <div className='mobilephone-number-container'>
                            <span className='phone'>+91 82229-00711</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobilefooter-bottom">
                <div className="mobilefooter-copyright">
                    <p>2025@Water-Agro. All Rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default MobileFooter;


