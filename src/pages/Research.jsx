import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/Research.css';
import MobileNavigation from '../components/MobileNavigation';

import ResearchImage1 from '../assets/R&I-1.svg';
import ResearchImage2 from '../assets/R&I-2.svg';
import ResearchImage3 from '../assets/R&I-3.svg';

const Research = () => {
  return (
    <>
      <MobileNavigation currentPage="research" />

      <div className="research-container">
        <div className="img-text-container">
          <div className="image-container">
            <img src={ResearchImage1} alt="Research visual" />
          </div>
          <div className="text-container">
            <p>
              <span>Backed by Experts </span>– Our team of researchers, led by seasoned professionals, works at the
              intersection of science and innovation to deliver unmatched product quality.
            </p>
          </div>
        </div>
        <div className="img-text-container">
        <div className="text-container">
            <p>
            We develop new formulations using cutting-edge equipment and perform rigorous internal testing to ensure stability, efficacy, and compliance.
            </p>
          </div>
          <div className="image-container">
            <img src={ResearchImage2} alt="Research visual" />
          </div>
        </div>
        <div className="img-text-container">
          <div className="image-container">
            <img src={ResearchImage3} alt="Research visual" />
          </div>
          <div className="text-container">
            <p>
            <span>Product Development</span> - Each product is a result of continuous research, stability testing, and a deep understanding of consumer needs.
            </p>
          </div>
        </div>
      </div>



    </>
  );
};

export default Research;