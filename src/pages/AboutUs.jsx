import React from 'react';
import '../styles/pages/AboutUs.css';
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation'; // Import MobileNavigation
import FamerIcon from '../assets/farmer.png';
import BinoImage from '../assets/binoculars.png';
import CommitmentImage from '../assets/commitment.png';
import Logo from '../assets/logo.png'; // Import the logo
import { Link } from 'react-router-dom';
import PersonImage from '../assets/person.png'// Import Link for navigation

export const AboutUs = () => {
    return (
        <>
            <div className="aboutus-page">
                {/* Mobile-only logo with link to landing page */}
                <div className="mobile-logo-container">
                    <Link to="/">
                        <img src={Logo} alt="Water Agro Life Logo" className="mobile-logo" />
                    </Link>
                </div>

                <div className='aboutus-container'>
                    <div className='aboutus-heading'>
                        <span className='who'>Who</span> we are
                    </div>
                    <div className='aboutus-text'>
                        At Water Agro Life LLP, we believe that the strength of a nation begins in its fields. Our journey is driven by a simple yet powerful goal — to deliver practical, high-quality agricultural solutions that make farming more productive, sustainable, and rewarding. Founded in 2024 by Mr. Rajat Kumar, the company was established a vision to bridge the gap between innovative crop care and the real needs of Indian farmers. We work hand-in-hand with growers, understanding their challenges, and providing products that support them through every stage of the crop cycle.
                    </div>
                </div>

                <Slideshow />

                <div className='card-div'>
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


                <div className='card-div-2'>
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

                <div className='card-div'>
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
                <div className='ourteam-container'>
                    <div className='ourteam-heading'>
                        <span className='who'>Our</span> Team
                    </div>
                    <div className='ourteam-text'>
                        Water Agro Life LLP, founded by Mr. Rajat Kumar in 2024, operates under its parent company, Space Crop Protection Limited, and collaborates closely with its sister concern, CTL. United by a shared vision, the group focuses on delivering innovative crop solutions and driving agricultural transformation across India.
                    </div>
                    <div className='card-div'>
                        <div className='card-left-div'>
                            <img src={PersonImage} className='icon-image' alt="Commitment" />
                        </div>
                        <div className='card-right-div'>
                            <p className='card-right-heading'>
                                <strong>Mr. Rajat Kumar – Founder & Chairman</strong>
                            </p>
                            <p className='card-right-text'>
                                With years of experience in the agricultural and business sectors, Mr. RAJAT KUMAR founded WATER AGRO LIFE LLP with the vision of creating impactful and sustainable solutions for farmers worldwide. As the guiding force behind the company, he/she provides strategic leadership and ensures that the company remains focused on its mission to improve global food security and promote environmental sustainability.                        </p>
                        </div>
                    </div>
                    <div className='card-div-2'>

                        <div className='card-right-div'>
                            <p className='card-right-heading'>
                                <strong>Mr. DHEER SINGH – Director of Operations, Marketing and Strategy </strong>
                            </p>
                            <p className='card-right-text'>
                                Mr. Dheer Singh brings over 30 years of extensive experience in agricultural operations, supply chain management, and strategic marketing. Having worked with leading Indian MNCs as well as renowned international corporations, he has a proven track record in scaling agricultural businesses and optimizing operational efficiency. In his role at WATER AGRO LIFE LLP, Mr. Singh helps shape the company’s vision and marketing strategies, focusing on expanding its global presence, building relationships with stakeholders, and ensuring that their solutions reach the farmers and markets that need them most.
                            </p>
                        </div>
                        <div className='card-left-div'>
                            <img src={PersonImage} className='icon-image' alt="Commitment" />
                        </div>
                    </div>
                    <div className='card-div'>
                        <div className='card-left-div'>
                            <img src={PersonImage} className='icon-image' alt="Commitment" />
                        </div>
                        <div className='card-right-div'>
                            <p className='card-right-heading'>
                                <strong>Mr. NISHCHAL SANDHA – Director of Finance </strong>
                            </p>
                            <p className='card-right-text'>
                                Mr. NISHCHAL SANDHA is a seasoned financial expert with experience in managing corporate finance and overseeing investments. He/she is responsible for guiding WATER AGRO LIFE LLP financial strategy, ensuring that the company’s growth and sustainability efforts are supported by strong financial management and sound decision-making.</p>
                        </div>

                    </div>
                </div>

                <MobileNavigation />
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;