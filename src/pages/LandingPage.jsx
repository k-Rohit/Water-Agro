// import React from 'react'
// import Sapling from '../assets/sapling.png';
// import Logo from '../assets/logo.png';
// import Arrow from '../assets/right-arrow.png';
// import cowImage from '../assets/Welcomecow.png'
// import '../styles/pages/LandingPage.css'

// const LandingPage = () => {
//   return (
//     <>
//     <div className="landingpage-container">
//         <div className="landingpage-header">
//             <img src={Logo} className="logo" alt="Water Agro Logo" />
//         </div>
//         <div className="landingpage-mid">
//             <div className="content">
//                 <h1 className='water'>Water </h1>
//                 <h1 className='agro-life'>AgroLife</h1>
//                 <div className="content-description">
//                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ex modi minus earum nam, eius recusandae iste numquam voluptatem, alias rem illo nihil id hic, expedita et corrupti tempore odit!</p>
//                 </div>
//                 <div className='content-buttons'>
//                     <button className='view-button'>
//                         View 
//                     </button>
//                     <button className='arrow'>
//                         <img src={Arrow}  className="arrow-img" alt="Arrow" />
//                     </button>
//                 </div>
                
//             </div>
//             <div className="sapling-image-div">
//                 <img src={Sapling} className="sapling-image" alt="Sapling" />
//             </div>
//             <div className='div-right'>
//             <div className="tabs">
//                 <button className='tabs-home'>Home</button>
//                 <button className='tabs-products'>Products</button>
//                 <button className='tabs-aboutus'>About Us</button>
//                 <button className='tabs-ri'>R&I</button>
//                 <button className='tabs-contactus'>Contact Us</button>
//             </div>
//             <div className='cow-image'>
//                 <img src={cowImage}></img>
//             </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default LandingPage;

import React from 'react';
import Sapling from '../assets/sapling.png';
import Logo from '../assets/logo.png';
import Arrow from '../assets/right-arrow.png';
import cowImage from '../assets/Welcomecow.png';
import '../styles/pages/LandingPage.css';
import { Link } from 'react-router-dom'; // Import Link

const LandingPage = () => {
  return (
    <>
      <div className="landingpage-container">
        <div className="landingpage-header">
          <img src={Logo} className="logo" alt="Water Agro Logo" />
        </div>
        <div className="landingpage-mid">
          <div className="content">
            <h1 className="water">Water</h1>
            <h1 className="agro-life">AgroLife</h1>
            <div className="content-description">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ex modi minus earum nam, eius recusandae iste numquam voluptatem, alias rem illo nihil id hic, expedita et corrupti tempore odit!
              </p>
            </div>
            <div className="content-buttons">
              <button className="view-button">View</button>
              <button className="arrow">
                <img src={Arrow} className="arrow-img" alt="Arrow" />
              </button>
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
    </>
  );
};

export default LandingPage;