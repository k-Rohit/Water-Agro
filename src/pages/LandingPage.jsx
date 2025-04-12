import React from 'react'
import Sapling from '../assets/sapling.png';
import Logo from '../assets/logo.png';
import '../styles/pages/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landingpage-container">
        <div className="landingpage-header">
            <img src={Logo} className="logo" alt="Water Agro Logo" />
        </div>
        <div className="landingpage-mid">
            <div className="content">
                <h1>Water Agro Life</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ex modi minus earum nam, eius recusandae iste numquam voluptatem, alias rem illo nihil id hic, expedita et corrupti tempore odit!</p>
                <button className='view-button'> View </button>
                <button className='arrow'>-></button>
            </div>
            <div className="sapling-image-div">
                <img src={Sapling} alt="Sapling" />
            </div>
            <div className="tabs">
                
            </div>
        </div>
    </div>
  )
}

export default LandingPage;
