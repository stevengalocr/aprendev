import Link from 'next/link'

const SCREENS = [
  {
    title: 'Dashboard',
    desc: 'Streak, XP, rutas activas y misión diaria en un vistazo',
    emoji: '🏠',
    color: '#8b5cf6',
  },
  {
    title: 'Mapa de aprendizaje',
    desc: 'Árbol de habilidades visual. Desbloquea lecciones progresivamente',
    emoji: '🗺️',
    color: '#22c55e',
  },
  {
    title: 'Lecciones interactivas',
    desc: 'Preguntas de código, opción múltiple, feedback instantáneo',
    emoji: '⚡',
    color: '#f59e0b',
  },
  {
    title: 'Ranking semanal',
    desc: 'Compite con devs de todo LATAM cada semana',
    emoji: '🏆',
    color: '#3b82f6',
  },
]

export default function AppPreview() {
  return (
    <section
      className='landing-section'
      style={{ background: 'var(--bg-card)' }}
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-14'>
          <div className='badge-purple inline-flex mb-4'>Vista previa de la app</div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-black mb-4' style={{ color: '#f8fafc' }}>
            Una app{' '}
            <span className='gradient-text'>diseñada para el teléfono</span>
          </h2>
          <p className='text-lg max-w-xl mx-auto mb-8' style={{ color: '#94a3b8' }}>
            GaloDev es 100% mobile-first. Cada pantalla está optimizada para aprender
            en el metro, en el café, donde sea.
          </p>
          <Link href='/app' className='btn-primary inline-flex px-8 py-4 rounded-2xl text-base'>
            🎮 Abrir la app ahora →
          </Link>
        </div>

        {/* Features grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {SCREENS.map((s) => (
            <Link key={s.title} href='/app'>
              <div
                className='card card-lift p-6 cursor-pointer h-full'
                style={{ borderColor: `${s.color}18` }}
              >
                <div
                  className='w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4'
                  style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}
                >
                  {s.emoji}
                </div>
                <h3 className='font-bold text-sm mb-1.5' style={{ color: '#f8fafc' }}>{s.title}</h3>
                <p className='text-xs leading-relaxed' style={{ color: '#94a3b8' }}>{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Phone dimensions notice */}
        <div
          className='mt-8 flex items-center justify-center gap-2 text-xs p-3 rounded-xl max-w-sm mx-auto'
          style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.2)', color: '#a78bfa' }}
        >
          <span>📱</span>
          <span>En desktop verás la app en un simulador de teléfono · 390×844px</span>
        </div>
      </div>
    </section>
  )
}
