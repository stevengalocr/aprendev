'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const ROTATING_PHRASES = [
  'un día a la vez.',
  '5 minutos al día.',
  'sin excusas.',
  'como un dev real.',
]

const FLOATING_BADGES = [
  { text: '+10 XP', color: '#4ade80', bg: 'rgba(74,222,128,0.12)', border: 'rgba(74,222,128,0.35)', top: '8%', right: '5%', delay: '0s' },
  { text: '🔥 47 días', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.35)', bottom: '15%', left: '3%', delay: '0.8s' },
  { text: '⚡ Correcto', color: '#06b6d4', bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.35)', top: '40%', right: '3%', delay: '1.4s' },
  { text: '🏆 Nivel 5', color: '#a855f7', bg: 'rgba(168,85,247,0.12)', border: 'rgba(168,85,247,0.35)', top: '25%', left: '2%', delay: '2s' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [phraseIdx, setPhraseIdx] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIdx((i) => (i + 1) % ROTATING_PHRASES.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className='relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden grid-bg'
      style={{ background: 'var(--bg)' }}
    >
      {/* Radial glow top */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse 90% 55% at 50% 20%, rgba(74,222,128,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Floating notification badges */}
      {FLOATING_BADGES.map((b) => (
        <div
          key={b.text}
          className='absolute hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold float'
          style={{
            top: b.top, right: b.right, bottom: b.bottom, left: b.left,
            background: b.bg,
            border: `1px solid ${b.border}`,
            color: b.color,
            animationDelay: b.delay,
          }}
        >
          {b.text}
        </div>
      ))}

      {/* Content */}
      <div
        className='relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto'
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* Badge */}
        <div className='badge-green mb-6 flex items-center gap-1.5'>
          <span>🐧</span>
          <span>El Duolingo de los developers — en español</span>
        </div>

        {/* Mascot */}
        <div className='relative mb-4'>
          <div className='float'>
            <Image
              src='/mascot.png'
              alt='Pinguino mascota de Aprendev'
              width={180}
              height={180}
              className='drop-shadow-2xl'
              priority
              onError={(e) => {
                const el = e.target as HTMLImageElement
                el.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🐧</text></svg>'
              }}
            />
          </div>
        </div>

        {/* Headline */}
        <h1
          className='text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-2'
          style={{ color: '#f0f6fc' }}
        >
          Aprende a programar
        </h1>
        <div className='h-14 sm:h-16 md:h-20 flex items-center justify-center mb-4'>
          <h1
            key={phraseIdx}
            className='text-4xl sm:text-5xl md:text-6xl font-black gradient-text'
            style={{
              animation: 'bounceIn 0.4s cubic-bezier(0.68,-0.55,0.265,1.55)',
            }}
          >
            {ROTATING_PHRASES[phraseIdx]}
          </h1>
        </div>

        {/* Sub */}
        <p
          className='text-lg sm:text-xl max-w-2xl mb-3 leading-relaxed'
          style={{ color: '#8b949e' }}
        >
          Lecciones de{' '}
          <span style={{ color: '#f0f6fc', fontWeight: 600 }}>5 minutos</span>.
          Feedback instantáneo. XP, rachas y el pingüino que te{' '}
          <span style={{ color: '#f0f6fc', fontWeight: 600 }}>mira con decepción</span>{' '}
          si no practicas hoy.
        </p>

        {/* The streak phrase - emotional hook */}
        <div
          className='mb-8 px-5 py-3 rounded-xl text-sm font-medium italic'
          style={{
            background: 'rgba(245,158,11,0.08)',
            border: '1px solid rgba(245,158,11,0.25)',
            color: '#f59e0b',
          }}
        >
          🔥 &quot;Llevas 47 días construyendo tu futuro como developer.&quot;
        </div>

        {/* CTAs */}
        <div className='flex flex-col sm:flex-row gap-3 mb-10'>
          <Link href='/registro' className='btn-primary px-8 py-4 text-base rounded-xl'>
            Empezar gratis — sin tarjeta 🐧
          </Link>
          <a
            href='#como-funciona'
            className='px-8 py-4 text-base font-semibold rounded-xl transition-colors'
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid #21262d',
              color: '#f0f6fc',
            }}
          >
            Ver cómo funciona
          </a>
        </div>

        {/* Social proof */}
        <div className='flex flex-wrap items-center justify-center gap-3 mb-12'>
          <div className='flex -space-x-2'>
            {['🧑‍💻', '👩‍💻', '🧑‍💻', '👨‍💻', '👩‍💻'].map((e, i) => (
              <div
                key={i}
                className='w-8 h-8 rounded-full flex items-center justify-center text-sm border-2'
                style={{ background: '#0d1117', borderColor: '#07090f' }}
              >
                {e}
              </div>
            ))}
          </div>
          <p className='text-sm' style={{ color: '#8b949e' }}>
            <span style={{ color: '#f0f6fc', fontWeight: 700 }}>+50,000 devs</span>{' '}
            ya aprendiendo · ⭐ 4.9/5
          </p>
        </div>

        {/* Stats row */}
        <div
          className='grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl'
          style={{
            background: 'rgba(13,17,23,0.9)',
            border: '1px solid #21262d',
            borderRadius: '20px',
            padding: '20px 24px',
          }}
        >
          {[
            { v: '50K+', l: 'Devs activos' },
            { v: '200+', l: 'Lecciones' },
            { v: '6', l: 'Rutas de carrera' },
            { v: '4.9★', l: 'Valoración media' },
          ].map((s) => (
            <div key={s.l} className='flex flex-col items-center gap-0.5'>
              <span className='text-2xl sm:text-3xl font-black gradient-text-green'>{s.v}</span>
              <span className='text-xs text-center' style={{ color: '#484f58' }}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className='absolute bottom-0 left-0 right-0 h-28 pointer-events-none'
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg))' }}
      />
    </section>
  )
}
