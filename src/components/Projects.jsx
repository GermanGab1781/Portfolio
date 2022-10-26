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
    <motion.ul variants={variants} className='flex flex-row flex-wrap mt-16 w-screen place-content-evenly'>
      {projectsData.map((project, index) =>{
        return(
          <ProjectItem key={index} name={project.name} img={project.img} url={project.url}/>
        )
      })}
    </motion.ul>
  )
}
