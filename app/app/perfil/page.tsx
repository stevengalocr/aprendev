'use client'
import BottomNav from '@/components/app/BottomNav'
import { useDemoStore } from '@/lib/demo/store'
import { useI18n } from '@/lib/i18n/store'
import { getLevel, getLevelTitle, getXPProgress } from '@/lib/utils'
import { BADGES } from '@/lib/demo/engine'

const LEVEL_ICONS: Record<string, string> = {
  'Bug Hunter': '🐛', 'Script Kiddie': '📜', 'Junior Dev': '💻',
  'Code Wizard': '🧙', 'Senior Dev': '⚙️', 'Tech Lead': '🚀',
  'Architect': '🏗️', 'Principal': '👑', 'CTO': '🌟', 'Legend': '🔱',
}

export default function Perfil() {
  const { state } = useDemoStore()
  const { t } = useI18n()

  const level = getLevel(state.totalXP)
  const title = getLevelTitle(level)
  const xpProgress = getXPProgress(state.totalXP)
  const levelIcon = LEVEL_ICONS[title] ?? '⚡'

  const earnedBadges = BADGES.map(b => ({
    ...b,
    locked: !state.unlockedBadgeIds.includes(b.id),
  }))

  return (
    <div className='app-screen'>
      {/* Header */}
      <div
        className='flex items-center justify-between px-4 py-3 flex-shrink-0'
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <h1 className='text-base font-bold' style={{ color: '#f8fafc' }}>{t('profile', 'title')}</h1>
        <button
          className='w-8 h-8 rounded-xl flex items-center justify-center'
          style={{ background: 'var(--bg-card2)', border: '1px solid var(--border)' }}
        >
          <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#94a3b8' strokeWidth='2'>
            <circle cx='12' cy='12' r='3'/>
            <path d='M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42'/>
          </svg>
        </button>
      </div>

      <div className='app-content px-4 pt-4'>
        {/* Avatar */}
        <div className='flex flex-col items-center mb-5'>
          <div
            className='relative w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-3'
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(99,102,241,0.1))',
              border: '2px solid rgba(139,92,246,0.4)',
              boxShadow: '0 0 24px rgba(139,92,246,0.2)',
            }}
          >
            {state.avatar}
            <div
              className='absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-lg flex items-center justify-center text-sm border-2'
              style={{ background: 'var(--bg-app)', borderColor: 'var(--bg-app)' }}
            >
              ✏️
            </div>
          </div>
          <h2 className='text-lg font-black mb-0.5' style={{ color: '#f8fafc' }}>{state.username}</h2>
          <p className='text-sm' style={{ color: '#8b5cf6' }}>{title}</p>
        </div>

        {/* Level + XP */}
        <div
          className='p-4 rounded-2xl mb-4'
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <div className='flex items-center justify-between mb-2'>
            <div>
              <p className='text-xs font-semibold mb-0.5' style={{ color: '#8b5cf6' }}>
                {t('common', 'level')} {level}
              </p>
              <p className='text-2xl font-black gradient-text'>{title}</p>
            </div>
            <div
              className='w-12 h-12 rounded-2xl flex items-center justify-center text-2xl'
              style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)' }}
            >
              {levelIcon}
            </div>
          </div>
          <div className='progress-track mb-1' style={{ height: '6px' }}>
            <div className='progress-fill xp-bar' style={{ width: `${xpProgress.percentage}%` }} />
          </div>
          <div className='flex justify-between'>
            <p className='text-xs' style={{ color: '#4a5280' }}>
              {xpProgress.current} / {xpProgress.needed} XP
            </p>
            <p className='text-xs font-semibold' style={{ color: '#8b5cf6' }}>{xpProgress.percentage}%</p>
          </div>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-3 gap-2.5 mb-4'>
          {[
            { label: t('profile', 'lessons'), value: state.completedLessons.length },
            { label: t('profile', 'challenges'), value: state.completedChallengeIds.length },
            { label: 'Badges', value: state.unlockedBadgeIds.length },
          ].map((s) => (
            <div key={s.label} className='p-3 rounded-xl text-center' style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <p className='text-xl font-black' style={{ color: '#f8fafc' }}>{s.value}</p>
              <p className='text-[9px] mt-0.5 leading-tight' style={{ color: '#4a5280' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Streak */}
        <div
          className='flex items-center justify-between p-4 rounded-2xl mb-4'
          style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}
        >
          <div>
            <p className='text-xs mb-0.5' style={{ color: '#4a5280' }}>Coding Streak</p>
            <p className='text-xl font-black flex items-center gap-2' style={{ color: '#f8fafc' }}>
              <span className='fire'>🔥</span> {state.streak} {t('profile', 'streak')}
            </p>
            <p className='text-xs mt-0.5' style={{ color: '#f59e0b' }}>
              {t('profile', 'streakMessage', { days: state.streak })}
            </p>
          </div>
          <div className='text-right'>
            <p className='text-[10px]' style={{ color: '#4a5280' }}>Mejor racha</p>
            <p className='text-base font-bold' style={{ color: '#f59e0b' }}>🔥 {state.longestStreak} días</p>
          </div>
        </div>

        {/* Badges */}
        <div className='flex items-center justify-between mb-3'>
          <p className='text-sm font-bold' style={{ color: '#f8fafc' }}>{t('profile', 'achievements')}</p>
          <span className='text-xs' style={{ color: '#8b5cf6', fontWeight: 600 }}>{t('profile', 'viewAll')}</span>
        </div>
        <div className='grid grid-cols-4 gap-2 mb-4'>
          {earnedBadges.map((b) => (
            <div
              key={b.id}
              className='flex flex-col items-center gap-1 p-2.5 rounded-xl'
              style={{
                background: !b.locked ? 'rgba(139,92,246,0.08)' : 'var(--bg-card)',
                border: `1px solid ${!b.locked ? 'rgba(139,92,246,0.25)' : 'var(--border)'}`,
                opacity: !b.locked ? 1 : 0.35,
              }}
            >
              <span className='text-2xl'>{b.icon}</span>
              <p className='text-[8px] text-center leading-tight' style={{ color: !b.locked ? '#94a3b8' : '#4a5280' }}>
                {b.name}
              </p>
            </div>
          ))}
        </div>

        {/* Settings links */}
        {[
          { icon: '💎', label: `Mis Gems: ${state.gems}`, action: 'Obtener más', color: '#818cf8' },
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
