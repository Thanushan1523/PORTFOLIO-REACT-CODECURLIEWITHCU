import React from 'react'

import "./FooterStyles.css";
// import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";




const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <FaUser size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          <p>home</p>
            </div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default Footer;



