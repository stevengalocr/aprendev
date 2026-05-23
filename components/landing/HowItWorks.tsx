const STEPS = [
  {
    number: '01',
    icon: '🗺️',
    title: 'Elige tu ruta',
    description:
      'Selecciona el camino que más te interesa: Web Dev, Inteligencia Artificial, Algoritmos, DevOps o más. Cada ruta tiene un árbol de habilidades progresivo.',
    color: '#4ade80',
  },
  {
    number: '02',
    icon: '⚡',
    title: 'Lecciones de 5 min',
    description:
      'Cada lección es corta e intensa. Quizzes de código, preguntas de concepto, completa el código, ordena los bloques. Aprendes haciendo, no leyendo.',
    color: '#3b82f6',
  },
  {
    number: '03',
    icon: '🔥',
    title: 'Mantén tu racha',
    description:
      'Practica cada día para mantener tu streak vivo. Gana XP, sube de nivel y compite en el leaderboard semanal. La consistencia es el superpoder.',
    color: '#f59e0b',
  },
  {
    number: '04',
    icon: '🚀',
    title: 'Construye proyectos',
    description:
      'Cada ruta termina con un proyecto real. Portafolio en GitHub, despliegue incluido. Pasas de aprender a crear algo que puedas mostrar en una entrevista.',
    color: '#a855f7',
  },
]

export default function HowItWorks() {
  return (
    <section
      id='como-funciona'
      className='py-24 px-4 sm:px-6'
      style={{ background: 'var(--bg)' }}
    >
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='badge-green inline-block mb-4'>Cómo funciona</div>
          <h2
            className='text-3xl sm:text-4xl md:text-5xl font-black mb-4'
            style={{ color: '#f0f6fc' }}
          >
            De cero a dev en{' '}
            <span className='gradient-text'>4 pasos simples</span>
          </h2>
          <p className='text-lg max-w-2xl mx-auto' style={{ color: '#8b949e' }}>
            Sin cursos aburridos de 40 horas. Sin perder la motivación. Solo tú,
            5 minutos al día y tu pingüino favorito.
          </p>
        </div>

        {/* Steps */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className='card-hover relative p-8 rounded-2xl'
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Number watermark */}
              <span
                className='absolute top-6 right-6 text-6xl font-black opacity-5 select-none font-mono'
                style={{ color: step.color }}
              >
                {step.number}
              </span>

              {/* Icon */}
              <div
                className='w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5'
                style={{
                  background: `${step.color}18`,
                  border: `1px solid ${step.color}33`,
                }}
              >
                {step.icon}
              </div>

              {/* Content */}
              <h3
                className='text-xl font-bold mb-3'
                style={{ color: '#f0f6fc' }}
              >
                {step.title}
              </h3>
              <p className='leading-relaxed' style={{ color: '#8b949e' }}>
                {step.description}
              </p>

              {/* Connector line (between steps on desktop) */}
              {i === 1 && (
                <div
                  className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-px h-6 hidden md:block'
                  style={{ background: 'linear-gradient(to bottom, #21262d, transparent)' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Demo snippet */}
        <div
          className='mt-16 p-6 sm:p-8 rounded-2xl code-snippet'
        >
          <div className='flex items-center gap-2 mb-4'>
            <div className='w-3 h-3 rounded-full bg-red-500' />
            <div className='w-3 h-3 rounded-full bg-yellow-500' />
            <div className='w-3 h-3 rounded-full bg-green-500' />
            <span className='ml-3 text-xs' style={{ color: '#484f58' }}>lección_01.js — Aprendev</span>
          </div>
          <pre className='overflow-x-auto'>
            <code>
              <span style={{ color: '#8b949e' }}>{'// Lección: Closures en JavaScript\n'}</span>
              <span style={{ color: '#ff7b72' }}>{'function '}</span>
              <span style={{ color: '#d2a8ff' }}>{'crearContador'}</span>
              <span style={{ color: '#f0f6fc' }}>{'() {\n'}</span>
              <span style={{ color: '#f0f6fc' }}>{'  '}</span>
              <span style={{ color: '#ff7b72' }}>{'let '}</span>
              <span style={{ color: '#ffa657' }}>{'count'}</span>
              <span style={{ color: '#f0f6fc' }}>{' = '}</span>
              <span style={{ color: '#79c0ff' }}>{'0'}</span>
              <span style={{ color: '#f0f6fc' }}>{';\n'}</span>
              <span style={{ color: '#f0f6fc' }}>{'  '}</span>
              <span style={{ color: '#ff7b72' }}>{'return '}</span>
              <span style={{ color: '#f0f6fc' }}>{'() => '}</span>
              <span style={{ color: '#ffa657' }}>{'count'}</span>
              <span style={{ color: '#f0f6fc' }}>{' += '}</span>
              <span style={{ color: '#79c0ff' }}>{'1'}</span>
              <span style={{ color: '#f0f6fc' }}>{';\n'}</span>
              <span style={{ color: '#f0f6fc' }}>{'}\n\n'}</span>
              <span style={{ color: '#8b949e' }}>{'// ¿Qué imprime esto?\n'}</span>
              <span style={{ color: '#ff7b72' }}>{'const '}</span>
              <span style={{ color: '#ffa657' }}>{'contador'}</span>
              <span style={{ color: '#f0f6fc' }}>{' = crearContador()\n'}</span>
              <span style={{ color: '#d2a8ff' }}>{'console'}</span>
              <span style={{ color: '#f0f6fc' }}>{'.log('}</span>
              <span style={{ color: '#d2a8ff' }}>{'contador'}</span>
              <span style={{ color: '#f0f6fc' }}>{'()) '}</span>
              <span style={{ color: '#8b949e' }}>{'// → ???'}</span>
            </code>
          </pre>
          <div className='mt-4 flex items-center gap-3'>
            <span className='text-sm' style={{ color: '#8b949e' }}>¿Cuál es el output?</span>
            {['0', '1', 'undefined', 'Error'].map((opt, i) => (
              <button
                key={opt}
                className='px-3 py-1 rounded-lg text-sm font-mono transition-colors'
                style={{
                  background: i === 1 ? 'rgba(74,222,128,0.15)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${i === 1 ? 'rgba(74,222,128,0.5)' : '#21262d'}`,
                  color: i === 1 ? '#4ade80' : '#8b949e',
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
