'use client'

import { Card, CardContent } from '@/components/ui/card'
import MathFormula from './MathFormula'

interface FormulaCardProps {
  formula: string
  inline?: boolean
}

export default function FormulaCard({ formula, inline = false }: FormulaCardProps) {
  return (
    <Card className="border-border/50 bg-card/50">
      <CardContent className="p-6">
        <MathFormula formula={formula} inline={inline} />
      </CardContent>
    </Card>
  )
}
