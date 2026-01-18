'use client'

import { useEffect, useState } from 'react'

// Ensure KaTeX CSS is loaded on the client side
export default function KaTeXLoader() {
  const [cssLoaded, setCssLoaded] = useState(false)

  useEffect(() => {
    // Check if KaTeX CSS is already loaded
    const existingLink = document.querySelector('link[href*="katex"]')
    
    if (existingLink) {
      setCssLoaded(true)
      return
    }

    // Create and add link tag for KaTeX CSS from CDN
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css'
    link.integrity = 'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV'
    link.crossOrigin = 'anonymous'
    
    link.onload = () => {
      setCssLoaded(true)
    }
    
    link.onerror = () => {
      console.error('Failed to load KaTeX CSS from CDN')
      // Fallback: try to load from local node_modules
      const fallbackLink = document.createElement('link')
      fallbackLink.rel = 'stylesheet'
      fallbackLink.href = '/_next/static/css/katex.css'
      document.head.appendChild(fallbackLink)
      setCssLoaded(true)
    }
    
    document.head.appendChild(link)
  }, [])

  return null
}
