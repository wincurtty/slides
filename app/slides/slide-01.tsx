'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import { Badge } from '@/components/ui/badge'

export default function Slide01() {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Badge variant="outline" className="mb-8 uppercase tracking-widest">
            Mathematical Thinking
          </Badge>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[64px] leading-[1.05] font-semibold text-foreground"
        >
          Метод математической
          <br />
          индукции и дедукции
        </motion.h1>
      </motion.div>
    </Slide>
  )
}
