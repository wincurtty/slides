'use client'

import { InlineMath, BlockMath } from 'react-katex'
import { motion } from 'framer-motion'

interface MathFormulaProps {
  formula: string
  inline?: boolean
  delay?: number
}

export default function MathFormula({ formula, inline = false, delay = 0 }: MathFormulaProps) {
  const MathComponent = inline ? InlineMath : BlockMath

  // Ensure formula is a single string without any whitespace issues
  const cleanFormula = formula.trim().replace(/\s+/g, ' ')

  try {
    if (inline) {
      return (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay }}
          className="inline-block"
          style={{ verticalAlign: 'baseline' }}
        >
          <MathComponent math={cleanFormula} errorColor="#ef4444" throwOnError={false} />
        </motion.span>
      )
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="my-4 w-full overflow-x-auto"
      >
        <div className="flex justify-center items-center">
          <MathComponent math={cleanFormula} errorColor="#ef4444" throwOnError={false} />
        </div>
      </motion.div>
    )
  } catch (error) {
    console.error('KaTeX parsing error:', error, 'Formula:', cleanFormula)
    return <span className="text-red-500">[Formula Error]</span>
  }
}
