const TRACKS = [
  {
    id: 'web',
    icon: '🌐',
    title: 'Web Development',
    subtitle: 'De cero a fullstack',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.25)',
    lessons: 48,
    xp: 2400,
    topics: ['HTML & CSS', 'JavaScript ES2024', 'TypeScript', 'React', 'Next.js', 'Node.js'],
    level: 'Básico → Avanzado',
    badge: '🔥 Más popular',
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'IA & Machine Learning',
    subtitle: 'LLMs, Agents y ML real',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.25)',
    lessons: 36,
    xp: 1800,
    topics: ['Python para IA', 'Prompting avanzado', 'RAG', 'AI Agents', 'Fine-tuning', 'Deploy ML'],
    level: 'Intermedio',
    badge: '✨ Nuevo 2025',
  },
  {
    id: 'algorithms',
    icon: '🧮',
    title: 'Algoritmos & CS',
    subtitle: 'Ace las entrevistas técnicas',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    lessons: 42,
    xp: 2100,
    topics: ['Big O', 'Arrays & Strings', 'Hash Maps', 'Trees', 'Graphs', 'Dynamic Programming'],
    level: 'Intermedio',
    badge: '💼 Para entrevistas',
  },
  {
    id: 'devops',
    icon: '🔧',
    title: 'DevOps & Cloud',
    subtitle: 'Despliega como un pro',
    color: '#f43f5e',
    bg: 'rgba(244,63,94,0.08)',
    border: 'rgba(244,63,94,0.25)',
    lessons: 30,
    xp: 1500,
    topics: ['Git avanzado', 'Docker', 'CI/CD', 'Vercel/AWS', 'Kubernetes básico', 'Monitoring'],
    level: 'Intermedio',
    badge: null,
  },
  {
    id: 'backend',
    icon: '⚙️',
    title: 'Backend & APIs',
    subtitle: 'Servidores y bases de datos',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.25)',
    lessons: 38,
    xp: 1900,
    topics: ['Node.js + Express', 'REST APIs', 'GraphQL', 'SQL & Postgres', 'Supabase', 'Auth'],
    level: 'Básico → Intermedio',
    badge: null,
  },
  {
    id: 'mobile',
    icon: '📱',
    title: 'Mobile con React Native',
    subtitle: 'iOS y Android con JS',
    color: '#eab308',
    bg: 'rgba(234,179,8,0.08)',
    border: 'rgba(234,179,8,0.25)',
    lessons: 28,
    xp: 1400,
    topics: ['Expo', 'Navegación', 'Estado global', 'APIs nativas', 'Push notifications', 'Deploy stores'],
    level: 'Intermedio',
    badge: '🔜 Próximamente',
  },
]

export default function Courses() {
  return (
    <section
      id='cursos'
      className='py-24 px-4 sm:px-6'
      style={{ background: 'var(--bg-card)' }}
    >
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='badge-green inline-block mb-4'>Rutas de aprendizaje</div>
          <h2
            className='text-3xl sm:text-4xl md:text-5xl font-black mb-4'
            style={{ color: '#f0f6fc' }}
          >
            6 rutas,{' '}
            <span className='gradient-text'>todo lo que necesitas</span>
          </h2>
          <p className='text-lg max-w-2xl mx-auto' style={{ color: '#8b949e' }}>
            Desde el primer `console.log` hasta deployar tu primer agente de IA.
            Cada ruta es independiente, empieza donde quieras.
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {TRACKS.map((track) => (
            <div
              key={track.id}
              className='card-hover relative flex flex-col p-6 rounded-2xl'
              style={{
                background: track.bg,
                border: `1px solid ${track.border}`,
              }}
            >
              {/* Badge */}
              {track.badge && (
                <span
                  className='absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full'
                  style={{
                    background: `${track.color}22`,
                    border: `1px solid ${track.color}44`,
                    color: track.color,
                  }}
                >
                  {track.badge}
                </span>
              )}

              {/* Icon */}
              <div
                className='w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4'
                style={{
                  background: `${track.color}18`,
                  border: `1px solid ${track.color}33`,
                }}
              >
                {track.icon}
              </div>

              {/* Title */}
              <h3
                className='text-lg font-bold mb-1'
                style={{ color: '#f0f6fc' }}
              >
                {track.title}
              </h3>
              <p className='text-sm mb-4' style={{ color: '#8b949e' }}>
                {track.subtitle}
              </p>

              {/* Topics */}
              <div className='flex flex-wrap gap-1.5 mb-5'>
                {track.topics.map((t) => (
                  <span
                    key={t}
                    className='text-xs px-2 py-0.5 rounded-md'
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid #21262d',
                      color: '#8b949e',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer stats */}
              <div className='mt-auto flex items-center justify-between pt-4' style={{ borderTop: '1px solid #21262d' }}>
                <div className='flex items-center gap-3'>
                  <span className='text-xs' style={{ color: '#8b949e' }}>
                    📚 {track.lessons} lecciones
                  </span>
                  <span className='text-xs' style={{ color: '#8b949e' }}>
                    ⚡ {track.xp} XP
                  </span>
                </div>
                <span
                  className='text-xs font-medium'
                  style={{ color: track.color }}
                >
                  {track.level}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='text-center mt-12'>
          <a
            href='/registro'
            className='btn-primary inline-block px-8 py-4 text-base rounded-xl'
          >
            Ver todas las lecciones →
          </a>
        </div>
      </div>
    </section>
  )
}
