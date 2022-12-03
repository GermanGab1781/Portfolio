import { motion } from 'framer-motion'
import ProjectItem from './ProjectItem'
import React from 'react'
import { projectsData } from '../data/projectsData'

export default function Projects() {
  const variants = {
    open: {transition:{staggerChildren:0.1, delayChildren:0.2}},
    closed: {}
  };
  return (
    <motion.ul variants={variants} className='flex flex-row gap-10 place-content-center flex-wrap xl:my-16 px-10 w-full md:mb-0 mb-10'>
      {projectsData.map((project, index) =>{
        return(
          <ProjectItem key={index} name={project.name} img={project.img} urlPage={project.urlPage} urlCode={project.urlCode} languages={project.languages}/>
        )
      })}
    </motion.ul>
  )
}
