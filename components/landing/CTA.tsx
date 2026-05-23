import Image from 'next/image'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className='landing-section relative overflow-hidden' style={{ background: 'var(--bg)' }}>
      <div className='absolute inset-0 pointer-events-none'
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />

      <div className='max-w-3xl mx-auto text-center relative z-10'>
        <div className='relative inline-block mb-6'>
          <div className='float'>
            <Image src='/mascot.png' alt='AprenDev' width={140} height={140} className='drop-shadow-2xl mx-auto' />
          </div>
          <div className='absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center animate-bounce'
            style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)' }}>💡</div>
          <div className='absolute -bottom-2 -left-4 w-8 h-8 rounded-full flex items-center justify-center fire'
            style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.4)' }}>🔥</div>
        </div>

        <h2 className='text-3xl sm:text-4xl md:text-5xl font-black mb-4' style={{ color: '#f8fafc' }}>
          Tu racha empieza <span className='gradient-text'>hoy</span>
        </h2>
        <p className='text-lg mb-8 max-w-xl mx-auto' style={{ color: '#94a3b8' }}>
          Únete a +50,000 developers que ya aprenden con el pingüino.
          Sin tarjeta, sin excusas.
        </p>

        <div className='flex flex-col sm:flex-row gap-3 justify-center mb-8'>
          <Link href='/app' className='btn-primary px-10 py-4 text-base rounded-2xl'>
            🎮 Jugar gratis ahora
          </Link>
          <a href='#cursos' className='btn-secondary px-10 py-4 text-base rounded-2xl'>
            Ver los cursos
          </a>
        </div>

        <div className='flex flex-wrap gap-4 justify-center'>
          {[
            { icon: '🔒', text: 'Sin tarjeta requerida' },
            { icon: '✅', text: 'Cancela cuando quieras' },
            { icon: '🌎', text: 'En español para LATAM' },
            { icon: '📱', text: '100% mobile-first' },
          ].map((b) => (
            <div key={b.text} className='flex items-center gap-1.5 text-xs' style={{ color: '#4a5280' }}>
              <span>{b.icon}</span><span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
