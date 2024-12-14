
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
const Pro = () => {
  return (
    <div>
          <NavBar/>
          <Hero  heading="PROJECTS" text="this is few projects" />
            <ProjectCard/>
            <Footer/>
            
    </div>
    
  )
}

export default Pro;