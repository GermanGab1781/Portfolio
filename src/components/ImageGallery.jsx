import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SWIPE_THRESHOLD = 50

export default function ImageGallery({ images, startIndex = 0, onClose }) {
  const [[index, direction], setIndex] = useState([startIndex, 0])
  const hasMultiple = images.length > 1

  const prev = (e) => {
    e && e.stopPropagation()
    setIndex(([i]) => [(i - 1 + images.length) % images.length, -1])
  }
  const next = (e) => {
    e && e.stopPropagation()
    setIndex(([i]) => [(i + 1) % images.length, 1])
  }

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = Math.abs(offset.x) * velocity.x
    if (offset.x < -SWIPE_THRESHOLD || swipe < -1000) {
      next()
    } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
      prev()
    }
  }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : dir < 0 ? -300 : 0, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : dir < 0 ? 300 : 0, opacity: 0 })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-hidden" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white text-3xl leading-none" onClick={onClose} aria-label="Close">&times;</button>

      {hasMultiple && (
        <button className="absolute left-4 text-white text-4xl select-none px-2 hover:text-blue-400 transition-all hidden sm:block" onClick={prev} aria-label="Previous">&#8249;</button>
      )}

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25 }}
          drag={hasMultiple ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={handleDragEnd}
          className="max-h-[85vh] max-w-[90vw] rounded-md shadow-lg touch-pan-y"
          src={images[index]}
          alt=""
          onClick={(e) => e.stopPropagation()}
        />
      </AnimatePresence>

      {hasMultiple && (
        <button className="absolute right-4 text-white text-4xl select-none px-2 hover:text-blue-400 transition-all hidden sm:block" onClick={next} aria-label="Next">&#8250;</button>
      )}

      {hasMultiple && (
        <div className="absolute bottom-4 text-white text-sm">{index + 1} / {images.length}</div>
      )}
    </div>
  )
}
