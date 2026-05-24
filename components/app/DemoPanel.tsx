'use client'
import { useState } from 'react'
import { useDemoStore } from '@/lib/demo/store'
import { useI18n } from '@/lib/i18n/store'
import { getLevel, getLevelTitle } from '@/lib/utils'
import { LOCALES } from '@/lib/i18n'

export default function DemoPanel() {
  const [open, setOpen] = useState(false)
  const { state, advanceDay, resetDemo } = useDemoStore()
  const { locale, setLocale, t } = useI18n()

  const level = getLevel(state.totalXP)

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        className='fixed bottom-24 right-3 z-50 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110'
        style={{
          background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
          border: '1px solid rgba(139,92,246,0.5)',
          fontSize: '18px',
        }}
        title='Panel Demo'
      >
        🎮
      </button>

      {/* Panel */}
      {open && (
        <div
          className='fixed bottom-36 right-3 z-50 w-64 rounded-2xl shadow-2xl overflow-hidden'
          style={{
            background: 'rgba(10,12,26,0.97)',
            border: '1px solid rgba(139,92,246,0.3)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Header */}
          <div
            className='flex items-center justify-between px-4 py-3'
            style={{ borderBottom: '1px solid rgba(139,92,246,0.2)' }}
          >
            <span className='text-xs font-bold uppercase tracking-wider' style={{ color: '#8b5cf6' }}>
              🎮 {t('demo', 'title')}
            </span>
            <button onClick={() => setOpen(false)} style={{ color: '#4a5280', fontSize: 14 }}>✕</button>
          </div>

          <div className='p-4 flex flex-col gap-3'>
            {/* Stats */}
            <div className='grid grid-cols-2 gap-2 text-xs'>
              <Stat label={t('demo', 'day')} value={`#${state.simulatedDay}`} />
              <Stat label='Streak' value={`🔥 ${state.streak}`} />
              <Stat label='XP' value={`⚡ ${state.totalXP}`} />
              <Stat label='Nivel' value={`${level} · ${getLevelTitle(level)}`} />
            </div>

            {/* Time controls */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 12 }}>
              <p className='text-[10px] uppercase tracking-wider mb-2' style={{ color: '#4a5280' }}>
                Control de tiempo
              </p>
              <div className='flex gap-2'>
                <button
                  onClick={() => advanceDay(1)}
                  className='flex-1 py-2 rounded-xl text-xs font-bold transition-all hover:opacity-80'
                  style={{ background: 'rgba(139,92,246,0.2)', color: '#a78bfa', border: '1px solid rgba(139,92,246,0.3)' }}
                >
                  +1 día
                </button>
                <button
                  onClick={() => advanceDay(7)}
                  className='flex-1 py-2 rounded-xl text-xs font-bold transition-all hover:opacity-80'
                  style={{ background: 'rgba(99,102,241,0.2)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.3)' }}
                >
                  +7 días
                </button>
                <button
                  onClick={() => advanceDay(30)}
                  className='flex-1 py-2 rounded-xl text-xs font-bold transition-all hover:opacity-80'
                  style={{ background: 'rgba(59,130,246,0.2)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.3)' }}
                >
                  +30d
                </button>
              </div>
            </div>

            {/* Language selector */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 12 }}>
              <p className='text-[10px] uppercase tracking-wider mb-2' style={{ color: '#4a5280' }}>
                Idioma / Language
              </p>
              <div className='flex gap-1.5'>
                {LOCALES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => setLocale(l.code)}
                    className='flex-1 py-1.5 rounded-lg text-xs font-bold transition-all'
                    style={{
                      background: locale === l.code ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${locale === l.code ? 'rgba(139,92,246,0.5)' : 'rgba(255,255,255,0.08)'}`,
                      color: locale === l.code ? '#a78bfa' : '#4a5280',
                    }}
                  >
                    {l.flag}
                  </button>
                ))}
              </div>
            </div>

            {/* Reset */}
            <button
              onClick={() => { if (confirm('¿Resetear todo el progreso del demo?')) resetDemo() }}
              className='w-full py-2 rounded-xl text-xs font-bold transition-all hover:opacity-80'
              style={{ background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }}
            >
              🗑️ {t('demo', 'reset')}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div
      className='p-2 rounded-xl'
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <p className='text-[9px] uppercase tracking-wide mb-0.5' style={{ color: '#4a5280' }}>{label}</p>
      <p className='text-xs font-bold' style={{ color: '#f8fafc' }}>{value}</p>
    </div>
  )
}
