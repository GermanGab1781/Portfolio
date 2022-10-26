import { motion } from 'framer-motion';
import React from 'react'

export default function ProjectItem({name,img,url}) {
  const variants = {
    open: { y: 0, opacity: 1},
    closed: { y: 50, opacity: 0}};
  return (
    <motion.li variants={variants} transition={{duration:0.3}} className='flex flex-col border border-red-500'>
      <motion.img className='xl:h-32 xl:w-56 h-32 w-56' src={img} alt="bruh"/>
      <span className='text-white text-3xl'>{name}</span>
      <a className='text-white text-4xl' href={url} target="_blank" rel="noreferrer">See</a>
    </motion.li>
  )
}
