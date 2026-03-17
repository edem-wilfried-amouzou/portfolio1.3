import type { Metadata } from 'next'
import { Syne, Space_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Edem Wilfried Amouzou - Portfolio',
  description: 'Portfolio de Edem Wilfried Amouzou, développeur web spécialisé en Django et React. Découvrez mes projets, compétences et expériences dans le développement frontend.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${spaceMono.variable} font-sans bg-dark-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
