'use client'

import { useEffect, useState } from 'react'
import katex from 'katex'
import { motion } from 'framer-motion'

interface MathFormulaProps {
  formula: string
  inline?: boolean
  delay?: number
}

export default function MathFormula({ formula, inline = false, delay = 0 }: MathFormulaProps) {
  const [html, setHtml] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Ensure formula is a single string without any whitespace issues
    const cleanFormula = formula.trim().replace(/\s+/g, ' ')

    try {
      const rendered = katex.renderToString(cleanFormula, {
        throwOnError: false,
        errorColor: '#ef4444',
        displayMode: !inline,
      })
      setHtml(rendered)
      setError(null)
    } catch (err) {
      console.error('KaTeX parsing error:', err, 'Formula:', cleanFormula)
      setError(`[Formula Error: ${cleanFormula}]`)
      setHtml('')
    }
  }, [formula, inline])

  if (error) {
    return <span className="text-red-500">{error}</span>
  }

  if (!html) {
    return null
  }

  if (inline) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay }}
        className="inline-block"
        style={{ verticalAlign: 'baseline' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="my-4 w-full overflow-x-auto"
    >
      <div 
        className="flex justify-center items-center"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </motion.div>
  )
}
