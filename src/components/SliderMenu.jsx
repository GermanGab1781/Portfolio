import { motion } from 'framer-motion'
import React from 'react'
import Projects from './Projects'


export default function SliderMenu({handleClose , state}) {

  const variants = {
    open: {transition:{staggerChildren:0.4, delayChildren:0.6}},
    closed: {transition:{duration:1}}};
  return (
    <div className={state
      ?"fixed bottom-0 w-screen h-screen text-center bg-black transition-all ease-in-out duration-1000"
      :"fixed bottom-0 w-screen h-10 text-center bg-blue-400 transition-all ease-in-out duration-1000"
    }>
      <button className='bg-white' onClick={handleClose}>{state ?"Go back"  :"My projects" }</button>
      <motion.div className='mt-10' animate={state ? "open" : "closed"} variants={variants}>
        <Projects/>
      </motion.div>
    </div>
  )
}
