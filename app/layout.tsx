import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AprenDev — Aprende. Codea. Construye tu futuro.',
  description:
    'La app gamificada para aprender programación, IA y tecnologías modernas. Lecciones cortas, rachas diarias, XP y rutas de carrera. Como Duolingo, para developers.',
  keywords: ['programación', 'aprender a programar', 'JavaScript', 'React', 'IA', 'AprenDev'],
  openGraph: {
    title: 'AprenDev — Aprende. Codea. Construye tu futuro.',
    description: 'La app gamificada para aprender programación. Lecciones rápidas, desafíos diarios y XP.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es' className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className='antialiased'>{children}</body>
    </html>
  )
}
