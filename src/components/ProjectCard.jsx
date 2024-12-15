import React from 'react'
import "./ProjectCardStyles.css"
// import "./Test.css"
import pro1 from "../assets/project1.jpg"
import { NavLink } from 'react-router-dom'
import WorkCard from './WorkCard'

const ProjectCard = () => {
  return (
    <div className="work-container"> 
    <h1 className='project-heading'>hddyybyytt
        </h1>
        <div className='project-container'>
            
           <WorkCard/>
            
            </div></div>
  )
}

export default ProjectCard;