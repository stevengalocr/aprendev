import BottomNav from '@/components/app/BottomNav'
import Link from 'next/link'

const BADGES = [
  { icon: '🔥', title: 'Racha 7 días', earned: true },
  { icon: '🚀', title: 'Primer Deploy', earned: true },
  { icon: '⚡', title: 'Experto en JS', earned: true },
  { icon: '🤖', title: 'AI Lover Nv.1', earned: true },
  { icon: '🏆', title: 'Top 10', earned: false },
  { icon: '💎', title: 'Pro Member', earned: false },
]

const STATS_ROW = [
  { label: 'Lecciones completadas', value: '382' },
  { label: 'Desafíos completados', value: '128' },
  { label: 'Proyectos creados', value: '15' },
]

export default function Perfil() {
  return (
    <div className='app-screen'>
      {/* Header */}
      <div
        className='flex items-center justify-between px-4 py-3 flex-shrink-0'
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <h1 className='text-base font-bold' style={{ color: '#f8fafc' }}>Perfil</h1>
        <button
          className='w-8 h-8 rounded-xl flex items-center justify-center'
          style={{ background: 'var(--bg-card2)', border: '1px solid var(--border)' }}
        >
          <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#94a3b8' strokeWidth='2'>
            <circle cx='12' cy='12' r='3'/><path d='M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42'/>
          </svg>
        </button>
      </div>

      <div className='app-content px-4 pt-4'>
        {/* Avatar + name */}
        <div className='flex flex-col items-center mb-5'>
          <div
            className='relative w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-3'
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(99,102,241,0.1))',
              border: '2px solid rgba(139,92,246,0.4)',
              boxShadow: '0 0 24px rgba(139,92,246,0.2)',
            }}
          >
            🐧
            <div
              className='absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-lg flex items-center justify-center text-sm border-2'
              style={{ background: 'var(--bg-app)', borderColor: 'var(--bg-app)' }}
            >
              ✏️
            </div>
          </div>
          <h2 className='text-lg font-black mb-0.5' style={{ color: '#f8fafc' }}>AprenDev</h2>
          <p className='text-sm' style={{ color: '#8b5cf6' }}>Frontend Explorer</p>
        </div>

        {/* Level + XP */}
        <div
          className='p-4 rounded-2xl mb-4'
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <div className='flex items-center justify-between mb-2'>
            <div>
              <p className='text-xs font-semibold mb-0.5' style={{ color: '#8b5cf6' }}>Nivel 12</p>
              <p className='text-2xl font-black gradient-text'>Code Wizard</p>
            </div>
            <div
              className='w-12 h-12 rounded-2xl flex items-center justify-center text-2xl'
              style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)' }}
            >
              🧙
            </div>
          </div>
          <div className='progress-track mb-1' style={{ height: '6px' }}>
            <div className='progress-fill xp-bar' style={{ width: '83%' }} />
          </div>
          <div className='flex justify-between'>
            <p className='text-xs' style={{ color: '#4a5280' }}>1,250 / 1,500 XP</p>
            <p className='text-xs font-semibold' style={{ color: '#8b5cf6' }}>83%</p>
          </div>
        </div>

        {/* Stats row */}
        <div className='grid grid-cols-3 gap-2.5 mb-4'>
          {STATS_ROW.map((s) => (
            <div
              key={s.label}
              className='p-3 rounded-xl text-center'
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <p className='text-xl font-black' style={{ color: '#f8fafc' }}>{s.value}</p>
              <p className='text-[9px] mt-0.5 leading-tight' style={{ color: '#4a5280' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Streak section */}
        <div
          className='flex items-center justify-between p-4 rounded-2xl mb-4'
          style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}
        >
          <div>
            <p className='text-xs mb-0.5' style={{ color: '#4a5280' }}>Coding Streak</p>
            <p className='text-xl font-black flex items-center gap-2' style={{ color: '#f8fafc' }}>
              <span className='fire'>🔥</span> 47 días
            </p>
            <p className='text-xs mt-0.5' style={{ color: '#f59e0b' }}>
              Llevas 47 días construyendo tu futuro.
            </p>
          </div>
          <div className='text-right'>
            <p className='text-[10px]' style={{ color: '#4a5280' }}>Mejor racha</p>
            <p className='text-base font-bold' style={{ color: '#f59e0b' }}>🔥 47 días</p>
          </div>
        </div>

        {/* Badges */}
        <div className='flex items-center justify-between mb-3'>
          <p className='text-sm font-bold' style={{ color: '#f8fafc' }}>Logros</p>
          <span className='text-xs' style={{ color: '#8b5cf6', fontWeight: 600 }}>Ver todos</span>
        </div>
        <div className='grid grid-cols-3 gap-2.5 mb-4'>
          {BADGES.map((b) => (
            <div
              key={b.title}
              className='flex flex-col items-center gap-1.5 p-3 rounded-xl'
              style={{
                background: b.earned ? 'rgba(139,92,246,0.08)' : 'var(--bg-card)',
                border: `1px solid ${b.earned ? 'rgba(139,92,246,0.25)' : 'var(--border)'}`,
                opacity: b.earned ? 1 : 0.4,
              }}
            >
              <span className='text-2xl'>{b.icon}</span>
              <p className='text-[9px] text-center leading-tight' style={{ color: b.earned ? '#94a3b8' : '#4a5280' }}>
                {b.title}
              </p>
            </div>
          ))}
        </div>

        {/* Settings links */}
        {[
          { icon: '💎', label: 'Mis Gems: 320', action: 'Obtener más', color: '#818cf8' },
          { icon: '⚙️', label: 'Configuración', action: '', color: '#94a3b8' },
          { icon: '🚪', label: 'Cerrar sesión', action: '', color: '#ef4444' },
        ].map((item) => (
          <div
            key={item.label}
            className='flex items-center gap-3 px-4 py-3 rounded-xl mb-2 cursor-pointer'
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <span>{item.icon}</span>
            <span className='flex-1 text-sm font-medium' style={{ color: item.color }}>{item.label}</span>
            {item.action && (
              <span className='text-xs font-semibold' style={{ color: '#8b5cf6' }}>{item.action}</span>
            )}
            <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#4a5280' strokeWidth='2'>
              <path d='M9 18l6-6-6-6'/>
            </svg>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}
