import React from 'react'

import "./FooterStyles.css";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

// import { FaUser } from "react-icons/fa";




const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className='location'>
            <FaHome size={30} style={{ color: "#fff", marginRight: "2rem"}}/>
            <p>61,Shepmore Terrace ,
            Scarborough 
            Onatario
          </p>
            </div>
          

          
                <div className='phone'>
            
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}} />416 5865 474</h4>
            </div>
            <div className='mail'>
            
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}} />vhsvh@gmail.com</h4>
            </div>
            </div>


            <div className="right">
                <h4>about me</h4>
                <p>adf jbtunreuu  ugc gu gcfuccg giuc</p>
            <div className='social'>
            <a href="https://www.linkedin.com/in/satkunarasa-thanushan/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                </a>
                <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;



