import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import KaTeXLoader from '@/components/KaTeXLoader'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-machina',
})

export const metadata: Metadata = {
  title: 'Индукция и Дедукция: Математическая Индукция',
  description: 'Презентация о методах индукции и дедукции для 11 класса',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <KaTeXLoader />
        {children}
      </body>
    </html>
  )
}
