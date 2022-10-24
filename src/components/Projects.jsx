import { motion } from 'framer-motion'
import ProjectItem from './ProjectItem'
import React from 'react'
import { projectsData } from '../data/projectsData'

export default function Projects() {
  const variants = {
    open: {transition:{staggerChildren:0.4, delayChildren:0.6}},
    closed: {transition:{duration:1}}};
  return (
    <motion.ul variants={variants} className='flex flex-row flex-wrap place-content-evenly gap-y-12'>
      {projectsData.map((project, index) =>{
        return(
          <ProjectItem  key={index} name={project.name} img={project.img}/>
        )
      })}
    </motion.ul>
  )
}
