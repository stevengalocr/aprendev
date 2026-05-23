import Image from 'next/image'

const FEATURES = [
  {
    icon: '🔥',
    title: 'Rachas diarias',
    description:
      'Practica cada día y construye el hábito. Pierde la racha y pierde corazones. Mantenerla desbloquea recompensas exclusivas.',
    color: '#f59e0b',
  },
  {
    icon: '⚡',
    title: 'Sistema de XP y niveles',
    description:
      'Gana XP por cada respuesta correcta. Sube de Bug Hunter a Legend. El progreso siempre visible, siempre motivante.',
    color: '#4ade80',
  },
  {
    icon: '❤️',
    title: 'Corazones (vidas)',
    description:
      'Tienes 5 corazones por sesión. Cada error te cuesta uno. Cuídalos o practica más para recuperarlos. Like Duolingo.',
    color: '#f43f5e',
  },
  {
    icon: '🏆',
    title: 'Leaderboard semanal',
    description:
      'Compite con devs de todo el mundo cada semana. Top 10 ganan Gems extras. La liga sube de dificultad con el tiempo.',
    color: '#a855f7',
  },
  {
    icon: '📱',
    title: '100% mobile-friendly',
    description:
      'Aprende en el bus, en la cola del café, donde sea. La app está optimizada para móvil desde el día uno.',
    color: '#06b6d4',
  },
  {
    icon: '🤖',
    title: 'Explicaciones con IA',
    description:
      'Cada respuesta incorrecta viene con una explicación generada por IA adaptada a tu nivel. Nunca te quedas atascado.',
    color: '#3b82f6',
  },
]

export default function Features() {
  return (
    <section
      className='py-24 px-4 sm:px-6'
      style={{ background: 'var(--bg)' }}
    >
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='badge-green inline-block mb-4'>Características</div>
          <h2
            className='text-3xl sm:text-4xl md:text-5xl font-black mb-4'
            style={{ color: '#f0f6fc' }}
          >
            Diseñado para que{' '}
            <span className='gradient-text'>no lo dejes</span>
          </h2>
          <p className='text-lg max-w-2xl mx-auto' style={{ color: '#8b949e' }}>
            Cada elemento de Aprendev está pensado para mantener el momentum.
            La neurociencia del aprendizaje, aplicada a la programación.
          </p>
        </div>

        {/* Features grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className='card-hover p-6 rounded-2xl flex gap-4'
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className='w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0'
                style={{
                  background: `${f.color}15`,
                  border: `1px solid ${f.color}30`,
                }}
              >
                {f.icon}
              </div>
              <div>
                <h3 className='font-bold mb-1.5' style={{ color: '#f0f6fc' }}>
                  {f.title}
                </h3>
                <p className='text-sm leading-relaxed' style={{ color: '#8b949e' }}>
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Big comparison section */}
        <div
          className='rounded-2xl p-8 sm:p-12 text-center'
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <h3
            className='text-2xl sm:text-3xl font-black mb-8'
            style={{ color: '#f0f6fc' }}
          >
            Aprendev vs el resto
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {[
              {
                label: 'Cursos largos en video',
                icon: '😴',
                desc: 'Horas de video que nadie termina. Motivación cae a la semana.',
                bad: true,
              },
              {
                label: 'Aprendev',
                icon: '🐧',
                desc: '5 min al día, gamificado, con streak y comunidad. ¡Funciona!',
                bad: false,
                highlight: true,
              },
              {
                label: 'Documentación oficial',
                icon: '📖',
                desc: 'Esencial, pero aburrida. Sin feedback, sin práctica guiada.',
                bad: true,
              },
            ].map((item) => (
              <div
                key={item.label}
                className='p-6 rounded-xl'
                style={{
                  background: item.highlight
                    ? 'rgba(74,222,128,0.08)'
                    : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${item.highlight ? 'rgba(74,222,128,0.3)' : '#21262d'}`,
                }}
              >
                <div className='text-4xl mb-3'>{item.icon}</div>
                <h4
                  className='font-bold mb-2'
                  style={{ color: item.highlight ? '#4ade80' : '#f0f6fc' }}
                >
                  {item.label}
                </h4>
                <p className='text-sm' style={{ color: '#8b949e' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
