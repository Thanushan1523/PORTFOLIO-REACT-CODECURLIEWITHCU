import React from 'react'
import "./ProjectCardStyles.css"
// import "./Test.css"
import pro1 from "../assets/project1.jpg"
import { NavLink } from 'react-router-dom'

const ProjectCard = () => {
  return (
    <div className="work-container"> 
    <h1 className='project-heading'>hddyybyytt
        </h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={pro1} alt="ff"/>
                <h2 className='project-title'>project tittle</h2>
                <div className='project-details'>
                <p>This is texruuruyruy utiiiiiiiiiiiiiiii toooooooooooooooooooo tooooooooooooooo uttttttt utttttttttttttttttttttttttttttoott</p>
                <div className='pro-btns'>
                    <NavLink to="url.com" className="btn">view</NavLink>
                    <NavLink to="url.com" className="btn">source</NavLink>
                </div>
                </div>
            </div>
            </div></div>
  )
}

export default ProjectCard;