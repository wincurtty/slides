'use client'

import { motion } from 'framer-motion'

interface MathFormulaProps {
  formula: string
  inline?: boolean
  delay?: number
}

// Простая функция для преобразования LaTeX-нотации в читаемый текст
function latexToText(latex: string): string {
  return latex
    .replace(/\\mathbb\{N\}/g, 'ℕ')
    .replace(/\\mathbb\{R\}/g, 'ℝ')
    .replace(/\\mathbb\{Z\}/g, 'ℤ')
    .replace(/\\mathbb\{Q\}/g, 'ℚ')
    .replace(/\\in/g, ' ∈ ')
    .replace(/\\notin/g, ' ∉ ')
    .replace(/\\leq/g, ' ≤ ')
    .replace(/\\geq/g, ' ≥ ')
    .replace(/\\neq/g, ' ≠ ')
    .replace(/\\approx/g, ' ≈ ')
    .replace(/\\ldots/g, '…')
    .replace(/\\cdots/g, '⋯')
    .replace(/\\times/g, ' × ')
    .replace(/\\div/g, ' ÷ ')
    .replace(/\\pm/g, ' ± ')
    .replace(/\\sum/g, '∑')
    .replace(/\\prod/g, '∏')
    .replace(/\\int/g, '∫')
    .replace(/\\infty/g, '∞')
    .replace(/\\pi/g, 'π')
    .replace(/\\theta/g, 'θ')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\gamma/g, 'γ')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\sqrt\[([^\]]+)\]\{([^}]+)\}/g, '^($1)√($2)')
    .replace(/\\^(\d+)/g, '^$1')
    .replace(/\{([^}]+)\}/g, '$1')
    .replace(/\\/g, '')
    .trim()
}

export default function MathFormula({ formula, inline = false, delay = 0 }: MathFormulaProps) {
  const cleanFormula = formula.trim().replace(/\s+/g, ' ')
  const textFormula = latexToText(cleanFormula)

  if (inline) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay }}
        className="inline font-mono italic mx-1"
      >
        {textFormula}
      </motion.span>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="my-4 w-full flex justify-center items-center"
    >
      <div className="font-mono italic text-lg">
        {textFormula}
      </div>
    </motion.div>
  )
}
