import BottomNav from '@/components/app/BottomNav'

const TOP3 = [
  { rank: 1, name: 'AnaDev', avatar: '👩‍💻', xp: 2450, badge: '🥇', size: 'large' },
  { rank: 2, name: 'CodeMaster', avatar: '🧑‍💻', xp: 2100, badge: '🥈', size: 'medium' },
  { rank: 3, name: 'DevKing', avatar: '👨‍💻', xp: 1870, badge: '🥉', size: 'small' },
]

const REST = [
  { rank: 4, name: 'ProgramadorX', avatar: '🐱‍💻', xp: 1650, me: false },
  { rank: 5, name: 'AprenDev', avatar: '🐧', xp: 1250, me: true },
  { rank: 6, name: 'YoungDev', avatar: '🧑‍🎓', xp: 980, me: false },
  { rank: 7, name: 'ScriptBoi', avatar: '📜', xp: 870, me: false },
  { rank: 8, name: 'ByteWizard', avatar: '🧙', xp: 760, me: false },
]

export default function Ranking() {
  return (
    <div className='app-screen'>
      <div className='app-content px-4 pt-5'>
        {/* Header */}
        <h1 className='text-xl font-black mb-1' style={{ color: '#f8fafc' }}>Ranking Semanal</h1>
        <p className='text-sm mb-2' style={{ color: '#94a3b8' }}>
          La temporada termina en 3 días
        </p>

        {/* Countdown bar */}
        <div
          className='flex items-center gap-2 px-3 py-2 rounded-xl mb-5'
          style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}
        >
          <span className='fire text-sm'>🔥</span>
          <p className='text-xs' style={{ color: '#f59e0b' }}>
            Top 10 esta semana ganan <strong>💎 200 Gems extra</strong>
          </p>
        </div>

        {/* Top 3 podium */}
        <div className='flex items-end justify-center gap-3 mb-6'>
          {/* 2nd place */}
          <PodiumCard entry={TOP3[1]} />
          {/* 1st place */}
          <PodiumCard entry={TOP3[0]} />
          {/* 3rd place */}
          <PodiumCard entry={TOP3[2]} />
        </div>

        {/* Rest of ranking */}
        <div className='flex flex-col gap-2'>
          {REST.map((entry) => (
            <div
              key={entry.rank}
              className='flex items-center gap-3 px-4 py-3 rounded-2xl transition-all'
              style={{
                background: entry.me ? 'rgba(139,92,246,0.12)' : 'var(--bg-card)',
                border: `1.5px solid ${entry.me ? 'rgba(139,92,246,0.4)' : 'var(--border)'}`,
              }}
            >
              <span
                className='text-base font-black w-6 text-center flex-shrink-0'
                style={{ color: '#4a5280' }}
              >
                {entry.rank}
              </span>
              <div
                className='w-9 h-9 rounded-full flex items-center justify-center text-xl flex-shrink-0'
                style={{ background: entry.me ? 'rgba(139,92,246,0.2)' : 'var(--bg-card2)', border: `1px solid ${entry.me ? 'rgba(139,92,246,0.3)' : 'var(--border)'}` }}
              >
                {entry.avatar}
              </div>
              <div className='flex-1'>
                <p
                  className='text-sm font-bold'
                  style={{ color: entry.me ? '#a78bfa' : '#f8fafc' }}
                >
                  {entry.name}
                  {entry.me && (
                    <span
                      className='ml-2 text-[10px] px-1.5 py-0.5 rounded-md font-semibold'
                      style={{ background: 'rgba(139,92,246,0.2)', color: '#8b5cf6' }}
                    >
                      Tú
                    </span>
                  )}
                </p>
                {/* Mini progress */}
                <div className='progress-track mt-1' style={{ height: '3px', maxWidth: '100px' }}>
                  <div
                    className='progress-fill xp-bar'
                    style={{ width: `${(entry.xp / 2500) * 100}%` }}
                  />
                </div>
              </div>
              <p className='text-sm font-black flex-shrink-0' style={{ color: entry.me ? '#a78bfa' : '#94a3b8' }}>
                {entry.xp.toLocaleString()} XP
              </p>
            </div>
          ))}
        </div>

        <p className='text-center text-xs mt-4 mb-2' style={{ color: '#4a5280' }}>
          Practica más para subir al top 3 🏆
        </p>
      </div>

      <BottomNav />
    </div>
  )
}

function PodiumCard({
  entry,
}: {
  entry: { rank: number; name: string; avatar: string; xp: number; badge: string; size: string }
}) {
  const isFirst = entry.rank === 1
  const heights: Record<string, number> = { large: 100, medium: 80, small: 64 }
  const h = heights[entry.size] ?? 80

  return (
    <div className='flex flex-col items-center gap-1.5' style={{ minWidth: '80px' }}>
      {isFirst && <span className='text-xl'>👑</span>}

      {/* Avatar */}
      <div
        className='w-14 h-14 rounded-2xl flex items-center justify-center text-2xl relative'
        style={{
          background: isFirst
            ? 'rgba(245,158,11,0.2)'
            : entry.rank === 2
              ? 'rgba(148,163,184,0.15)'
              : 'rgba(180,120,60,0.15)',
          border: `2px solid ${isFirst ? 'rgba(245,158,11,0.5)' : entry.rank === 2 ? 'rgba(148,163,184,0.3)' : 'rgba(180,120,60,0.3)'}`,
          boxShadow: isFirst ? '0 0 20px rgba(245,158,11,0.25)' : 'none',
        }}
      >
        {entry.avatar}
        <span className='absolute -top-2 -right-2 text-sm'>{entry.badge}</span>
      </div>

      {/* Name */}
      <p className='text-[11px] font-bold text-center leading-tight' style={{ color: '#f8fafc' }}>
        {entry.name}
      </p>
      <p className='text-[10px]' style={{ color: isFirst ? '#f59e0b' : '#94a3b8' }}>
        {entry.xp.toLocaleString()} XP
      </p>

      {/* Podium block */}
      <div
        className='w-20 rounded-t-xl flex items-center justify-center'
        style={{
          height: `${h}px`,
          background: isFirst
            ? 'linear-gradient(to top, rgba(245,158,11,0.3), rgba(245,158,11,0.1))'
            : entry.rank === 2
              ? 'linear-gradient(to top, rgba(148,163,184,0.2), rgba(148,163,184,0.05))'
              : 'linear-gradient(to top, rgba(180,120,60,0.2), rgba(180,120,60,0.05))',
          border: `1px solid ${isFirst ? 'rgba(245,158,11,0.3)' : 'var(--border)'}`,
          borderBottom: 'none',
        }}
      >
        <span className='text-2xl font-black' style={{ color: isFirst ? '#f59e0b' : '#4a5280' }}>
          {entry.rank}
        </span>
      </div>
    </div>
  )
}
