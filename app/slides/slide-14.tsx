'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Card, CardContent } from '@/components/ui/card'

export default function Slide14() {
  return (
    <Slide>
      <TooltipProvider>
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
            className="text-[64px] leading-[1.05] font-semibold text-foreground mb-8 text-center"
          >
            Факты → гипотеза → вывод
          </motion.h1>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Про знаменитого сыщика обычно говорят, что он использовал «дедуктивный метод», то есть переходил от общего к частному. Однако это не совсем точно.
                </p>
                <p>
                  <strong className="text-foreground">Его рассуждения часто индуктивны:</strong> по множеству мелких фактов — царапина на руке, тип сапог, следы грязи — он строил общий вывод о профессии или привычках человека.
                </p>
                <p>
                  Холмс как «живая индукция»: собирает частные наблюдения (факты) и формулирует общую гипотезу о преступнике. Затем включается дедукция: из этой гипотезы он выводит конкретные следствия и проверяет их.
                </p>
                <div className="border-t border-border pt-6 mt-6">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-lg text-foreground cursor-help font-semibold">
                        Индукция + дедукция
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>В реальности методы индукции и дедукции часто используются вместе: индукция генерирует гипотезы, дедукция проверяет их следствия</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </TooltipProvider>
    </Slide>
  )
}
