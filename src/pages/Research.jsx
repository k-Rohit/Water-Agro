import React from 'react';
import ContactUsBg from "../assets/ContactUsBg.png";
import Footer from '../components/Footer';
import '../styles/pages/Research.css';
import MobileNavigation from '../components/MobileNavigation';


const Research = () => {
  return (
    <>
      <MobileNavigation currentPage="research" />

      <div className="research-container">
        <div className='image-container'>
          <img src={ContactUsBg} className='bg-image'/>
        </div>
        <div>Where Agriculture 
        Meets Innovation</div>
      </div>



    </>
  );
};

export default Research;
