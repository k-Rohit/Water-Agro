import React from 'react';
import '../styles/pages/AboutUs.css';
import Slideshow from '../components/Slideshow'; // Adjust path if needed
import Footer from '../components/Footer'; // Import the Footer component
import Navbar from '../components/Navbar'; // Import the Navbar component

export const AboutUs = () => {
    return (
        <>
            <Navbar /> {/* Add the Navbar component */}
            <div className="aboutus-page">
                <div className='aboutus-container'>
                    <div className='aboutus-heading'>
                        <span className='who'>Who</span> we are
                    </div>
                    <div className='aboutus-text'>
                        At Water Agro Life LLP, we believe that the strength of a nation begins in its fields. Our journey is driven by a simple yet powerful goal — to deliver practical, high-quality agricultural solutions that make farming more productive, sustainable, and rewarding. Founded in 2024 by Mr. Rajat Kumar, the company was established a vision to bridge the gap between innovative crop care and the real needs of Indian farmers. We work hand-in-hand with growers, understanding their challenges, and providing products that support them through every stage of the crop cycle.
                    </div>
                </div>

                {/* Add the Slideshow component here */}
                <Slideshow />

                {/* Add the Footer Component */}
                <div className='footer-container '>
                <Footer />
                </div>
            </div>
        </>
    );
};