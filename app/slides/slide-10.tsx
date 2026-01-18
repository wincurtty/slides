'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import FormulaCard from '@/components/FormulaCard'
import { Card, CardContent } from '@/components/ui/card'
import MathFormula from '@/components/MathFormula'

export default function Slide10() {
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
            <h2 className="text-3xl text-foreground mb-6">Шаг 2: Индукционный переход</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Индукционное предположение:</strong> Пусть для некоторого <MathFormula formula="n" inline /> верно:
              </p>
              <FormulaCard formula="1 + 2 + \\ldots + n = \\frac{n(n+1)}{2}" />
              <p className="mt-4">
                <strong className="text-foreground">Нам нужно доказать:</strong> Формула верна и для <MathFormula formula="n+1" inline />, то есть:
              </p>
              <div className="bg-muted/30 p-6 rounded-lg my-4">
                <p className="text-lg text-foreground mb-2">Вычисляем сумму до (n+1):</p>
                <MathFormula formula="1 + 2 + \\ldots + n + (n+1)" />
                <p className="text-lg text-foreground mb-2 mt-4">Используем индукционное предположение:</p>
                <MathFormula formula="= \\frac{n(n+1)}{2} + (n+1)" />
              </div>
              <p>
                Теперь нужно привести это к виду <MathFormula formula="\\frac{(n+1)(n+2)}{2}" inline />, чтобы получить формулу для <MathFormula formula="n+1" inline />.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Slide>
  )
}
