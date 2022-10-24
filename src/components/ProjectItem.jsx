import { motion } from 'framer-motion';
import React from 'react'

export default function ProjectItem({name,img}) {
  const variants = {
    open: { y: 0, opacity: 1, transition: {y: { stiffness: 1000, velocity: -100 }}},
    closed: { y: 50, opacity: 0, transition: {y: { stiffness: 1000 }}}};
  return (
    <motion.li variants={variants} className='bg-green-400 border border-red-500 h-40 w-96 text-white text-6xl'>
      {name}
      <img className='h-32 w-96' src={img} alt="bruh"/>
    </motion.li>
  )
}
