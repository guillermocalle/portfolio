import React from 'react'
import SectionTitle from './SectionTitle'
import ProjectItem from './ProjectItem'
import projects from '../data/projects'

function Projects() {
  return (
    <div className='py-12'>
      <SectionTitle id='projects'>Proyectos</SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {projects.map(project => (
          <ProjectItem
            key={project.title}
            image={project.image}
            title={project.title}
            tech={project.tech}
            linkdemo={project.linkdemo}
            linkgithub={project.linkgithub}
          ></ProjectItem>
        ))}
      </div>
    </div>
  )
}

export default Projects