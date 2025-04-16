
// import React from 'react';
// import '../styles/components/Footer.css' // Import the CSS
// import FooterImage from '../assets/waves.svg'; // Import the image

// const Footer = () => {
//     return (
//         <div className="footer-container">
//             <div className='footer-image-container'>
//             <img src={FooterImage} alt="Footer" className="footer-image" />
//             </div>
//             <div className="footer-links">
//                 <a href="#">About</a>
//                 <a href="#">Product</a>
//                 <a href="#">Social Links</a>
//                 <a href="#">Contact Info</a>
//                 <a href="#">Address</a>
//             </div>
//             <div className="footer-copyright">
//                 <p>2025@Water-Agro. All Rights reserved</p>
//             </div>
//             <div className="footer-terms">
//                 <a href="#">Privacy Policy</a>
//                 <a href="#">Terms of Services</a>
//             </div>
//         </div>
//     );
// };

// export default Footer;

// import React from 'react';
// import '../styles/components/Footer.css'
// import FooterImage from '../assets/waves.svg';
// import { Link } from 'react-router-dom';  // Import Link

// const Footer = () => {
//     return (
//         <div className="footer-container">
//             <div className='footer-image-container'>
//                 <img src={FooterImage} alt="Footer" className="footer-image" />
//             </div>
//             <div className="footer-links">
//                 <Link to="/about-us">About</Link>
//                 <Link to="/products">Product</Link>
//                 <a >Social Links</a> {/* Keep as <a> if it's an external link */}
//                 <a>Contact Info</a> {/* Keep as <a> if it's an external link */}
//                 <a>Address</a> {/* Keep as <a> if it's an external link */}
//             </div>
//             <div className="footer-copyright">
//                 <p>2025@Water-Agro. All Rights reserved</p>
//             </div>
//             <div className="footer-terms">
//                 <a >Privacy Policy</a> {/* Keep as <a> if it's an external link */}
//                 <a >Terms of Services</a> {/* Keep as <a> if it's an external link */}
//             </div>
//         </div>
//     );
// };

// export default Footer;

import React from 'react';
import '../styles/components/Footer.css';
import FooterImage from '../assets/waves.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="wave-container">
                <img src={FooterImage} className="footer-image" alt="Footer background" />
                <div className="footer-links">
                    <Link to="/about-us">About</Link>
                    <a>Address</a> 
                    <a >Social Links</a> 
                    <a>Contact Info</a> 
                    
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p>2025@Water-Agro. All Rights reserved</p>
                </div>
                <div className="footer-terms">
                    <a >Privacy Policy</a>
                    <a >Terms of Services</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;