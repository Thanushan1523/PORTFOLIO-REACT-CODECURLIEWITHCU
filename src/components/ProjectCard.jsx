import React from 'react';
import "./ProjectCardStyles.css";

import WorkCard from './WorkCard';
import ProjectData from './Data';


const ProjectCard = () => {
  return (
    <div className="work-container"> 
    <h1 className='project-heading'>Projects 
        </h1>
        <div className='project-container'>
            
          {ProjectData.map((project,index) =>(<WorkCard
            key={index}
            imgsrc={project.imgsrc}
            text={project.text}
            view={project.view}
            />
          ))}
            
            </div></div>
  )
}

export default ProjectCard;