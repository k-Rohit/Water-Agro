// import React from 'react';
// import { Link } from 'react-router-dom'; // Added import for Link
// import '../styles/pages/CorpPage.css';
// import PersonImage from '../assets/person.png';
// import Footer from '../components/Footer';
// import MobileNavigation from '../components/MobileNavigation';
// import Logo from '../assets/logo.png';

// const CorpPage = () => {
//     return (
//         <>
//             <MobileNavigation/>
//             <div className="mobile-header-corp">
//                 <Link to="/">
//                     <img src={Logo} alt="Water Agro Life Logo" className="mobile-logo-corp" />
//                 </Link>
//             </div>
//             <div className='ourcorp-container'>
//                 <div className='ourcorp-heading'>
//                     <span className='who'>Our </span> Corporate Family
//                 </div>
//                 <div className='ourcorp-text'>
//                     Water Agro Life LLP proudly operates under the guidance of Space Crop Protection Limited, our parent company known for its leadership and innovation in the agricultural industry. Alongside us stands our sister concern, CTL, with whom we share a common vision of delivering progressive crop solutions for farmers across the country.Founded by Mr. Rajat Kumar in 2024, our company benefits from strong leadership, deep industry insight, and a collaborative structure that promotes growth across all entities. Together, we form a dynamic group committed to transforming Indian agriculture — one field at a time.
//                 </div>

//                 <div className='ourcorp-card-div'>
//                     <div className='ourcorp-card-left-div'>
//                         <img src={PersonImage} className='ourcorp-icon-image' alt="Mr. Rajat Kumar" />
//                     </div>
//                     <div className='ourcorp-card-right-div'>
//                         <p className='ourcorp-card-right-heading'>
//                             <strong>Mr. Rajat Kumar – Founder & Chairman</strong>
//                         </p>
//                         <p className='ourcorp-card-right-text'>
//                             With years of experience in the agricultural and business sectors, Mr. Rajat Kumar founded Water Agro Life LLP with the vision of creating impactful and sustainable solutions for farmers worldwide. As the guiding force behind the company, he provides strategic leadership and ensures that the company remains focused on its mission to improve global food security and promote environmental sustainability.
//                         </p>
//                     </div>
//                 </div>

//                 <div className='ourcorp-card-div-2'>
//                     <div className='ourcorp-card-right-div'>
//                         <p className='ourcorp-card-right-heading'>
//                             <strong>Mr. Dheer Singh – Director of Operations, Marketing and Strategy</strong>
//                         </p>
//                         <p className='ourcorp-card-right-text'>
//                             Mr. Dheer Singh brings over 30 years of extensive experience in agricultural operations, supply chain management, and strategic marketing. Having worked with leading Indian MNCs as well as renowned international corporations, he has a proven track record in scaling agricultural businesses and optimizing operational efficiency. In his role at Water Agro Life LLP, Mr. Singh helps shape the company's vision and marketing strategies, focusing on expanding its global presence, building relationships with stakeholders, and ensuring that their solutions reach the farmers and markets that need them most.
//                         </p>
//                     </div>
//                     <div className='ourcorp-card-left-div'>
//                         <img src={PersonImage} className='ourcorp-icon-image' alt="Mr. Dheer Singh" />
//                     </div>
//                 </div>

//                 <div className='ourcorp-card-div'>
//                     <div className='ourcorp-card-left-div'>
//                         <img src={PersonImage} className='ourcorp-icon-image' alt="Mr. Nishchal Sandha" />
//                     </div>
//                     <div className='ourcorp-card-right-div'>
//                         <p className='ourcorp-card-right-heading'>
//                             <strong>Mr. Nishchal Sandha – Director of Finance</strong>
//                         </p>
//                         <p className='ourcorp-card-right-text'>
//                             Mr. Nishchal Sandha is a seasoned financial expert with experience in managing corporate finance and overseeing investments. He is responsible for guiding Water Agro Life LLP's financial strategy, ensuring that the company's growth and sustainability efforts are supported by strong financial management and sound decision-making.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default CorpPage;


import React from 'react';
import { Link } from 'react-router-dom'; // Added import for Link
import '../styles/pages/CorpPage.css';
import PersonImage from '../assets/person.png';
import Footer from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation';
import Logo from '../assets/logo.png';

const CorpPage = () => {
    return (
        <>
            <div className="mobile-header-corp">
                <MobileNavigation/>
                <Link to="/">
                    <img src={Logo} alt="Water Agro Life Logo" className="mobile-logo-corp" />
                </Link>
            </div>
            <div className='ourcorp-container'>
                <div className='ourcorp-heading'>
                    <span className='who'>Our </span> Corporate Family
                </div>
                <div className='ourcorp-text'>
                    Water Agro Life LLP proudly operates under the guidance of Space Crop Protection Limited, our parent company known for its leadership and innovation in the agricultural industry. Alongside us stands our sister concern, CTL, with whom we share a common vision of delivering progressive crop solutions for farmers across the country.Founded by Mr. Rajat Kumar in 2024, our company benefits from strong leadership, deep industry insight, and a collaborative structure that promotes growth across all entities. Together, we form a dynamic group committed to transforming Indian agriculture — one field at a time.
                </div>

                <div className='ourcorp-card-div'>
                    <div className='ourcorp-card-left-div'>
                        <img src={PersonImage} className='ourcorp-icon-image' alt="Mr. Rajat Kumar" />
                    </div>
                    <div className='ourcorp-card-right-div'>
                        <p className='ourcorp-card-right-heading'>
                            <strong>Mr. Rajat Kumar – Founder & Chairman</strong>
                        </p>
                        <p className='ourcorp-card-right-text'>
                            With years of experience in the agricultural and business sectors, Mr. Rajat Kumar founded Water Agro Life LLP with the vision of creating impactful and sustainable solutions for farmers worldwide. As the guiding force behind the company, he provides strategic leadership and ensures that the company remains focused on its mission to improve global food security and promote environmental sustainability.
                        </p>
                    </div>
                </div>

                <div className='ourcorp-card-div-2'>
                    <div className='ourcorp-card-right-div'>
                        <p className='ourcorp-card-right-heading'>
                            <strong>Mr. Dheer Singh – Director of Operations, Marketing and Strategy</strong>
                        </p>
                        <p className='ourcorp-card-right-text'>
                            Mr. Dheer Singh brings over 30 years of extensive experience in agricultural operations, supply chain management, and strategic marketing. Having worked with leading Indian MNCs as well as renowned international corporations, he has a proven track record in scaling agricultural businesses and optimizing operational efficiency. In his role at Water Agro Life LLP, Mr. Singh helps shape the company's vision and marketing strategies, focusing on expanding its global presence, building relationships with stakeholders, and ensuring that their solutions reach the farmers and markets that need them most.
                        </p>
                    </div>
                    <div className='ourcorp-card-left-div'>
                        <img src={PersonImage} className='ourcorp-icon-image' alt="Mr. Dheer Singh" />
                    </div>
                </div>

                <div className='ourcorp-card-div'>
                    <div className='ourcorp-card-left-div'>
                        <img src={PersonImage} className='ourcorp-icon-image' alt="Mr. Nishchal Sandha" />
                    </div>
                    <div className='ourcorp-card-right-div'>
                        <p className='ourcorp-card-right-heading'>
                            <strong>Mr. Nishchal Sandha – Director of Finance</strong>
                        </p>
                        <p className='ourcorp-card-right-text'>
                            Mr. Nishchal Sandha is a seasoned financial expert with experience in managing corporate finance and overseeing investments. He is responsible for guiding Water Agro Life LLP's financial strategy, ensuring that the company's growth and sustainability efforts are supported by strong financial management and sound decision-making.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CorpPage;