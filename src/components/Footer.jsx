import '../styles/components/Footer.css';
import FooterImage from '../assets/waves.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='footer-image-container'>
                <img src={FooterImage} alt="Footer" className="footer-image" />
            </div>
            <div className="footer-content">
                <div className="footer-links">
                    <Link to="/about-us">About</Link>
                    <Link to="/products">Product</Link>
                    <Link to="/research">Research</Link>
                    <Link to="/contact-us">Contact</Link>
                    <a href="#">Social Media</a>
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
        </div>
    );
};

export default Footer;