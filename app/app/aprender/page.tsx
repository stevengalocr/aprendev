import BottomNav from '@/components/app/BottomNav'
import Link from 'next/link'

const TRACKS = [
  {
    id: 'frontend',
    icon: '🌐',
    title: 'Frontend Developer',
    desc: 'HTML, CSS, JS, React, Next.js',
    level: 8, progress: 64,
    color: '#3b82f6',
    gradient: 'from-blue-600 to-indigo-600',
    lessons: 48, xp: '2.4k',
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'Inteligencia Artificial',
    desc: 'Python, LLMs, Agents, RAG',
    level: 5, progress: 35,
    color: '#a855f7',
    gradient: 'from-purple-600 to-pink-600',
    lessons: 36, xp: '1.8k',
    badge: '✨ Nuevo',
  },
  {
    id: 'backend',
    icon: '⚙️',
    title: 'Backend Developer',
    desc: 'Node.js, APIs, Postgres, Auth',
    level: 6, progress: 42,
    color: '#f97316',
    gradient: 'from-orange-500 to-red-500',
    lessons: 38, xp: '1.9k',
  },
  {
    id: 'algorithms',
    icon: '🧮',
    title: 'Algoritmos & CS',
    desc: 'Big O, Estructuras de datos',
    level: 3, progress: 18,
    color: '#22c55e',
    gradient: 'from-green-500 to-teal-500',
    lessons: 42, xp: '2.1k',
    badge: '💼 Entrevistas',
  },
  {
    id: 'devops',
    icon: '🔧',
    title: 'DevOps & Cloud',
    desc: 'Git, Docker, CI/CD, Deploy',
    level: 2, progress: 10,
    color: '#f43f5e',
    gradient: 'from-rose-500 to-red-600',
    lessons: 30, xp: '1.5k',
  },
  {
    id: 'typescript',
    icon: '🔷',
    title: 'TypeScript',
    desc: 'Tipos, interfaces, generics',
    level: 4, progress: 28,
    color: '#06b6d4',
    gradient: 'from-cyan-500 to-blue-500',
    lessons: 24, xp: '1.2k',
  },
]

export default function Aprender() {
  return (
    <div className='app-screen'>
      <div className='app-content px-4 pt-5'>
        {/* Header */}
        <h1 className='text-xl font-black mb-1' style={{ color: '#f8fafc' }}>Aprender</h1>
        <p className='text-sm mb-5' style={{ color: '#94a3b8' }}>Elige tu ruta y empieza</p>

        {/* Search */}
        <div
          className='flex items-center gap-2 px-3 py-2.5 rounded-xl mb-5'
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <span style={{ color: '#4a5280' }}>🔍</span>
          <span className='text-sm' style={{ color: '#4a5280' }}>Buscar lección o ruta...</span>
        </div>

        {/* Tracks */}
        <div className='flex flex-col gap-3'>
          {TRACKS.map((t) => (
            <Link key={t.id} href={`/app/mapa/${t.id}`}>
              <div
                className='relative p-4 rounded-2xl overflow-hidden transition-all hover:opacity-90'
                style={{ background: 'var(--bg-card)', border: `1px solid ${t.color}22` }}
              >
                {/* Color glow side */}
                <div
                  className='absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl'
                  style={{ background: `linear-gradient(to bottom, ${t.color}, transparent)` }}
                />

                {/* Badge */}
                {t.badge && (
                  <div
                    className='absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full'
                    style={{ background: `${t.color}22`, color: t.color }}
                  >
                    {t.badge}
                  </div>
                )}

                <div className='flex items-start gap-3 pl-2'>
                  <div
                    className='w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0'
                    style={{ background: `${t.color}18` }}
                  >
                    {t.icon}
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='font-bold text-sm mb-0.5' style={{ color: '#f8fafc' }}>{t.title}</p>
                    <p className='text-xs mb-2.5' style={{ color: '#94a3b8' }}>{t.desc}</p>

                    {/* Progress */}
                    <div className='progress-track mb-1' style={{ height: '4px' }}>
                      <div
                        className='progress-fill'
                        style={{
                          width: `${t.progress}%`,
                          background: `linear-gradient(90deg, ${t.color}, ${t.color}aa)`,
                        }}
                      />
                    </div>

                    <div className='flex items-center justify-between'>
                      <span className='text-[10px]' style={{ color: '#4a5280' }}>
                        Nivel {t.level} · {t.progress}%
                      </span>
                      <div className='flex items-center gap-2 text-[10px]' style={{ color: '#4a5280' }}>
                        <span>📚 {t.lessons}</span>
                        <span>⚡ {t.xp} XP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
