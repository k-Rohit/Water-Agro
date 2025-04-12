import React, { useEffect } from "react";
import ContactUsBg from '../assets/ContactUsBg.png';
import '../styles/pages/ContactUs.css'

const ContactUs = () => {
    useEffect(() => {
        // Disable scrolling
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <>
         <div className="contactus-container">
            <img src={ContactUsBg} alt="Contact Us Background"></img>
            <div className="contactus-card">
                <div className="contactus-card-heading">
                    Get in touch with <span className="us">us</span>
                </div>
            </div>
         </div>
         
        </>
    );
}

export default ContactUs;