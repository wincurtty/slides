'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import { Card, CardContent } from '@/components/ui/card'
import MathFormula from '@/components/MathFormula'

export default function Slide06() {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-4xl"
      >
        <Card>
          <CardContent className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl text-foreground mb-6">Идея метода: принцип домино</h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Представьте бесконечный ряд костяшек домино, выстроенных в линию. Чтобы все костяшки упали, достаточно:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Толкнуть первую костяшку (база индукции)</li>
                  <li>Убедиться, что если падает <MathFormula formula="n" />-я костяшка, то обязательно падает и <MathFormula formula="(n+1)" />-я (индукционный переход)</li>
                </ul>
                <p className="mt-4">
                  Если выполнены оба условия, то все костяшки упадут! Аналогично, если утверждение верно для <MathFormula formula="n=1" inline /> и из верности для <MathFormula formula="n" inline /> следует верность для <MathFormula formula="n+1" inline />, то оно верно для всех натуральных чисел.
                </p>
                <div className="border-t border-border pt-4 mt-6">
                  <p className="text-xl text-foreground font-semibold">
                    Если <MathFormula formula="P(n)" inline /> → <MathFormula formula="P(n+1)" inline />
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Это ядро метода математической индукции: переход от n к n+1 должен быть всегда возможен
                  </p>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Slide>
  )
}
