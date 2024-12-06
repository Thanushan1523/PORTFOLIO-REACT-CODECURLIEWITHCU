import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"
import {FaBars} from "react-icons/fa"

const NavBar = () => {
  return (
    <div className='header'>
        <Link to ="/">
        <h1>MyPortfolio</h1>
        </Link>
        <div className='hamburger'><FaBars size={20} style={{color:"white"}}/></div>
        <ul className='nav-menu'>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/projects">Projects</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
            
            
            
        </ul>
    </div>
  )
}

export default NavBar;