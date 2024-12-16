import "./AboutContent.css";
import { Link } from 'react-router-dom'
import React from 'react'
import React1 from "../assets/react1.png"
import React2 from "../assets/react2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> who am i ?</h1>
            <p>uagbcu uruicam urgai  aeeo  e ya8c  8yacpmgjiut r8tv y8tr ybyu jdyjd ss ituori tu vi </p>
            <Link to ="/contact"><button className="btn">Contact</button></Link>
        </div>


        <div className="right">
<div className="img-container">
    <div className="img-stack top">
        <img src={React1} className="img" alt="React"/>
        <img src={React2} className="img" alt="React"/>
    </div>

</div>
        </div>
    </div>


  )
}

export default AboutContent;