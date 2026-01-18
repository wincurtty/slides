'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export default function Slide13() {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-4xl space-y-6"
      >
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="outline" className="text-lg px-4 py-2">
            Математика
          </Badge>
          <Badge variant="outline" className="text-lg px-4 py-2">
            Информатика
          </Badge>
          <Badge variant="outline" className="text-lg px-4 py-2">
            Наука
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl text-foreground mb-4">В математике</h3>
              <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed">
                <li>• Доказательство формул и тождеств</li>
                <li>• Доказательство свойств последовательностей</li>
                <li>• Доказательства делимости чисел</li>
                <li>• Доказательства неравенств</li>
                <li>• Теоремы о натуральных числах</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Метод индукции — один из основных инструментов доказательства в теории чисел и комбинаторике.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl text-foreground mb-4">В информатике</h3>
              <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed">
                <li>• Доказательство корректности алгоритмов</li>
                <li>• Анализ сложности рекурсивных функций</li>
                <li>• Доказательства свойств структур данных</li>
                <li>• Верификация программ</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Каждый рекурсивный алгоритм можно проанализировать через призму математической индукции: база — простой случай, шаг — рекурсивный вызов.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </Slide>
  )
}
