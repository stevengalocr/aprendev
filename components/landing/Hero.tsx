'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const PHRASES = [
  'jugando.',
  'un día a la vez.',
  'en 5 minutos.',
  'como un dev real.',
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [phraseIdx, setPhraseIdx] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const i = setInterval(() => setPhraseIdx((p) => (p + 1) % PHRASES.length), 2800)
    return () => clearInterval(i)
  }, [])

  return (
    <section
      className='relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-grid'
      style={{ background: 'var(--bg)' }}
    >
      {/* Background glows */}
      <div className='absolute inset-0 pointer-events-none'>
        <div style={{ position: 'absolute', top: '10%', left: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.08), transparent)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.07), transparent)', filter: 'blur(40px)' }} />
      </div>

      {/* Content */}
      <div
        className='relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto'
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(24px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* Badge */}
        <div className='badge-purple mb-6'>
          🐧 El Duolingo de los developers
        </div>

        {/* Mascot with floating badges */}
        <div className='relative mb-5 inline-block'>
          <div className='float'>
            <Image
              src='/mascot.png'
              alt='AprenDev mascota'
              width={200}
              height={200}
              priority
              className='drop-shadow-2xl'
              onError={(e) => {
                const el = e.target as HTMLImageElement
                el.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🐧%3C/text%3E%3C/svg%3E"
              }}
            />
          </div>
          {/* Bubble: XP */}
          <div
            className='absolute -top-3 -right-8 px-3 py-1.5 rounded-full text-xs font-black float'
            style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)', color: '#a78bfa', animationDelay: '0.5s' }}
          >
            +20 XP ⚡
          </div>
          {/* Bubble: streak */}
          <div
            className='absolute -bottom-2 -left-10 px-3 py-1.5 rounded-full text-xs font-black float'
            style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.35)', color: '#f59e0b', animationDelay: '1.2s' }}
          >
            🔥 47 días
          </div>
        </div>

        {/* Headline */}
        <div className='mb-2'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-1' style={{ color: '#f8fafc' }}>
            Aprende programación
          </h1>
          <div className='h-14 sm:h-16 md:h-20 flex items-center justify-center'>
            <h1
              key={phraseIdx}
              className='text-4xl sm:text-5xl md:text-6xl font-black gradient-text bounce-in'
            >
              {PHRASES[phraseIdx]}
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <p className='text-lg sm:text-xl mb-2 max-w-xl' style={{ color: '#94a3b8' }}>
          Aprende. Codea. <strong style={{ color: '#f8fafc' }}>Construye tu futuro.</strong>
        </p>

        {/* Emotional hook */}
        <div
          className='mb-8 px-5 py-2.5 rounded-xl text-sm font-medium italic'
          style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)', color: '#f59e0b' }}
        >
          🔥 &quot;Llevas 47 días construyendo tu futuro como developer.&quot;
        </div>

        {/* CTAs */}
        <div className='flex flex-col sm:flex-row gap-3 mb-8'>
          <Link href='/app' className='btn-primary px-8 py-4 text-base rounded-2xl'>
            🎮 Jugar gratis ahora
          </Link>
          <a
            href='#como-funciona'
            className='btn-secondary px-8 py-4 text-base rounded-2xl'
          >
            Ver cómo funciona
          </a>
        </div>

        {/* Stores */}
        <div className='flex items-center gap-2 mb-10 flex-wrap justify-center'>
          <div
            className='flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-pointer transition-opacity hover:opacity-80'
            style={{ background: '#000', border: '1px solid #1e2140' }}
          >
            <span className='text-xl'>🍎</span>
            <div className='text-left'>
              <p className='text-[8px] uppercase tracking-widest' style={{ color: '#94a3b8' }}>Disponible en</p>
              <p className='text-sm font-bold' style={{ color: '#f8fafc' }}>App Store</p>
            </div>
          </div>
          <div
            className='flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-pointer transition-opacity hover:opacity-80'
            style={{ background: '#000', border: '1px solid #1e2140' }}
          >
            <span className='text-xl'>▶️</span>
            <div className='text-left'>
              <p className='text-[8px] uppercase tracking-widest' style={{ color: '#94a3b8' }}>Disponible en</p>
              <p className='text-sm font-bold' style={{ color: '#f8fafc' }}>Google Play</p>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className='flex flex-wrap items-center justify-center gap-3 mb-12'>
          <div className='flex -space-x-2'>
            {['🧑‍💻','👩‍💻','🧑‍💻','👨‍💻','👩‍💻'].map((e, i) => (
              <div key={i} className='w-8 h-8 rounded-full flex items-center justify-center border-2'
                style={{ background: '#0f1123', borderColor: '#07080f' }}>
                {e}
              </div>
            ))}
          </div>
          <p className='text-sm' style={{ color: '#94a3b8' }}>
            <strong style={{ color: '#f8fafc' }}>+50,000 devs</strong> ya aprendiendo · ⭐ 4.9/5
          </p>
        </div>

        {/* Stats */}
        <div
          className='grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl'
          style={{ background: 'rgba(15,17,35,0.9)', border: '1px solid #1e2140', borderRadius: '20px', padding: '20px 24px' }}
        >
          {[
            { v: '50K+', l: 'Devs activos' },
            { v: '200+', l: 'Lecciones' },
            { v: '6', l: 'Rutas' },
            { v: '4.9★', l: 'Valoración' },
          ].map((s) => (
            <div key={s.l} className='flex flex-col items-center gap-0.5'>
              <span className='text-2xl sm:text-3xl font-black gradient-text'>{s.v}</span>
              <span className='text-xs' style={{ color: '#4a5280' }}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-24 pointer-events-none'
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg))' }} />
    </section>
  )
}
