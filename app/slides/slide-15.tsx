'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import { Card, CardContent } from '@/components/ui/card'

export default function Slide15() {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-4xl space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[64px] leading-[1.05] font-semibold text-foreground text-center"
        >
          Логика — это инструмент
        </motion.h1>

        <Card>
          <CardContent className="p-8">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Математическая индукция и дедукция — это не просто методы решения задач. Это инструменты мышления, которые помогают структурировать рассуждения и делать строгие выводы.
              </p>
              <p>
                <strong className="text-foreground">Индукция</strong> помогает нам формулировать гипотезы на основе наблюдений. <strong className="text-foreground">Дедукция</strong> позволяет проверять эти гипотезы и выводить из них следствия. <strong className="text-foreground">Математическая индукция</strong> даёт строгое доказательство для утверждений о бесконечном множестве натуральных чисел.
              </p>
              <p>
                Эти методы применяются не только в математике, но и в программировании, науке, логике и даже в повседневной жизни. Умение структурированно мыслить и доказывать утверждения — это навык, который пригодится в любой интеллектуальной деятельности.
              </p>
              <div className="border-t border-border pt-6 mt-6 text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Индукция · Дедукция · Доказательство
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Slide>
  )
}
