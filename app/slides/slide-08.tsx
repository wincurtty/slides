'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import FormulaCard from '@/components/FormulaCard'
import MathFormula from '@/components/MathFormula'
import { Card, CardContent } from '@/components/ui/card'

export default function Slide08() {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-4xl space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FormulaCard formula="1 + 2 + 3 + \\ldots + n = \\frac{n(n+1)}{2}" />
        </motion.div>

        <Card>
          <CardContent className="p-8">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Задача:</strong> Доказать, что сумма первых <MathFormula formula="n" inline /> натуральных чисел равна <MathFormula formula="\\frac{n(n+1)}{2}" inline />.
              </p>
              <p>
                Это классическая задача, которая иллюстрирует метод математической индукции. Формула была известна ещё в древности (по легенде, Гаусс открыл её в детстве), но строгое доказательство даётся именно методом математической индукции.
              </p>
              <p>
                Мы будем доказывать это утверждение пошагово, следуя формальной схеме метода: сначала проверим базу для <MathFormula formula="n=1" inline />, затем докажем индукционный переход от <MathFormula formula="n" inline /> к <MathFormula formula="n+1" inline />.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Slide>
  )
}
