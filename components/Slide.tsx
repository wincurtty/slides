'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideProps {
  children: ReactNode
  className?: string
}

const slideVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export default function Slide({ children, className = '' }: SlideProps) {
  return (
    <motion.div
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full min-h-screen flex flex-col justify-center items-center p-8 md:p-12 lg:p-16 xl:p-24 ${className}`}
    >
      {children}
    </motion.div>
  )
}
