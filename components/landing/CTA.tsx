import Image from 'next/image'
import Link from 'next/link'

export default function CTA() {
  return (
    <section
      className='py-24 px-4 sm:px-6 relative overflow-hidden'
      style={{ background: 'var(--bg)' }}
    >
      {/* Background glow */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(74,222,128,0.07) 0%, transparent 70%)',
        }}
      />

      <div className='max-w-3xl mx-auto text-center relative z-10'>
        {/* Mascot */}
        <div className='relative inline-block mb-6'>
          <div className='float'>
            <Image
              src='/mascot.png'
              alt='Mascota Aprendev'
              width={140}
              height={140}
              className='drop-shadow-2xl mx-auto'
            />
          </div>
          {/* Decorative elements */}
          <div
            className='absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm animate-bounce'
            style={{ background: 'rgba(74,222,128,0.2)', border: '1px solid rgba(74,222,128,0.4)' }}
          >
            💡
          </div>
          <div
            className='absolute -bottom-2 -left-4 w-8 h-8 rounded-full flex items-center justify-center text-sm'
            style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.4)', animation: 'bounce 1.5s infinite' }}
          >
            🔥
          </div>
        </div>

        <h2
          className='text-3xl sm:text-4xl md:text-5xl font-black mb-4'
          style={{ color: '#f0f6fc' }}
        >
          Tu racha empieza{' '}
          <span className='gradient-text'>hoy</span>
        </h2>

        <p className='text-lg mb-8 max-w-xl mx-auto' style={{ color: '#8b949e' }}>
          Únete a +50,000 programadores que ya aprenden con el pingüino.
          Primera lección gratis, sin tarjeta de crédito.
        </p>

        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <Link
            href='/registro'
            className='btn-primary px-10 py-4 text-base rounded-xl'
          >
            Comenzar ahora — es gratis 🐧
          </Link>
          <Link
            href='#cursos'
            className='px-10 py-4 text-base font-semibold rounded-xl transition-colors'
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid #21262d',
              color: '#f0f6fc',
            }}
          >
            Ver cursos primero
          </Link>
        </div>

        {/* Trust badges */}
        <div className='flex flex-wrap gap-4 justify-center mt-10'>
          {[
            { icon: '🔒', text: 'Sin tarjeta requerida' },
            { icon: '✅', text: 'Cancela cuando quieras' },
            { icon: '🌎', text: 'En español, para LATAM' },
            { icon: '📱', text: 'Mobile-friendly' },
          ].map((b) => (
            <div
              key={b.text}
              className='flex items-center gap-1.5 text-xs'
              style={{ color: '#8b949e' }}
            >
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
