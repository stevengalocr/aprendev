'use client'
import BottomNav from '@/components/app/BottomNav'
import Link from 'next/link'
import { useDemoStore } from '@/lib/demo/store'
import { useI18n } from '@/lib/i18n/store'
import { getLevel, getLevelTitle, getXPProgress, formatXP } from '@/lib/utils'

const PATHS = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    icons: ['⚛️', '🌐', '🔷', '⚡'],
    color: '#3b82f6',
    gradient: 'linear-gradient(90deg, #3b82f6, #6366f1)',
  },
  {
    id: 'ai',
    title: 'Inteligencia Artificial',
    icons: ['🐍', '🤖', '🧠'],
    color: '#a855f7',
    gradient: 'linear-gradient(90deg, #a855f7, #ec4899)',
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    icons: ['⚙️', '🍀', '🔴'],
    color: '#f97316',
    gradient: 'linear-gradient(90deg, #f97316, #ef4444)',
  },
]

const DAILY_MISSIONS = [
  { id: 'dm1', title: 'Crea una función que calcule el promedio', xp: 50, lessonId: 'js-functions-1' },
  { id: 'dm2', title: 'Escribe un loop que itere un array', xp: 40, lessonId: 'js-arrays-1' },
  { id: 'dm3', title: 'Define una variable con let y const', xp: 30, lessonId: 'js-vars-1' },
]

function getMission(day: number) {
  return DAILY_MISSIONS[day % DAILY_MISSIONS.length]
}

export default function AppHome() {
  const { state } = useDemoStore()
  const { t } = useI18n()

  const level = getLevel(state.totalXP)
  const xpProgress = getXPProgress(state.totalXP)
  const mission = getMission(state.simulatedDay)
  const missionDone = state.completedChallengeIds.includes(mission.id)

  // Estimate leaderboard position
  const botsAhead = state.bots.filter(b => b.xp > state.totalXP).length
  const position = botsAhead + 1

  // Per-path lesson count as proxy for progress
  const lessonsPerPath = (pathId: string) => {
    const prefixed = state.completedLessons.filter(l => l.lessonId.startsWith(pathId))
    return Math.min(100, prefixed.length * 8)
  }

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
              <span className='text-sm font-bold' style={{ color: '#f59e0b' }}>{state.streak}</span>
            </div>
            {/* XP bar */}
            <div className='flex flex-col'>
              <div className='flex items-center justify-between mb-1'>
                <span className='text-[10px] font-semibold' style={{ color: '#a78bfa' }}>
                  {t('common', 'level')} {level}
                </span>
                <span className='text-[10px]' style={{ color: '#4a5280' }}>
                  {xpProgress.current} / {xpProgress.needed} XP
                </span>
              </div>
              <div className='progress-track' style={{ width: '120px', height: '5px' }}>
                <div className='progress-fill xp-bar' style={{ width: `${xpProgress.percentage}%` }} />
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
              <span className='text-sm font-bold' style={{ color: '#818cf8' }}>{state.gems}</span>
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
            {t('dash', 'greeting', { name: state.username })}
          </h1>
          <p className='text-sm' style={{ color: '#94a3b8' }}>{t('dash', 'subtitle')}</p>
        </div>

        {/* Daily mission */}
        <Link href='/app/desafios'>
          <div
            className='relative rounded-2xl p-4 mb-5 overflow-hidden cursor-pointer transition-opacity hover:opacity-90'
            style={{
              background: missionDone
                ? 'linear-gradient(135deg, rgba(74,222,128,0.15), rgba(34,197,94,0.1))'
                : 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(99,102,241,0.15))',
              border: `1px solid ${missionDone ? 'rgba(74,222,128,0.3)' : 'rgba(139,92,246,0.3)'}`,
            }}
          >
            <div className='absolute -right-6 -top-6 w-24 h-24 rounded-full pointer-events-none'
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3), transparent)' }} />
            <div className='flex items-start justify-between'>
              <div className='flex-1'>
                <div
                  className='inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-2'
                  style={{ background: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}
                >
                  🏆 {t('dash', 'dailyMission')}
                </div>
                <p className='text-base font-bold mb-1' style={{ color: '#f8fafc' }}>
                  {mission.title}
                </p>
                <div className='flex items-center gap-3 text-xs' style={{ color: '#94a3b8' }}>
                  <span style={{ color: '#4ade80', fontWeight: 700 }}>+{mission.xp} XP</span>
                  <span>{missionDone ? '1/1 completado ✓' : '0/1 completado'}</span>
                </div>
              </div>
              <div
                className='w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ml-3'
                style={{ background: 'rgba(139,92,246,0.3)', border: '1px solid rgba(139,92,246,0.4)' }}
              >
                {missionDone
                  ? <span style={{ fontSize: 18 }}>✓</span>
                  : <svg width='18' height='18' viewBox='0 0 24 24' fill='white'><polygon points='5 3 19 12 5 21 5 3'/></svg>
                }
              </div>
            </div>
            <div className='progress-track mt-3' style={{ height: '4px' }}>
              <div className='progress-fill' style={{
                width: missionDone ? '100%' : '0%',
                background: missionDone ? '#4ade80' : '#8b5cf6',
              }} />
            </div>
          </div>
        </Link>

        {/* Learning paths */}
        <div className='flex items-center justify-between mb-3'>
          <h2 className='text-sm font-bold' style={{ color: '#f8fafc' }}>{t('dash', 'learningPaths')}</h2>
          <Link href='/app/aprender' className='text-xs font-semibold' style={{ color: '#8b5cf6' }}>
            {t('dash', 'viewAll')}
          </Link>
        </div>

        <div className='flex flex-col gap-3 mb-5'>
          {PATHS.map((p) => {
            const progress = lessonsPerPath(p.id)
            const lvl = Math.max(1, Math.floor(progress / 12) + 1)
            return (
              <Link key={p.id} href={`/app/mapa/${p.id}`}>
                <div
                  className='p-4 rounded-2xl flex items-center gap-3 transition-all hover:opacity-90'
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <div className='flex -space-x-1'>
                    {p.icons.map((ic, i) => (
                      <span key={i} className='text-base w-7 h-7 rounded-full flex items-center justify-center'
                        style={{ background: 'var(--bg-card2)', border: '2px solid var(--bg-app)' }}>
                        {ic}
                      </span>
                    ))}
                  </div>
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center justify-between mb-1.5'>
                      <p className='text-sm font-semibold truncate' style={{ color: '#f8fafc' }}>{p.title}</p>
                      <span className='text-xs ml-2 flex-shrink-0' style={{ color: p.color, fontWeight: 700 }}>
                        {t('common', 'level')} {lvl}
                      </span>
                    </div>
                    <div className='progress-track' style={{ height: '5px' }}>
                      <div className='progress-fill' style={{ width: `${Math.max(2, progress)}%`, background: p.gradient }} />
                    </div>
                    <p className='text-xs mt-1' style={{ color: '#4a5280' }}>{Math.max(2, progress)}% completado</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Quick stats */}
        <div className='grid grid-cols-3 gap-2.5 mb-4'>
          <StatCard label={t('dash', 'streak')} value={`🔥 ${state.streak}`} sub={t('dash', 'days')} color='#f59e0b' />
          <StatCard label={t('dash', 'totalXP')} value={`⚡ ${formatXP(state.totalXP)}`} sub={t('dash', 'points')} color='#8b5cf6' />
          <StatCard label={t('dash', 'position')} value={`🏆 #${position}`} sub='ranking' color='#22c55e' />
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

function StatCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div className='p-3 rounded-xl text-center' style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
      <p className='text-base font-black' style={{ color }}>{value}</p>
      <p className='text-[10px] mt-0.5' style={{ color: '#4a5280' }}>{label}</p>
    </div>
  )
}
