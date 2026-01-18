'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Slide01 from './slides/slide-01'
import Slide02 from './slides/slide-02'
import Slide03 from './slides/slide-03'
import Slide04 from './slides/slide-04'
import Slide05 from './slides/slide-05'
import Slide06 from './slides/slide-06'
import Slide07 from './slides/slide-07'
import Slide08 from './slides/slide-08'
import Slide09 from './slides/slide-09'
import Slide10 from './slides/slide-10'
import Slide11 from './slides/slide-11'
import Slide12 from './slides/slide-12'
import Slide13 from './slides/slide-13'
import Slide14 from './slides/slide-14'
import Slide15 from './slides/slide-15'

const TOTAL_SLIDES = 15

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
      } else if (e.key === 'ArrowRight' && currentSlide < TOTAL_SLIDES - 1) {
        setCurrentSlide(currentSlide + 1)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentSlide])

  const nextSlide = () => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <Slide01 />
      case 1:
        return <Slide02 />
      case 2:
        return <Slide03 />
      case 3:
        return <Slide04 />
      case 4:
        return <Slide05 />
      case 5:
        return <Slide06 />
      case 6:
        return <Slide07 />
      case 7:
        return <Slide08 />
      case 8:
        return <Slide09 />
      case 9:
        return <Slide10 />
      case 10:
        return <Slide11 />
      case 11:
        return <Slide12 />
      case 12:
        return <Slide13 />
      case 13:
        return <Slide14 />
      case 14:
        return <Slide15 />
      default:
        return <Slide01 />
    }
  }

  return (
    <main className="relative w-full min-h-screen bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderSlide()}
        </motion.div>
      </AnimatePresence>
      <Navigation
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onPrevious={previousSlide}
        onNext={nextSlide}
      />
    </main>
  )
}
