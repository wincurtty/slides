'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import FormulaCard from '@/components/FormulaCard'
import { Card, CardContent } from '@/components/ui/card'
import MathFormula from '@/components/MathFormula'

export default function Slide11() {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-4xl space-y-6"
      >
        <Card>
          <CardContent className="p-8">
            <h2 className="text-3xl text-foreground mb-6">Завершение индукционного шага</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Преобразуем выражение <MathFormula formula="\\frac{n(n+1)}{2} + (n+1)" inline />:
              </p>
              <div className="bg-muted/30 p-6 rounded-lg my-4 space-y-3">
                <MathFormula formula="\\frac{n(n+1)}{2} + (n+1) = \\frac{n(n+1) + 2(n+1)}{2}" />
                <MathFormula formula="= \\frac{(n+1)(n + 2)}{2}" />
              </div>
              <p className="text-lg text-foreground font-semibold mt-4">
                ✓ Получили формулу для <MathFormula formula="n+1" inline />: <MathFormula formula="\\frac{(n+1)(n+2)}{2}" inline />
              </p>
              <p>
                Это именно та формула, которую мы ожидали! Если подставить <MathFormula formula="n+1" inline /> вместо <MathFormula formula="n" inline /> в исходную формулу <MathFormula formula="\\frac{n(n+1)}{2}" inline />, получим <MathFormula formula="\\frac{(n+1)(n+2)}{2}" inline />.
              </p>
              <div className="border-t border-border pt-4 mt-6">
                <p className="text-xl text-foreground font-semibold">
                  Индукционный переход выполнен!
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Мы доказали: если формула верна для n, то она верна и для n+1. Это означает, что «если упала n-я костяшка, то упадёт и (n+1)-я».
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Slide>
  )
}
