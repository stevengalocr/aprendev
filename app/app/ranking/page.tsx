'use client'
import BottomNav from '@/components/app/BottomNav'
import { useDemoStore } from '@/lib/demo/store'
import { useI18n } from '@/lib/i18n/store'
import { getLeaderboard } from '@/lib/demo/engine'
import { getLevel } from '@/lib/utils'

export default function Ranking() {
  const { state } = useDemoStore()
  const { t } = useI18n()

  const board = getLeaderboard(state)
  const top3Ordered = [
    board.find(e => e.rank === 2),
    board.find(e => e.rank === 1),
    board.find(e => e.rank === 3),
  ].filter(Boolean) as typeof board

  const rest = board.filter(e => e.rank >= 4 && e.rank <= 10)
  const seasonDays = 7 - (state.simulatedDay % 7)
  const maxXP = Math.max(...board.map(e => e.xp), 1)

  return (
    <div className='app-screen'>
      <div className='app-content px-4 pt-5'>
        <h1 className='text-xl font-black mb-1' style={{ color: '#f8fafc' }}>
          {t('ranking', 'title')}
        </h1>
        <p className='text-sm mb-2' style={{ color: '#94a3b8' }}>
          {t('ranking', 'seasonEnds', { days: seasonDays })}
        </p>

        {/* Reward banner */}
        <div
          className='flex items-center gap-2 px-3 py-2 rounded-xl mb-5'
          style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}
        >
          <span className='fire text-sm'>🔥</span>
          <p className='text-xs' style={{ color: '#f59e0b' }}>
            Top 10 esta semana ganan <strong>💎 200 Gems extra</strong>
          </p>
        </div>

        {/* Podium */}
        <div className='flex items-end justify-center gap-3 mb-6'>
          {top3Ordered.map((entry) => {
            const badges = ['🥇', '🥈', '🥉']
            const heights = [80, 100, 64]
            const posOrder = top3Ordered.indexOf(entry)
            return (
              <div key={entry.id} className='flex flex-col items-center gap-1.5' style={{ minWidth: '80px' }}>
                {entry.rank === 1 && <span className='text-xl'>👑</span>}

                <div
                  className='w-14 h-14 rounded-2xl flex items-center justify-center text-2xl relative'
                  style={{
                    background: entry.rank === 1 ? 'rgba(245,158,11,0.2)' : entry.rank === 2 ? 'rgba(148,163,184,0.15)' : 'rgba(180,120,60,0.15)',
                    border: `2px solid ${entry.rank === 1 ? 'rgba(245,158,11,0.5)' : entry.rank === 2 ? 'rgba(148,163,184,0.3)' : 'rgba(180,120,60,0.3)'}`,
                    boxShadow: entry.rank === 1 ? '0 0 20px rgba(245,158,11,0.25)' : 'none',
                  }}
                >
                  {entry.avatar}
                  <span className='absolute -top-2 -right-2 text-sm'>{badges[entry.rank - 1]}</span>
                </div>

                <p className='text-[11px] font-bold text-center leading-tight' style={{ color: entry.isMe ? '#a78bfa' : '#f8fafc' }}>
                  {entry.username}
                  {entry.isMe && ' ← Tú'}
                </p>
                <p className='text-[10px]' style={{ color: entry.rank === 1 ? '#f59e0b' : '#94a3b8' }}>
                  {entry.xp.toLocaleString()} XP
                </p>

                <div
                  className='w-20 rounded-t-xl flex items-center justify-center'
                  style={{
                    height: `${heights[posOrder]}px`,
                    background: entry.rank === 1 ? 'linear-gradient(to top, rgba(245,158,11,0.3), rgba(245,158,11,0.1))' : entry.rank === 2 ? 'linear-gradient(to top, rgba(148,163,184,0.2), rgba(148,163,184,0.05))' : 'linear-gradient(to top, rgba(180,120,60,0.2), rgba(180,120,60,0.05))',
                    border: `1px solid ${entry.rank === 1 ? 'rgba(245,158,11,0.3)' : 'var(--border)'}`,
                    borderBottom: 'none',
                  }}
                >
                  <span className='text-2xl font-black' style={{ color: entry.rank === 1 ? '#f59e0b' : '#4a5280' }}>
                    {entry.rank}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Rest of list */}
        <div className='flex flex-col gap-2'>
          {rest.map((entry) => (
            <div
              key={entry.id}
              className='flex items-center gap-3 px-4 py-3 rounded-2xl transition-all'
              style={{
                background: entry.isMe ? 'rgba(139,92,246,0.12)' : 'var(--bg-card)',
                border: `1.5px solid ${entry.isMe ? 'rgba(139,92,246,0.4)' : 'var(--border)'}`,
              }}
            >
              <span className='text-base font-black w-6 text-center flex-shrink-0' style={{ color: '#4a5280' }}>
                {entry.rank}
              </span>
              <div
                className='w-9 h-9 rounded-full flex items-center justify-center text-xl flex-shrink-0'
                style={{
                  background: entry.isMe ? 'rgba(139,92,246,0.2)' : 'var(--bg-card2)',
                  border: `1px solid ${entry.isMe ? 'rgba(139,92,246,0.3)' : 'var(--border)'}`,
                }}
              >
                {entry.avatar}
              </div>
              <div className='flex-1'>
                <p className='text-sm font-bold' style={{ color: entry.isMe ? '#a78bfa' : '#f8fafc' }}>
                  {entry.username}
                  {entry.isMe && (
                    <span
                      className='ml-2 text-[10px] px-1.5 py-0.5 rounded-md font-semibold'
                      style={{ background: 'rgba(139,92,246,0.2)', color: '#8b5cf6' }}
                    >
                      {t('ranking', 'you')}
                    </span>
                  )}
                </p>
                <div className='progress-track mt-1' style={{ height: '3px', maxWidth: '100px' }}>
                  <div
                    className='progress-fill xp-bar'
                    style={{ width: `${(entry.xp / maxXP) * 100}%` }}
                  />
                </div>
              </div>
              <p className='text-sm font-black flex-shrink-0' style={{ color: entry.isMe ? '#a78bfa' : '#94a3b8' }}>
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
