import React from 'react'
import { projectsInfo } from './data-projects'
import Padding from '../components/Padding'

const Projects = () => {

    const projects = projectsInfo.map(project => 

        <div key={project.id}>
            <img src={project.image} className="image."/>
            <h2>{project.heading}</h2>
            {project.information}
            <Padding padding="40px"/>
        </div>
    
    )

  return (
    <div>
        <h1 className="section-heading">My Projects</h1>
        <div className="card-grid">
            {projects}
        </div>
    </div>
  )
}

export default Projects