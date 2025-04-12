import React from 'react'
import Sapling from '../assets/sapling.png';
import Logo from '../assets/logo.png';
import Arrow from '../assets/right-arrow.png';
import '../styles/pages/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landingpage-container">
        <div className="landingpage-header">
            <img src={Logo} className="logo" alt="Water Agro Logo" />
        </div>
        <div className="landingpage-mid">
            <div className="content">
                <h1 className='water'>Water </h1>
                <h1 className='agro-life'>AgroLife</h1>
                <div className="content-description">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ex modi minus earum nam, eius recusandae iste numquam voluptatem, alias rem illo nihil id hic, expedita et corrupti tempore odit!</p>
                </div>
                <div className='content-buttons'>
                    <button className='view-button'>
                        View 
                    </button>
                    <button className='arrow'>
                        <img src={Arrow}  className="arrow-img" alt="Arrow" />
                    </button>
                </div>
                
            </div>
            <div className="sapling-image-div">
                <img src={Sapling} alt="Sapling" />
            </div>
            <div className="tabs">
                <button>Home</button>
                <button>Products</button>
                <button>About Us</button>
                <button>R&I</button>
                <button>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default LandingPage;
