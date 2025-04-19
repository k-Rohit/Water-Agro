// import React from 'react';
// import ContactUsBg from "../assets/ContactUsBg.png";
// import CollaborationIcon from "../assets/collaboration.png";
// import VisionaryIcon from "../assets/visionary.png";
// import RocketIcon from "../assets/rocket.png";
// import MineralIcon from '../assets/mineral.png'
// import ObsIcon from '../assets/observation.png'
// import Footer from '../components/Footer';
// import RIImage from '../assets/RI.png'
// import MobileNavigation from '../components/MobileNavigation';
// import '../styles/pages/Research.css';

// const Research = () => {
//   return (
//     <>
//       <MobileNavigation currentPage="research" />

//       <div className="research-container">
//         <div className="image-container-research">
//           <img src={ContactUsBg} className="bg-image" alt="background" />
//         </div>
//         <div className='headline-info-box-container'>
//         <div className="headline">
//           <h1>Where <span className="green">Agriculture</span></h1>
//           <h1>Meets Innovation</h1>
//         </div>

//         <div className="info-boxes">
//           <div className="info-box">
//             <img src={RocketIcon} alt="Innovation" className="icon-img" />
//             <h3>Powered by Innovation</h3>
//             <p>
//               Water Agro Life LLP delivers advanced agricultural solutions through its partnership with Space Crop Protection Limited. Without an in-house innovation facility, we rely on their scientific expertise for next-gen product development, ensuring tested, precision-driven, and future-ready products.
//             </p>
//           </div>

//           <div className="info-box">
//             <img src={VisionaryIcon} alt="Collaboration" className="icon-img" />
//             <h3>Backbone of Our Vision</h3>
//             <p>
//             Behind every successful agricultural innovation stands a foundation of deep knowledge and field-tested experience. At Water Agro Life LLP, we are proud to be guided and supported by two highly respected industry experts whose insights and leadership continue to shape our journey.            </p>
//           </div>
          

//           <div className="info-box">
//             <img src={CollaborationIcon} alt="Collaboration" className="icon-img" />
//             <h3>Collaboration that Drives Results</h3>
//             <p>
//               This synergy allows fast innovation, maintaining high standards while staying aligned with farmers’ needs. It’s built on knowledge sharing and a mission to make agriculture more productive, profitable, and sustainable.
//             </p>
//           </div>
//         </div> 
//         </div>
//         <img src={RIImage} alt="R & I" className="vertical-ri-image" />

//         <div className="researcher-cards">
//           <div className="card">
//             <div className="card-header">
//               <div className='name-spec'>
//                 <h2>Mr. Rajat Kumar</h2>
//                 <p><strong>Specialization:</strong> Micronutrients</p>
//               </div>
//               <img src={MineralIcon} alt="Micronutrients" className="icon-img" />
//             </div>
//             <div className='card-text-div'>
//             <p className='card-text'>
//               A recognized authority in micronutrient research, Mr. Rajat Kumar brings a wealth of knowledge in developing advanced nutrient formulations aimed at improving plant vitality and maximizing crop yield. His deep understanding has advanced sustainable agricultural practices.
//             </p>
//             </div>
//           </div>

//           <div className="card">
//             <div className="card-header">
//               <div className='name-spec'>
//                 <h2>Dr. Dharmendra Singh</h2>
//                 <p><strong>Specialization:</strong> Sugarcane</p>
//               </div>
//               <img src={ObsIcon} alt="Micronutrients" className="icon-img" />
//             </div>
//             <div className='card-text-div'>
//             <p className='card-text'>
//             With extensive experience in sugarcane cultivation and development, Dr. Dharmendra Singh has played a key role in driving sustainable productivity within the sector. Formerly the Group Head of Cane Development at Uttam Sugarcane Industries
//             </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default Research;
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactUsBg from "../assets/ContactUsBg.png";
import CollaborationIcon from "../assets/collaboration.png";
import VisionaryIcon from "../assets/visionary.png";
import RocketIcon from "../assets/rocket.png";
import MineralIcon from '../assets/mineral.png';
import ObsIcon from '../assets/observation.png';
import Footer from '../components/Footer';
import RIImage from '../assets/RI.png';
import MobileNavigation from '../components/MobileNavigation';
import '../styles/pages/Research.css';

const Research = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile based on screen width
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Parallax Card component
  const ParallaxCard = ({ children, index }) => {
    const { scrollYProgress } = useScroll();
    
    // Create different scroll speeds for each card based on its index
    const y = useTransform(
      scrollYProgress, 
      [0, 1], 
      [0, index === 0 ? -50 : 50]
    );
    
    return isMobile ? (
      <motion.div 
        className="card"
        style={{ y }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    ) : (
      <div className="card">
        {children}
      </div>
    );
  };

  return (
    <>
      <MobileNavigation currentPage="research" />

      <div className="research-container">
        <div className="image-container-research">
          <img src={ContactUsBg} className="bg-image" alt="background" />
        </div>
        <div className='headline-info-box-container'>
          <div className="headline">
            <h1>Where <span className="green">Agriculture</span></h1>
            <h1>Meets Innovation</h1>
          </div>

          <div className="info-boxes">
            <div className="info-box">
              <img src={RocketIcon} alt="Innovation" className="icon-img" />
              <h3>Powered by Innovation</h3>
              <p>
                Water Agro Life LLP delivers advanced agricultural solutions through its partnership with Space Crop Protection Limited. Without an in-house innovation facility, we rely on their scientific expertise for next-gen product development, ensuring tested, precision-driven, and future-ready products.
              </p>
            </div>

            <div className="info-box">
              <img src={VisionaryIcon} alt="Collaboration" className="icon-img" />
              <h3>Backbone of Our Vision</h3>
              <p>
                Behind every successful agricultural innovation stands a foundation of deep knowledge and field-tested experience. At Water Agro Life LLP, we are proud to be guided and supported by two highly respected industry experts whose insights and leadership continue to shape our journey.
              </p>
            </div>

            <div className="info-box">
              <img src={CollaborationIcon} alt="Collaboration" className="icon-img" />
              <h3>Collaboration that Drives Results</h3>
              <p>
                This synergy allows fast innovation, maintaining high standards while staying aligned with farmers' needs. It's built on knowledge sharing and a mission to make agriculture more productive, profitable, and sustainable.
              </p>
            </div>
          </div> 
        </div>
        <img src={RIImage} alt="R & I" className="vertical-ri-image" />

        <div className="researcher-cards">
          <ParallaxCard index={0}>
            <div className="card-header">
              <div className='name-spec'>
                <h2>Mr. Rajat Kumar</h2>
                <p><strong>Specialization:</strong> Micronutrients</p>
              </div>
              <img src={MineralIcon} alt="Micronutrients" className="icon-img" />
            </div>
            <div className='card-text-div'>
              <p className='card-text'>
                A recognized authority in micronutrient research, Mr. Rajat Kumar brings a wealth of knowledge in developing advanced nutrient formulations aimed at improving plant vitality and maximizing crop yield. His deep understanding has advanced sustainable agricultural practices.
              </p>
            </div>
          </ParallaxCard>

          <ParallaxCard index={1}>
            <div className="card-header">
              <div className='name-spec'>
                <h2>Dr. Dharmendra Singh</h2>
                <p><strong>Specialization:</strong> Sugarcane</p>
              </div>
              <img src={ObsIcon} alt="Micronutrients" className="icon-img" />
            </div>
            <div className='card-text-div'>
              <p className='card-text'>
                With extensive experience in sugarcane cultivation and development, Dr. Dharmendra Singh has played a key role in driving sustainable productivity within the sector. Formerly the Group Head of Cane Development at Uttam Sugarcane Industries
              </p>
            </div>
          </ParallaxCard>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Research;