import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aprendev — Aprende a programar, un día a la vez',
  description:
    'La app gamificada para aprender programación web, IA y más. Como Duolingo, pero para devs. Lecciones cortas, rachas diarias, XP y rutas de aprendizaje.',
  keywords: ['programación', 'aprender a programar', 'web development', 'JavaScript', 'React', 'IA', 'machine learning'],
  openGraph: {
    title: 'Aprendev — Aprende a programar, un día a la vez',
    description: 'La app gamificada para aprender programación. Lecciones cortas, rachas y XP.',
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
