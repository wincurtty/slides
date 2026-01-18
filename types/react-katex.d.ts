declare module 'react-katex' {
  import * as React from 'react'

  export interface MathProps {
    math: string
    errorColor?: string
    throwOnError?: boolean
    renderError?: (error: Error) => React.ReactNode
    children?: React.ReactNode
  }

  export class InlineMath extends React.Component<MathProps> {}
  export class BlockMath extends React.Component<MathProps> {}
}
