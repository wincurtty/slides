'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import MathFormula from '@/components/MathFormula'
import { Card, CardContent } from '@/components/ui/card'

export default function Slide09() {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-4xl space-y-6"
      >
        <Card className="border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-3xl text-foreground mb-6">Шаг 1: База индукции</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Проверим утверждение для <MathFormula formula="n = 1" inline /> — самого маленького натурального числа.
              </p>
              <div className="bg-muted/30 p-6 rounded-lg my-4">
                <p className="text-xl text-foreground mb-2">Левая часть:</p>
                <MathFormula formula="1" />
                <p className="text-xl text-foreground mb-2 mt-4">Правая часть:</p>
                <MathFormula formula="\\frac{1 \\cdot (1+1)}{2} = \\frac{1 \\cdot 2}{2} = \\frac{2}{2} = 1" />
              </div>
              <p className="text-lg text-foreground font-semibold mt-4">
                ✓ Равенство верно: <MathFormula formula="1 = 1" inline />
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                База индукции выполнена! Мы проверили, что формула работает для n=1. Это наш «толчок первой костяшки домино».
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Slide>
  )
}
