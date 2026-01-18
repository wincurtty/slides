'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import { Separator } from '@/components/ui/separator'

export default function Slide02() {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[64px] leading-[1.05] font-semibold text-foreground mb-8"
        >
          Математика
          <br />
          не угадывает
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Separator className="my-8" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="space-y-4 text-left mt-12"
        >
          <p className="text-lg text-foreground leading-relaxed">
            Математика отличается от других наук строгостью своих методов. В математике мы не можем просто наблюдать явления и делать предположения — каждое утверждение должно быть строго доказано.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            В отличие от естественных наук, где гипотезы проверяются экспериментами, математика опирается на логику и дедукцию. Если мы видим, что формула работает для первых десяти чисел, это ещё не доказательство — нужно доказать, что она верна для всех чисел.
          </p>
          <p className="text-lg text-foreground leading-relaxed mt-6">
            Именно для этого и существуют методы математической индукции и дедукции — инструменты строгого логического доказательства, которые позволяют перейти от отдельных примеров к всеобщим утверждениям.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  )
}
