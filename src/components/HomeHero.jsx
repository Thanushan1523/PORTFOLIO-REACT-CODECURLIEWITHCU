import React from 'react'
import "./HomeHeroStyles.css"
import introImage from "../assets/profil.png"
import { Link } from 'react-router-dom'


const HomeHero = () => {
  return (
    <div className='hero'>HomeHero
    <div className='mask'>
        <img className='intro-img' src={introImage} alt="IntroImage">
        </img>
        </div>
        <div className='content'>
            <p>Hi Iam a software developer</p>
            <h1> React Developer</h1> 
            <Link to="/projects" className='btn'> Projects </Link>
            <Link to="/contact" className='btn-light'> Contact</Link>

        </div>
        </div>
  )
}

export default HomeHero;