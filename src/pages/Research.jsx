import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';



import ContactUsBg from "../assets/ContactUsBg.png";
import CollaborationIcon from "../assets/collaboration.png";
import VisionaryIcon from "../assets/visionary.png";
import RocketIcon from "../assets/rocket.png";
import MineralIcon from '../assets/mineral.png'
import ObsIcon from '../assets/observation.png'
import Footer from '../components/Footer';
import RIImage from '../assets/RI.png'
import PlantImage from '../assets/planting.png'
import SharedVision from '../assets/shared.png'
import TestingImage from '../assets/testing.png'
import EcoImage from '../assets/eco.png'
import NextGen from '../assets/nextgen.png'
import MobileNavigation from '../components/MobileNavigation';
import '../styles/pages/Research.css';
import Logo from '../assets/logo.png';

const Research = () => {
  return (
    <>
      <MobileNavigation currentPage="research" />

      <div className="research-container">
        <div className="mobile-header-research">
          {/* Mobile logo - only visible on smaller screens */}
          <Link to="/">
            <img src={Logo} alt="Water Agro Life Logo" className="mobile-logo" />
          </Link>
        </div>

        <div className="image-container-research">
          <img src={ContactUsBg} className="bg-image" alt="background" />
        </div>
        <div className='headline-info-box-container'>
          <div className="headline">
            Powered by Innovation:<span className="green"> R&D Support from Our Parent Company</span>
          </div>

          <div className='r-text'>
            At Water Agro Life LLP, we are deeply committed to delivering cutting-edge agricultural solutions, even without maintaining an in-house innovation facility. Our strength lies in being backed by the world-class scientific infrastructure and technical expertise of our parent company, Space Crop Protection Limited.Through this powerful collaboration, we gain access to next-generation product development, rigorous scientific validation, and advanced formulation technologies. Every product we bring to market is rooted in a foundation of precision science, field-tested performance, and future-ready innovation

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
                Behind every successful agricultural innovation stands a foundation of deep knowledge and field-tested experience. At Water Agro Life LLP, we are proud to be guided and supported by two highly respected industry experts whose insights and leadership continue to shape our journey.            </p>
            </div>


            <div className="info-box">
              <img src={CollaborationIcon} alt="Collaboration" className="icon-img" />
              <h3>Collaboration that Drives Results</h3>
              <p>
                This synergy allows fast innovation, maintaining high standards while staying aligned with farmers’ needs. It’s built on knowledge sharing and a mission to make agriculture more productive, profitable, and sustainable.
              </p>
            </div>

            <div className="info-box">
              <img src={NextGen} alt="Next-Gen" className="icon-img" />
              <h3>Next-Gen Formulations</h3>
              <p>
                We benefit from scientifically developed solutions focused on high efficacy, low environmental impact, and improved plant health outcomes. Our innovative approaches incorporate advanced research methodologies and sustainable practices to ensure optimal results while maintaining ecological balance in agricultural systems.            </p>
            </div>
          </div>
          <hr className='h-rule' />
          <div className="info-boxes">
            <div className="info-box">
              <img src={PlantImage} alt="Farmer-Centric" className="icon-img" />
              <h3>Farmer-Centric Development</h3>
              <p>New solutions are built keeping in mind real-world farming conditions, local crop challenges, and evolving agricultural practices, ensuring they are both effective and practical. Our development process integrates farmer feedback and regional agricultural expertise to create solutions that address specific needs and challenges.</p>
            </div>

            <div className="info-box">
              <img src={EcoImage} alt="Eco-Conscious" className="icon-img" />
              <h3>Eco-Conscious Technologies</h3>
              <p>The innovation center at Space prioritizes the development of bio-based, residue-free, and sustainable crop protection products, helping us meet the demands of modern, eco-conscious farming. Our advanced research facilities ensure innovative solutions that align with environmental standards while maximizing agricultural productivity.</p>
            </div>


            <div className="info-box">
              <img src={TestingImage} alt="Rigorous Testing" className="icon-img" />
              <h3>Rigorous Testing & Validation</h3>
              <p>
                All solutions undergo extensive research trials, performance testing, and safety assessments to ensure consistency, reliability, and farmer satisfaction. Our comprehensive evaluation process includes multiple stages of validation and field testing to guarantee optimal performance and meet rigorous quality standards.              </p>
            </div>

            <div className="info-box">
              <img src={SharedVision} alt="Shared Vision" className="icon-img" />
              <h3>Shared Vision for Smarter Agriculture</h3>
              <p>
                This collaboration between Water Agro Life LLP and Space Crop Protection Limited gives us the unique ability to operate with speed, agility, and trust, while delivering the benefits of high-end agri-science to farmers across the country. It’s innovation made accessible — designed to drive progress from the ground up.            </p>
            </div>
          </div>




        </div>

        <div className="headline">
          Backbone of<span className="green"> Our Vision</span>
        </div>

        <div className='r-text-2'>
          Behind every successful agricultural innovation stands a foundation of deep knowledge and field-tested experience. At Water Agro Life LLP, we are proud to be guided and supported by two highly respected industry experts whose insights and leadership continue to shape our journey.

        </div>
        <img src={RIImage} alt="R & I" className="vertical-ri-image" />

        <div className="researcher-cards">
          <div className="card">
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
          </div>

          <div className="card">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Research;
