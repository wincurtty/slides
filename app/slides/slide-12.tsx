'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import FormulaCard from '@/components/FormulaCard'
import { Card, CardContent } from '@/components/ui/card'
import MathFormula from '@/components/MathFormula'

export default function Slide12() {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-4xl space-y-6"
      >
        <FormulaCard formula="1 + 3 + 5 + \\ldots + (2n-1) = n^2" />
        
        <Card>
          <CardContent className="p-8">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Второй пример:</strong> Докажем, что сумма первых <MathFormula formula="n" inline /> нечётных чисел равна <MathFormula formula="n^2" inline />.
              </p>
              <p>
                Это утверждение имеет красивую геометрическую интерпретацию: если выстроить <MathFormula formula="n" inline /> нечётных чисел <MathFormula formula="1, 3, 5, \\ldots, (2n-1)" inline />, их сумма всегда образует полный квадрат размера <MathFormula formula="n \\times n" inline />.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg my-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Быстрая проверка:</strong> для n=1: 1=1²; для n=2: 1+3=4=2²; для n=3: 1+3+5=9=3²
                </p>
              </div>
              <p>
                Доказательство по математической индукции проходит аналогично первому примеру: проверяем базу для <MathFormula formula="n=1" inline />, затем доказываем переход от <MathFormula formula="n" inline /> к <MathFormula formula="n+1" inline />, добавляя следующее нечётное число <MathFormula formula="2n+1" inline /> к сумме.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Slide>
  )
}
