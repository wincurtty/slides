'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import { Card, CardContent } from '@/components/ui/card'
import MathFormula from '@/components/MathFormula'

export default function Slide07() {
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
            <h2 className="text-3xl text-foreground mb-8">Формальная схема метода</h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="border-l-4 border-primary pl-6"
              >
                <div className="flex items-start gap-4 mb-2">
                  <span className="text-2xl font-semibold text-foreground">1.</span>
                  <div className="flex-1">
                    <p className="text-xl text-foreground font-semibold mb-2">База индукции</p>
                    <p className="text-lg text-muted-foreground mb-2">
                      Доказать, что <MathFormula formula="P(1)" inline /> истинно
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Проверяем утверждение для начального значения (обычно n=1 или n=0). Это «толчок первой костяшки домино».
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="border-l-4 border-primary pl-6"
              >
                <div className="flex items-start gap-4 mb-2">
                  <span className="text-2xl font-semibold text-foreground">2.</span>
                  <div className="flex-1">
                    <p className="text-xl text-foreground font-semibold mb-2">Индукционное предположение</p>
                    <p className="text-lg text-muted-foreground mb-2">
                      Пусть для некоторого <MathFormula formula="n" inline /> верно <MathFormula formula="P(n)" inline />
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Предполагаем, что утверждение уже доказано для некоторого произвольного n. Это «допускаем, что n-я костяшка упала».
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="border-l-4 border-primary pl-6"
              >
                <div className="flex items-start gap-4 mb-2">
                  <span className="text-2xl font-semibold text-foreground">3.</span>
                  <div className="flex-1">
                    <p className="text-xl text-foreground font-semibold mb-2">Индукционный шаг</p>
                    <p className="text-lg text-muted-foreground mb-2">
                      Доказать, что <MathFormula formula="P(n) \\Rightarrow P(n+1)" inline />
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Используя предположение о верности P(n), доказываем, что верно и P(n+1). Это «если упала n-я, то упадёт и (n+1)-я костяшка».
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="border-l-4 border-primary pl-6 mt-6"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-semibold text-foreground">✓</span>
                  <div className="flex-1">
                    <p className="text-xl text-foreground font-semibold">
                      Вывод: <MathFormula formula="P(n)" inline /> верно для всех <MathFormula formula="n \\in \\mathbb{N}" inline />
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Если выполнены все три шага, то по принципу математической индукции утверждение верно для всех натуральных чисел.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Slide>
  )
}
