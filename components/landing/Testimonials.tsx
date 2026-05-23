const TESTIMONIALS = [
  {
    name: 'Valeria M.',
    role: 'Junior Frontend Dev @ Startup',
    avatar: '👩‍💻',
    country: '🇲🇽',
    text: 'Llevo 3 meses con Aprendev y ya conseguí mi primer trabajo como dev. La ruta de React + Next.js me preparó exactamente para lo que me preguntaron en las entrevistas.',
    xp: '3,200 XP',
    streak: '47 días',
  },
  {
    name: 'Carlos R.',
    role: 'Estudiante de Sistemas',
    avatar: '🧑‍💻',
    country: '🇨🇴',
    text: 'La ruta de Algoritmos es brutal para prep de entrevistas. Explica Big O mejor que mi profesor de la universidad, y encima es entretenido porque pierdes corazones si te equivocas.',
    xp: '5,100 XP',
    streak: '89 días',
  },
  {
    name: 'Diego F.',
    role: 'Diseñador aprendiendo a programar',
    avatar: '🎨',
    country: '🇦🇷',
    text: 'Intenté aprender con YouTube y siempre dejaba los videos a la mitad. Aprendev me engancha porque es como un juego. 5 minutos al día y ya llevo 2 meses sin romper la racha.',
    xp: '1,800 XP',
    streak: '62 días',
  },
  {
    name: 'Sofía L.',
    role: 'Data Scientist → AI Engineer',
    avatar: '🤖',
    country: '🇨🇱',
    text: 'La ruta de IA es lo mejor que he encontrado para entender LLMs y agents sin necesitar un PhD. Muy práctica, muy actualizada con lo que está pasando en 2025.',
    xp: '4,400 XP',
    streak: '31 días',
  },
  {
    name: 'Andrés T.',
    role: 'Backend Dev',
    avatar: '⚙️',
    country: '🇻🇪',
    text: 'Uso Aprendev para mantenerme actualizado en frontend. 10 minutos en el metro y ya tengo mi lección del día. El sistema de XP me tiene más motivado que cualquier otra plataforma.',
    xp: '6,700 XP',
    streak: '120 días',
  },
  {
    name: 'María P.',
    role: 'Marketing → Dev Bootcamp',
    avatar: '📊',
    country: '🇵🇪',
    text: 'Nunca pensé que programar podría ser divertido. Aprendev cambió eso. El pingüino me da pena decepcionarlo 😂 Esa es la mejor estrategia de retención que he visto.',
    xp: '900 XP',
    streak: '18 días',
  },
]

export default function Testimonials() {
  return (
    <section
      className='py-24 px-4 sm:px-6 overflow-hidden'
      style={{ background: 'var(--bg-card)' }}
    >
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-14'>
          <div className='badge-green inline-block mb-4'>Testimonios</div>
          <h2
            className='text-3xl sm:text-4xl md:text-5xl font-black mb-4'
            style={{ color: '#f0f6fc' }}
          >
            Devs que ya{' '}
            <span className='gradient-text'>cambiaron su carrera</span>
          </h2>
          <p className='text-lg' style={{ color: '#8b949e' }}>
            +50,000 programadores en Latinoamérica y España ya aprenden con Aprendev
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className='card-hover p-6 rounded-2xl flex flex-col gap-4'
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
            >
              {/* Stars */}
              <div className='flex gap-0.5 text-amber-400 text-sm'>
                {'★★★★★'}
              </div>

              {/* Text */}
              <p className='text-sm leading-relaxed flex-1' style={{ color: '#c9d1d9' }}>
                &quot;{t.text}&quot;
              </p>

              {/* Author */}
              <div className='flex items-center gap-3 pt-3' style={{ borderTop: '1px solid #21262d' }}>
                <div
                  className='w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0'
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #21262d' }}
                >
                  {t.avatar}
                </div>
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center gap-1'>
                    <span className='font-semibold text-sm' style={{ color: '#f0f6fc' }}>
                      {t.name}
                    </span>
                    <span>{t.country}</span>
                  </div>
                  <p className='text-xs truncate' style={{ color: '#8b949e' }}>
                    {t.role}
                  </p>
                </div>
                <div className='text-right flex-shrink-0'>
                  <div className='text-xs font-bold' style={{ color: '#4ade80' }}>
                    {t.xp}
                  </div>
                  <div className='text-xs' style={{ color: '#f59e0b' }}>
                    🔥 {t.streak}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
