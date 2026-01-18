'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import MathFormula from '@/components/MathFormula'
import { Card, CardContent } from '@/components/ui/card'

export default function Slide05() {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[64px] leading-[1.05] font-semibold text-foreground mb-8 text-center"
        >
          Метод доказательства
          <br />
          для всех <MathFormula formula="n \\in \\mathbb{N}" inline />
        </motion.h1>
        
        <Card className="mt-8">
          <CardContent className="p-8">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Математическая индукция</strong> — это строгий метод доказательства утверждений о всех натуральных числах <MathFormula formula="1, 2, 3, \\ldots" inline />.
              </p>
              <p>
                В отличие от обычной индукции (наблюдение → предположение), математическая индукция даёт строгое доказательство. Она позволяет доказать, что если утверждение верно для числа <MathFormula formula="n" inline />, то оно верно и для <MathFormula formula="n+1" inline />, и таким образом распространить истинность на все натуральные числа.
              </p>
              <p>
                Это не догадка и не предположение — это логически строгое доказательство, основанное на аксиомах натуральных чисел. Если мы докажем базу индукции и индукционный переход, то утверждение автоматически будет верно для всех <MathFormula formula="n" inline />.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Slide>
  )
}
