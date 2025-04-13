// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/pages/Research.css';

// import ResearchImage1 from '../assets/R&I-1.svg';
// import ResearchImage2 from '../assets/R&I-2.svg';
// import ResearchImage3 from '../assets/R&I-3.svg';

// const Research = () => {
//     return (
//       <>
//         <Navbar /> {/* Add the Navbar component */}

//         {/* Main Content */}
//         <div className="main-content">
//           {/* Left Image Section */}
//           <div className="content-row">
//             <div className="image-container">
//               <img src={ResearchImage1} alt="Lab researcher with petri dish" />
//             </div>
//             <div className="text-section">
//               <h2>Backed by Experts</h2>
//               <p>
//                 Our team of researchers, led by seasoned professionals, works at the intersection of science and innovation to deliver unmatched product quality.
//               </p>
//             </div>
//           </div>

//           {/* Center Section */}
//           <div className="center-section">
//             <div className="text-section">
//               <h2>Innovative R&D Lab</h2>
//               <p>
//                 We develop new formulations using cutting-edge equipment and perform rigorous internal testing to ensure stability, efficacy, and compliance.
//               </p>
//             </div>
//             <div className="center-image">
//               <img src={ResearchImage3} alt="Lab technician with testing equipment" />
//             </div>
//           </div>

//           {/* Right Image Section */}
//           <div className="content-row">
//             <div className="text-section">
//               <h2>Product Development</h2>
//               <p>
//                 Each product is a result of continuous research, stability testing, and a deep understanding of consumer needs.
//               </p>
//             </div>
//             <div className="image-container">
//               <img src={ResearchImage2} alt="Hands holding soil" />
//             </div>
//           </div>
//         </div>

//         <Footer />
//       </>
//     );
// };

// export default Research;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/Research.css';

import ResearchImage1 from '../assets/R&I-1.svg';
import ResearchImage2 from '../assets/R&I-2.svg';
import ResearchImage3 from '../assets/R&I-3.svg';

const Research = () => {
  return (
    <>
      {/* <Navbar /> */}
      
      <div className="research-container">
        {/* Side Label */}
        <div className="side-label">
          <span>R & I</span>
        </div>
        
        {/* Main Research Content */}
        <div className="research-content">
          {/* First Section - Image */}
          <div className="image-box image-top">
            <img src={ResearchImage1} alt="Lab researcher with petri dish" />
          </div>
          
          {/* First Section - Text */}
          <div className="text-box text-right">
            <h2>Backed by Experts</h2>
            <p>
              Our team of researchers, led by seasoned professionals, works at the intersection of science and innovation to deliver unmatched product quality.
            </p>
          </div>
          
          {/* Second Section - Text */}
          <div className="text-box text-left">
            <h2>Innovative R&D Lab</h2>
            <p>
              We develop new formulations using cutting-edge equipment and perform rigorous internal testing to ensure stability, efficacy, and compliance.
            </p>
          </div>
          
          {/* Second Section - Image */}
          <div className="image-box image-right">
            <img src={ResearchImage2} alt="Lab technician with testing equipment" />
          </div>
          
          {/* Third Section - Text */}
          <div className="text-box text-left">
            <h2>Product Development</h2>
            <p>
              Each product is a result of continuous research, stability testing, and a deep understanding of consumer needs.
            </p>
          </div>
          
          {/* Third Section - Image */}
          <div className="image-box image-right">
            <img src={ResearchImage3} alt="Hands holding soil" />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Research;