import React, { useRef } from 'react';
import '../styles/pages/AboutUs.css';
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation'; // Import MobileNavigation
import FamerIcon from '../assets/farmer.png';
import BinoImage from '../assets/binoculars.png';
import CommitmentImage from '../assets/commitment.png';
import Logo from '../assets/logo.png'; // Import the logo
import { Link } from 'react-router-dom';
import Field from '../assets/field.png'
import FarmerIconTwo from '../assets/farmer-icon.png'
import Transparency from '../assets/display.png'
import Future from '../assets/future.png'
import Logistics from '../assets/logistics.png'
import Ecological from '../assets/ecological.png'
import AboutOne from '../assets/about-1.jpg'
import AboutTwo from '../assets/about-2.jpg'
import AboutThree from '../assets/about-3.jpg'
import AboutFour from '../assets/about-4.jpg'
import AboutFive from '../assets/about-5.jpg'
import AboutSix from '../assets/about-6.jpg'

export const AboutUs = () => {
    // Create refs for scrolling to sections
    const whoWeAreRef = useRef(null);
    const commitmentRef = useRef(null);
    const withFarmersRef = useRef(null);
    const futureFocusRef = useRef(null);
    
    // Function to handle smooth scrolling to section
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="aboutus-page">
                {/* Mobile-only logo with link to landing page */}
                <div className="mobile-logo-container">
                    <Link to="/">
                        <img src={Logo} alt="Water Agro Life Logo" className="mobile-logo" />
                    </Link>
                </div>

                {/* Tab Navigation */}
                <div className="section-tabs">
                    <button onClick={() => scrollToSection(whoWeAreRef)}>Who We Are</button>
                    <button onClick={() => scrollToSection(commitmentRef)}>Our Commitment</button>
                    <button onClick={() => scrollToSection(withFarmersRef)}>With Farmers</button>
                    <button onClick={() => scrollToSection(futureFocusRef)}>Future Focus</button>
                </div>

                <div className='aboutus-container' ref={whoWeAreRef}>
                    <div className='aboutus-heading'>
                        <span className='who'>Who</span> we are
                    </div>
                    <div className='aboutus-text'>
                        At Water Agro Life LLP, we believe that the strength of a nation begins in its fields. Our journey is driven by a simple yet powerful goal — to deliver practical, high-quality agricultural solutions that make farming more productive, sustainable, and rewarding. Founded in 2024 by Mr. Rajat Kumar, the company was established a vision to bridge the gap between innovative crop care and the real needs of Indian farmers. We work hand-in-hand with growers, understanding their challenges, and providing products that support them through every stage of the crop cycle.
                    </div>
                </div>

                <div className="aboutus-container-mid">
                    <div className="box-first">
                        <div className="box-one">
                           <img src={AboutOne} alt="Field-Focused Formulations icon" />
                        </div>
                        <div className="box-two">
                            <img src={Transparency} className="transparency-img" alt="Transparent Practices - icon" />
                            <p className="box-heading">Transparent Practices</p>
                            <p className="box-content">We believe in clear labeling, honest marketing, and maintaining full transparency with our customers and partners.</p>
                        </div>
                        <div className="box-three">
                            <img src={AboutTwo} alt="Farmer-Centric Support icon" />
                        </div>
                    </div>
                    <div className="box-second">
                        <div className="box-four">
                            <img src={Field} className="field-img" alt="Field-Focused Formulations icon" />
                            <p className="box-heading">Field-Focused Formulations</p>
                            <p className="box-content">Every product is tested and tuned for real farm conditions — because performance matters where it grows.</p>
                        </div>
                        <div className="box-five">
                            <img src={AboutThree} alt="Transparent Practices" />   
                        </div>
                        <div className="box-six">
                            <img src={FarmerIconTwo} className="farmer-icon-two-img" alt="Farmer-Centric Support icon" />
                            <p className="box-heading">Farmer-Centric Support</p>
                            <p className="box-content">From product guidance to on-ground feedback, our team is actively engaged in helping farmers at every stage.</p>
                        </div>
                    </div>
                    <div className="box-first">
                        <div className="box-one">
                           <img src={AboutFour} alt="Eco-Conscious Approach" />
                        </div>
                        <div className="box-two">
                            <img src={Logistics} className="transparency-img" alt="Transparent Practices - icon" />
                            <p className="box-heading">Fast & Reliable Distribution</p>
                            <p className="box-content">We ensure timely availability of products through a responsive and growing supply network.</p>
                        </div>
                        <div className="box-three">
                            <img src={AboutFive} alt="Young, Dynamic, and Future-Ready" />
                        </div>
                    </div>
                    <div className="box-second">
                        <div className="box-four">
                            <img src={Ecological} className="field-img" alt="Eco-Conscious Approach" />
                            <p className="box-heading">Eco-Conscious Approach</p>
                            <p className="box-content">Our solutions are developed with care — balancing productivity with sustainability and soil health.</p>
                        </div>
                        <div className="box-five">
                            <img src={AboutSix} alt="Fast & Reliable Distribution" />   
                        </div>
                        <div className="box-six">
                            <img src={Future} className="farmer-icon-two-img" alt="Farmer-Centric Support icon" />
                            <p className="box-heading">Young, Dynamic, and Future-Ready</p>
                            <p className="box-content">As a next-gen agri company founded in 2024, we bring fresh energy and bold thinking to the industry.</p>
                        </div>
                    </div>
                </div>

                {/* <Slideshow /> */}

                <div className='card-div' ref={commitmentRef}>
                    <div className='card-left-div'>
                        <img src={CommitmentImage} className='icon-image' alt="Commitment" />
                    </div>
                    <div className='card-right-div'>
                        <p className='card-right-heading'>
                            <strong>Our Commitment to Excellence</strong>
                        </p>
                        <p className='card-right-text'>
                            At Water Agro Life LLP, excellence is more than a goal — it's the foundation of our work. We are committed to delivering high-performance, reliable, and farmer-friendly solutions that stand the test of time and climate. From sourcing quality raw materials to ensuring on-field effectiveness, every step is guided by a dedication to precision, innovation, and integrity. Our team works relentlessly to raise the bar, because we believe farmers deserve nothing less than the best.
                        </p>
                    </div>
                </div>


                <div className='card-div-2' ref={withFarmersRef}>
                    <div className='card-right-div'>
                        <p className='card-right-heading'>
                            <strong>With Farmers. For Farmers.</strong>
                        </p>
                        <p className='card-right-text'>
                            Everything we do begins with a simple truth — farmers know best. That's why we walk alongside them, understand their challenges firsthand, and create solutions that are practical, effective, and built for the realities of the field. From product design to after-sales support, our entire approach is shaped by the voices of those who grow. We're not just here to sell — we're here to support, to solve, and to grow together.
                        </p>
                    </div>
                    <div className='card-left-div'>
                        <img src={FamerIcon} className='icon-image' alt="Farmer" />
                    </div>
                </div>

                <div className='card-div' ref={futureFocusRef}>
                    <div className='card-left-div'>
                        <img src={BinoImage} className='icon-image' alt="Future Vision" />
                    </div>
                    <div className='card-right-div'>
                        <p className='card-right-heading'>
                            <strong>Our Future Focus</strong>
                        </p>
                        <p className='card-right-text'>
                            The future of farming is changing — and so are we. At Water Agro Life LLP, we're not just preparing for what's next — we're creating it. From embracing cutting-edge agri-technologies to developing more eco-friendly and efficient products, our eyes are set on long-term growth that benefits both farmers and the planet. As agriculture evolves, we're committed to staying ahead of the curve, leading with innovation, and expanding our impact across every corner of rural India. The journey has just begun — and the future is fertile.
                        </p>
                    </div>
                </div>
                
                <MobileNavigation />
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;