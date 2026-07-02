import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ImageGallery from './ImageGallery'

export default function ProjectItem({name,thumbnail,images,urlPage,languages}) {
  const { t, setGalleryOpen } = useAppContext();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const variants = {
    open: { y: 0, opacity: 1},
    closed: { y: 50, opacity: 0}};

  const openGallery = () => {
    setIsGalleryOpen(true);
    setGalleryOpen(true);
  };
  const closeGallery = () => {
    setIsGalleryOpen(false);
    setGalleryOpen(false);
  };

  return (
    <motion.li variants={variants} transition={{duration:0.3}} className='flex flex-col 2xl:w-80 xl:w-64 gap-2 cursor-default text-center text-black dark:text-white'>
      <div className='2xl:w-80 2xl:h-56 xl:w-64 xl:h-40 bg-slate-100 dark:bg-slate-800 rounded-md p-2 cursor-pointer hover:opacity-80 transition-all' onClick={openGallery}>
        <img className='w-full h-full object-contain' src={thumbnail} alt={name}/>
      </div>
      <span className='text-blue-500 2xl:text-4xl text-3xl whitespace-nowrap'>{name}</span>
      {urlPage && (
        <div className='flex flex-row gap-x-2'>
          <a className='text-black dark:text-white 2xl:text-2xl text-xl border border-blue-400 bg-blue-200 dark:bg-slate-800 rounded-sm hover:bg-blue-700 hover:text-white hover:border-blue-700 p-1 w-full transition-all' href={urlPage} target="_blank" rel="noreferrer">{t("view")}</a>
        </div>
      )}
      <div className='flex flex-wrap gap-x-2 m-auto'>
        {languages.map((language,index)=>{
          return(
            <span className='m-auto underline text-md' key={index}>{language}</span>
          )
        })}
      </div>
      {isGalleryOpen && (
        <ImageGallery images={images} onClose={closeGallery} />
      )}
    </motion.li>
  )
}
