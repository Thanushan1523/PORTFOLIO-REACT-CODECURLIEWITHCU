import React from 'react'
import "./ProjectCardStyles.css"


import { NavLink } from 'react-router-dom'

const WorkCard = ({imgsrc,text,title,view}) => {
  return (
    
            <div className='project-card'>
                <img src={imgsrc} alt="ff"/>
                <h2 className='project-title'>{title}</h2>
                <div className='project-details'>
                <p>{text}</p>
                <div className='pro-btns'>
                    <NavLink to="url.com" className="btn">view</NavLink>
                    <NavLink to={view} className="btn">source</NavLink>
                </div>
                </div>
            </div>
           
  )
}

export default WorkCard;