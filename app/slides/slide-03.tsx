'use client'

import { motion } from 'framer-motion'
import Slide from '@/components/Slide'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'

export default function Slide03() {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-5xl"
      >
        <Tabs defaultValue="induction" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="induction" className="text-lg">
              Индукция
            </TabsTrigger>
            <TabsTrigger value="deduction" className="text-lg">
              Дедукция
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="induction">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-3xl text-foreground mb-6">Частное → Общее</h3>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Индукция</strong> — это метод рассуждения, при котором мы переходим от частных наблюдений к общему выводу.
                    </p>
                    <p>
                      В математике это означает: если мы проверили утверждение для нескольких конкретных случаев, мы можем предположить, что оно верно для всех случаев. Однако это лишь предположение — для строгого доказательства используется математическая индукция.
                    </p>
                    <p>
                      В обычной жизни мы постоянно используем индукцию: увидев несколько белых лебедей, мы можем предположить, что все лебеди белые. Однако это предположение может оказаться неверным (в Австралии есть чёрные лебеди).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="deduction">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <Card className="border-secondary/20">
                <CardContent className="p-8">
                  <h3 className="text-3xl text-foreground mb-6">Общее → Частное</h3>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Дедукция</strong> — это строгий логический метод, при котором из общего правила выводятся частные следствия.
                    </p>
                    <p>
                      Если мы знаем общее правило и оно доказано, то все частные случаи, следующие из этого правила, также истинны. Это гарантирует достоверность вывода при истинности посылок.
                    </p>
                    <p>
                      Пример дедуктивного рассуждения: «Все люди смертны. Сократ — человек. Следовательно, Сократ смертен.» Это логически необходимое заключение — если посылки истинны, то вывод не может быть ложным.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </Slide>
  )
}
