'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import { Card, CardContent } from '@/components/ui/card'

export default function Slide04() {
  return (
    <Slide>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-primary/20 h-full">
            <CardContent className="p-8">
              <h3 className="text-2xl text-foreground mb-6">Индуктивный пример</h3>
              <div className="space-y-4">
                <p className="text-lg text-foreground">
                  2, 4, 6, 8, 10, 12...
                </p>
                <p className="text-lg text-muted-foreground">
                  Мы замечаем, что все эти числа чётные (оканчиваются на 0, 2, 4, 6 или 8)
                </p>
                <div className="border-t border-border pt-4 mt-4">
                  <p className="text-xl text-foreground font-semibold">
                    → Предполагаем, что все чётные числа делятся на 2
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Это индуктивный вывод: на основе наблюдений частных случаев мы делаем общее предположение
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="border-secondary/20 h-full">
            <CardContent className="p-8">
              <h3 className="text-2xl text-foreground mb-6">Дедуктивный пример</h3>
              <div className="space-y-4">
                <p className="text-lg text-foreground">
                  Все чётные числа делятся на 2
                </p>
                <p className="text-lg text-muted-foreground">
                  Мы знаем, что 2026 — чётное число
                </p>
                <div className="border-t border-border pt-4 mt-4">
                  <p className="text-xl text-foreground font-semibold">
                    → 2026 делится на 2
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Это дедуктивный вывод: из общего правила логически следует частный случай
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Slide>
  )
}
