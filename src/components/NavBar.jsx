import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => setClicked(!clicked);

    return (
        <div className="header">
            <Link to="/">
                <h1>MyPortfolio</h1>
            </Link>
            <div className="hamburger" onClick={handleClick}>
                {clicked ? (
                    <FaTimes size={20} style={{ color: "white" }} />
                ) : (
                    <FaBars size={20} style={{ color: "white" }} />
                )}
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
