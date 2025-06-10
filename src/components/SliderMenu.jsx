import { motion } from 'framer-motion'
import React from 'react'
import Projects from './Projects'


export default function SliderMenu({handleClose , state}) {

  const variants = {
    open: {transition:{delayChildren:0.4}},
    closed: {},
    elseInitial: {opacity:0},
    elseAnimate: {opacity:1}
  };

  return (
    <motion.div initial={"elseInitial"} animate={"elseAnimate"} variants={variants} transition={{delay:3, duration:0.3}} className={state
      ?"fixed bottom-0 w-screen h-full text-center bg-black transition-all ease-in-out duration-1000 md:overflow-y-hidden overflow-y-auto"
      :"fixed bottom-0 w-screen h-16 text-center bg-blue-700 transition-all ease-in-out duration-1000"
    }>
      <button className={state ?'xl:text-3xl xl:mt-2 p-1 mt-10 transition-all font-semibold' :'xl:text-3xl text-2xl xl:mt-2 p-1 font-semibold transition-all animate-pulse'} onClick={handleClose}>{state ? "Go back"  :"My projects" }</button>
      <motion.div className='mt-10 ' animate={state ? "open" : "closed"} variants={variants}>
        <Projects/>
      </motion.div>
    </motion.div>
  )
}
