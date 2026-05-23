import BottomNav from '@/components/app/BottomNav'
import Image from 'next/image'
import Link from 'next/link'

const PATHS = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    icons: ['⚛️', '🌐', '🔷', '⚡'],
    level: 8,
    progress: 64,
    color: '#3b82f6',
    gradient: 'linear-gradient(90deg, #3b82f6, #6366f1)',
  },
  {
    id: 'ai',
    title: 'Inteligencia Artificial',
    icons: ['🐍', '🤖', '🧠'],
    level: 5,
    progress: 35,
    color: '#a855f7',
    gradient: 'linear-gradient(90deg, #a855f7, #ec4899)',
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    icons: ['⚙️', '🍀', '🔴'],
    level: 6,
    progress: 42,
    color: '#f97316',
    gradient: 'linear-gradient(90deg, #f97316, #ef4444)',
  },
]

export default function AppHome() {
  return (
    <div className='app-screen'>
      <div className='app-content px-4 pt-4'>
        {/* Header */}
        <div className='flex items-center justify-between mb-5'>
          <div className='flex items-center gap-3'>
            {/* Streak */}
            <div
              className='flex items-center gap-1.5 px-3 py-1.5 rounded-xl'
              style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)' }}
            >
              <span className='fire text-lg'>🔥</span>
              <span className='text-sm font-bold' style={{ color: '#f59e0b' }}>47</span>
            </div>
            {/* XP progress */}
            <div className='flex flex-col'>
              <div className='flex items-center justify-between mb-1'>
                <span className='text-[10px] font-semibold' style={{ color: '#a78bfa' }}>Nivel 12</span>
                <span className='text-[10px]' style={{ color: '#4a5280' }}>1,250 / 1,500 XP</span>
              </div>
              <div className='progress-track' style={{ width: '120px', height: '5px' }}>
                <div className='progress-fill xp-bar' style={{ width: '83%' }} />
              </div>
            </div>
          </div>
          {/* Gems + bell */}
          <div className='flex items-center gap-2'>
            <div
              className='flex items-center gap-1 px-2.5 py-1.5 rounded-xl'
              style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)' }}
            >
              <span className='text-sm'>💎</span>
              <span className='text-sm font-bold' style={{ color: '#818cf8' }}>320</span>
            </div>
            <button
              className='w-8 h-8 rounded-xl flex items-center justify-center'
              style={{ background: 'var(--bg-card2)', border: '1px solid var(--border)' }}
            >
              🔔
            </button>
          </div>
        </div>

        {/* Greeting */}
        <div className='mb-5'>
          <h1 className='text-xl font-black' style={{ color: '#f8fafc' }}>
            ¡Hola, AprenDev! 👋
          </h1>
          <p className='text-sm' style={{ color: '#94a3b8' }}>¿Qué vamos a aprender hoy?</p>
        </div>

        {/* Daily mission */}
        <Link href='/app/desafios'>
          <div
            className='relative rounded-2xl p-4 mb-5 overflow-hidden cursor-pointer transition-opacity hover:opacity-90'
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(99,102,241,0.15))',
              border: '1px solid rgba(139,92,246,0.3)',
            }}
          >
            {/* Glow orb */}
            <div
              className='absolute -right-6 -top-6 w-24 h-24 rounded-full pointer-events-none'
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3), transparent)' }}
            />
            <div className='flex items-start justify-between'>
              <div className='flex-1'>
                <div
                  className='inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-2'
                  style={{ background: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}
                >
                  🏆 Misión diaria
                </div>
                <p className='text-base font-bold mb-1' style={{ color: '#f8fafc' }}>
                  Crea una función que calcule el promedio
                </p>
                <div
                  className='flex items-center gap-3 text-xs'
                  style={{ color: '#94a3b8' }}
                >
                  <span style={{ color: '#4ade80', fontWeight: 700 }}>+50 XP</span>
                  <span>0/1 completado</span>
                </div>
              </div>
              <div
                className='w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ml-3'
                style={{ background: 'rgba(139,92,246,0.3)', border: '1px solid rgba(139,92,246,0.4)' }}
              >
                <svg width='18' height='18' viewBox='0 0 24 24' fill='white'>
                  <polygon points='5 3 19 12 5 21 5 3'/>
                </svg>
              </div>
            </div>
            {/* Progress bar */}
            <div className='progress-track mt-3' style={{ height: '4px' }}>
              <div className='progress-fill' style={{ width: '0%', background: '#8b5cf6' }} />
            </div>
          </div>
        </Link>

        {/* Learning paths */}
        <div className='flex items-center justify-between mb-3'>
          <h2 className='text-sm font-bold' style={{ color: '#f8fafc' }}>Rutas de aprendizaje</h2>
          <Link href='/app/aprender' className='text-xs font-semibold' style={{ color: '#8b5cf6' }}>
            Ver todas
          </Link>
        </div>

        <div className='flex flex-col gap-3 mb-5'>
          {PATHS.map((p) => (
            <Link key={p.id} href={`/app/mapa/${p.id}`}>
              <div
                className='p-4 rounded-2xl flex items-center gap-3 transition-all hover:opacity-90'
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                {/* Icons */}
                <div className='flex -space-x-1'>
                  {p.icons.map((ic, i) => (
                    <span
                      key={i}
                      className='text-base w-7 h-7 rounded-full flex items-center justify-center'
                      style={{ background: 'var(--bg-card2)', border: '2px solid var(--bg-app)' }}
                    >
                      {ic}
                    </span>
                  ))}
                </div>
                {/* Info */}
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center justify-between mb-1.5'>
                    <p className='text-sm font-semibold truncate' style={{ color: '#f8fafc' }}>
                      {p.title}
                    </p>
                    <span className='text-xs ml-2 flex-shrink-0' style={{ color: p.color, fontWeight: 700 }}>
                      Nivel {p.level}
                    </span>
                  </div>
                  <div className='progress-track' style={{ height: '5px' }}>
                    <div
                      className='progress-fill'
                      style={{ width: `${p.progress}%`, background: p.gradient }}
                    />
                  </div>
                  <p className='text-xs mt-1' style={{ color: '#4a5280' }}>{p.progress}% completado</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick stats */}
        <div className='grid grid-cols-3 gap-2.5 mb-4'>
          {[
            { label: 'Racha actual', value: '🔥 47', sub: 'días', color: '#f59e0b' },
            { label: 'XP total', value: '⚡ 8.2k', sub: 'puntos', color: '#8b5cf6' },
            { label: 'Posición', value: '🏆 #5', sub: 'ranking', color: '#22c55e' },
          ].map((s) => (
            <div
              key={s.label}
              className='p-3 rounded-xl text-center'
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <p className='text-base font-black' style={{ color: s.color }}>{s.value}</p>
              <p className='text-[10px] mt-0.5' style={{ color: '#4a5280' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
