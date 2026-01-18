'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavigationProps {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
}

export default function Navigation({ currentSlide, totalSlides, onPrevious, onNext }: NavigationProps) {
  const canGoPrevious = currentSlide > 0
  const canGoNext = currentSlide < totalSlides - 1

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem'
      }}
    >
      <Button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        variant="outline"
        size="icon"
        className={cn(
          "h-12 w-12 rounded-full",
          !canGoPrevious && "opacity-30 cursor-not-allowed"
        )}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        onClick={onNext}
        disabled={!canGoNext}
        variant="outline"
        size="icon"
        className={cn(
          "h-12 w-12 rounded-full",
          !canGoNext && "opacity-30 cursor-not-allowed"
        )}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}
