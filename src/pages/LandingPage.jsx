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

// import React from 'react';
// import Sapling from '../assets/sapling.png';
// import Logo from '../assets/logo.png';
// import Arrow from '../assets/right-arrow.png';
// import cowImage from '../assets/Welcomecow.png';
// import '../styles/pages/LandingPage.css';
// import { Link } from 'react-router-dom'; // Import Link
// import Footer from '../components/Footer';

// const LandingPage = () => {
//   return (
//     <>
//       <div className="landingpage-container">
//         <div className="landingpage-header">
//           <img src={Logo} className="logo" alt="Water Agro Logo" />
//         </div>
//         <div className="landingpage-mid">
//           <div className="content">
//             <h1 className="water">Water</h1>
//             <h1 className="agro-life">AgroLife</h1>
//             <div className="content-description">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ex modi minus earum nam, eius recusandae iste numquam voluptatem, alias rem illo nihil id hic, expedita et corrupti tempore odit!
//               </p>
//             </div>
//             <div className="content-buttons">
//               <button className="view-button">View</button>
//               <button className="arrow">
//                 <img src={Arrow} className="arrow-img" alt="Arrow" />
//               </button>
//             </div>
//           </div>
//           <div className="sapling-image-div">
//             <img src={Sapling} className="sapling-image" alt="Sapling" />
//           </div>
//           <div className="div-right">
//             <div className="tabs">
//               <Link to="/" className="tabs-home tab-button">Home</Link>
//               <Link to="/products" className="tabs-products tab-button">Products</Link>
//               <Link to="/about-us" className="tabs-aboutus tab-button">About Us</Link>
//               <Link to="/research" className="tabs-ri tab-button">R&I</Link>
//               <Link to="/contact-us" className="tabs-contactus tab-button">Contact Us</Link>
//             </div>
//             <div className="cow-image">
//               <img src={cowImage} alt="Cow" />
//             </div>
//           </div>
//         </div>
//       </div>
        
//     </>
//   );
// };

// export default LandingPage;


// // LandingPage.jsx
// // LandingPage.jsx
// import React from 'react';
// import Sapling from '../assets/sapling.png';
// import Logo from '../assets/logo.png';
// import Arrow from '../assets/right-arrow.png';
// import cowImage from '../assets/Welcomecow.png';
// import '../styles/pages/LandingPage.css';
// import { Link } from 'react-router-dom';

// const LandingPage = () => {
//   return (
//     <>
//       <div className="landingpage-container">
//         <div className="landingpage-header">
//           <img src={Logo} className="logo" alt="Water Agro Logo" />
//         </div>

//         {/* Mobile Navigation - will be shown/hidden by CSS media queries */}
//         <div className="mobile-navigation">
//           <Link to="/" className="mobile-nav-item active">
//             <div className="mobile-nav-icon home-icon"></div>
//             <span>Home</span>
//           </Link>
//           <Link to="/products" className="mobile-nav-item">
//             <div className="mobile-nav-icon products-icon"></div>
//             <span>Products</span>
//           </Link>
//           <Link to="/about-us" className="mobile-nav-item">
//             <div className="mobile-nav-icon about-icon"></div>
//             <span>About</span>
//           </Link>
//           <Link to="/research" className="mobile-nav-item">
//             <div className="mobile-nav-icon research-icon"></div>
//             <span>R&I</span>
//           </Link>
//           <Link to="/contact-us" className="mobile-nav-item">
//             <div className="mobile-nav-icon contact-icon"></div>
//             <span>Contact</span>
//           </Link>
//         </div>

//         <div className="landingpage-mid">
//           <div className="content">
//             <h1 className="water">Water</h1>
//             <h1 className="agro-life">AgroLife</h1>
//             <div className="content-description">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ex modi minus earum nam, eius recusandae iste numquam voluptatem, alias rem illo nihil id hic, expedita et corrupti tempore odit!
//               </p>
//             </div>
//             <div className="content-buttons">
//               <Link to ='/products' className="view-button">View Products</Link>
//               <Link to ='/products' className="arrow">
//                 <img src={Arrow} className="arrow-img" alt="Arrow" />
//               </Link>
//             </div>
//           </div>

//           <div className="sapling-image-div">
//             <img src={Sapling} className="sapling-image" alt="Sapling" />
//           </div>

//           {/* Desktop navigation - will be shown/hidden by CSS media queries */}
//           <div className="div-right">
//             <div className="tabs">
//               <Link to="/" className="tabs-home tab-button">Home</Link>
//               <Link to="/products" className="tabs-products tab-button">Products</Link>
//               <Link to="/about-us" className="tabs-aboutus tab-button">About Us</Link>
//               <Link to="/research" className="tabs-ri tab-button">R&I</Link>
//               <Link to="/contact-us" className="tabs-contactus tab-button">Contact Us</Link>
//             </div>
//             <div className="cow-image">
//               <img src={cowImage} alt="Cow" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LandingPage;

import React from 'react';
import Sapling from '../assets/sapling.png';
import Logo from '../assets/logo.png';
import Arrow from '../assets/right-arrow.png';
import cowImage from '../assets/Welcomecow.png';
import '../styles/pages/LandingPage.css';
import { Link } from 'react-router-dom';
import MobileNavigation from '../components/MobileNavigation';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <div className="landingpage-container">
        <div className="landingpage-header">
          <img src={Logo} className="logo" alt="Water Agro Logo" />
        </div>

        {/* Using the dynamic MobileNavigation component */}
        <MobileNavigation />

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
              <Link to='/products' className="view-button">View Products</Link>
              <Link to='/products' className="arrow">
                <img src={Arrow} className="arrow-img" alt="Arrow" />
              </Link>
            </div>
          </div>

          <div className="sapling-image-div">
            <img src={Sapling} className="sapling-image" alt="Sapling" />
          </div>

          {/* Desktop navigation */}
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
      <Footer /> {/* Footer component added here */}
    </>
  );
};

export default LandingPage;