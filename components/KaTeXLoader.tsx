'use client'

import { useEffect } from 'react'

// Ensure KaTeX CSS is loaded on the client side
export default function KaTeXLoader() {
  useEffect(() => {
    // Check if KaTeX CSS is already loaded
    const existingLink = document.querySelector('link[href*="katex"]')
    
    if (!existingLink) {
      // Create and add link tag for KaTeX CSS
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css'
      link.integrity = 'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV'
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    }
  }, [])

  return null
}
