import { motion } from 'framer-motion';
import React from 'react'

export default function ProjectItem({name,img,urlPage,urlCode,languages}) {
  const variants = {
    open: { y: 0, opacity: 1},
    closed: { y: 50, opacity: 0}};
  return (
    <motion.li variants={variants} transition={{duration:0.3}} className='flex flex-col 2xl:w-80 xl:w-64 gap-2 cursor-default text-center'>
      <img className='2xl:w-80 2xl:h-56 xl:w-64 xl:h-40' src={img} alt="bruh"/>
      <span className='text-blue-500 2xl:text-4xl text-3xl whitespace-nowrap'>{name}</span>
      <div className='flex flex-row gap-x-2'>
        <a className='text-white 2xl:text-2xl text-xl border rounded-sm hover:border-blue-500 hover:text-slate-400 p-1 w-1/2 transition-all' href={urlPage} target="_blank" rel="noreferrer">View</a>
        <a className='text-white 2xl:text-2xl text-xl border rounded-sm hover:border-blue-500 hover:text-slate-400 p-1 w-1/2 transition-all' href={urlCode} target="_blank" rel="noreferrer">Code</a>
      </div>
      <div className='flex flex-wrap gap-x-2 m-auto'>
        {languages.map((language,index)=>{
          return(
            <span className='m-auto underline text-md' key={index}>{language}</span>
          )
        })}
      </div>
    </motion.li>
  )
}
