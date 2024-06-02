import React from 'react'
import { projectsInfo } from './data-projects'

const Projects = () => {

    const projects = projectsInfo.map(project => 

        <div key={project.id}>
            {project.information}
        </div>
    
    )

  return (
    <div>
        <h1>My Projects</h1>
        <div className="card-grid">
            {projects}
        </div>
    </div>
  )
}

export default Projects