import React from 'react'
import "./ProjectCardStyles.css"
// import "./Test.css"
import pro1 from "../assets/project1.jpg"
import { NavLink } from 'react-router-dom'

const WorkCard = () => {
  return (
    
            <div className='project-card'>
                <img src={props.imgsrc} alt="ff"/>
                <h2 className='project-title'>project tittle</h2>
                <div className='project-details'>
                <p>This is texruuruyruy utiiiiiiiiiiiiiiii toooooooooooooooooooo tooooooooooooooo uttttttt utttttttttttttttttttttttttttttoott</p>
                <div className='pro-btns'>
                    <NavLink to="url.com" className="btn">view</NavLink>
                    <NavLink to="url.com" className="btn">source</NavLink>
                </div>
                </div>
            </div>
           
  )
}

export default WorkCard;