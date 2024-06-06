import React from 'react'
import { projectsInfo } from './data-projects'
import Padding from '../components/Padding'


const Projects = () => {


    const projects = projectsInfo.map(project => 

        <div key={project.id} className="projects">
            <img src={project.image} className="project-image"/>
            <h2 className="margins">{project.heading}</h2>
            <div className="margins">{project.information}</div>
            {/* <Padding padding="15px"/> */}
            <a className="live-site" href={project.link} target="_blank">Check Live Site &#8599;</a>
        </div>
    
    )

  return (
    <div>
        <h1 className="section-heading">My Projects</h1>
        <h3>(Outside of school)</h3>
        <Padding padding="25px"/>
        <div className="card-grid-triple">
            {projects}
        </div>
    </div>
  )
}

export default Projects