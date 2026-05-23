'use client'
import BottomNav from '@/components/app/BottomNav'
import { useState, useEffect } from 'react'

const WEEK_DAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
const WEEK_STATUS = [true, true, true, true, true, false]

function useCountdown(target: number) {
  const [remaining, setRemaining] = useState(target)
  useEffect(() => {
    const i = setInterval(() => setRemaining((r) => (r > 0 ? r - 1 : 0)), 1000)
    return () => clearInterval(i)
  }, [])
  const h = Math.floor(remaining / 3600).toString().padStart(2, '0')
  const m = Math.floor((remaining % 3600) / 60).toString().padStart(2, '0')
  const s = (remaining % 60).toString().padStart(2, '0')
  return `${h}:${m}:${s}`
}

export default function Desafios() {
  const countdown = useCountdown(85632)

  return (
    <div className='app-screen'>
      <div className='app-content px-4 pt-5'>
        <h1 className='text-xl font-black mb-1' style={{ color: '#f8fafc' }}>Desafíos</h1>
        <p className='text-sm mb-5' style={{ color: '#94a3b8' }}>Retos diarios y misiones especiales</p>

        {/* Daily challenge card */}
        <div
          className='relative rounded-2xl p-5 mb-5 overflow-hidden'
          style={{ background: 'var(--bg-card)', border: '1px solid rgba(139,92,246,0.3)' }}
        >
          {/* BG decoration */}
          <div
            className='absolute right-0 top-0 bottom-0 w-32 pointer-events-none'
            style={{
              background: 'radial-gradient(ellipse at right center, rgba(139,92,246,0.15), transparent)',
            }}
          />

          {/* Header row */}
          <div className='flex items-center justify-between mb-3'>
            <div
              className='flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full'
              style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)' }}
            >
              ← Desafío Diario
            </div>
            <div
              className='flex items-center gap-1 text-sm font-black px-2.5 py-1 rounded-xl'
              style={{ background: 'rgba(239,68,68,0.12)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }}
            >
              🔥 {countdown}
            </div>
          </div>

          {/* Challenge info */}
          <h2 className='text-lg font-black mb-1.5' style={{ color: '#f8fafc' }}>
            Reto: Conversor de Temperatura
          </h2>
          <p className='text-xs mb-4' style={{ color: '#94a3b8' }}>
            Crea una función que convierta de Celsius a Fahrenheit.
          </p>

          {/* Rewards */}
          <div className='flex items-center gap-3 mb-4'>
            <p className='text-xs font-semibold' style={{ color: '#4a5280' }}>Recompensa:</p>
            <div
              className='flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold'
              style={{ background: 'rgba(139,92,246,0.15)', color: '#a78bfa' }}
            >
              ⚡ XP 60
            </div>
            <div
              className='flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold'
              style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8' }}
            >
              💎 30
            </div>
          </div>

          <button className='btn-primary w-full py-3 rounded-xl text-sm'>
            Comenzar desafío →
          </button>
        </div>

        {/* Week streak */}
        <div
          className='rounded-2xl p-4 mb-5'
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <div className='flex items-center justify-between mb-3'>
            <p className='text-sm font-bold' style={{ color: '#f8fafc' }}>Desafíos completados</p>
            <span className='text-xs' style={{ color: '#8b5cf6', fontWeight: 600 }}>Ver todos</span>
          </div>

          <div className='grid grid-cols-6 gap-2 mb-3'>
            {WEEK_DAYS.map((d, i) => (
              <div key={d} className='flex flex-col items-center gap-1.5'>
                <div
                  className='w-9 h-9 rounded-xl flex items-center justify-center text-sm'
                  style={{
                    background: WEEK_STATUS[i] ? 'rgba(34,197,94,0.15)' : 'var(--bg-card2)',
                    border: `1.5px solid ${WEEK_STATUS[i] ? 'rgba(34,197,94,0.4)' : 'var(--border)'}`,
                  }}
                >
                  {WEEK_STATUS[i] ? '✅' : '⬜'}
                </div>
                <p className='text-[9px]' style={{ color: '#4a5280' }}>{d}</p>
              </div>
            ))}
          </div>

          {/* Streak info */}
          <div
            className='flex items-center justify-between pt-3'
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <div className='text-center'>
              <p className='text-sm font-black' style={{ color: '#f59e0b' }}>🔥 47 días</p>
              <p className='text-[10px]' style={{ color: '#4a5280' }}>Racha actual</p>
            </div>
            <div
              className='w-px h-8'
              style={{ background: 'var(--border)' }}
            />
            <div className='text-center'>
              <p className='text-sm font-black' style={{ color: '#f59e0b' }}>🔥 47 días</p>
              <p className='text-[10px]' style={{ color: '#4a5280' }}>Tu mejor racha</p>
            </div>
          </div>
        </div>

        {/* More challenges */}
        <p className='text-sm font-bold mb-3' style={{ color: '#f8fafc' }}>Más desafíos</p>
        {[
          { title: 'Ordena el array', diff: 'Fácil', xp: 30, color: '#22c55e', done: true },
          { title: 'Async/Await maze', diff: 'Difícil', xp: 100, color: '#ef4444', done: false },
          { title: 'Prompt engineering', diff: 'Medio', xp: 60, color: '#f59e0b', done: false },
        ].map((c) => (
          <div
            key={c.title}
            className='flex items-center gap-3 p-3.5 rounded-2xl mb-2.5'
            style={{ background: 'var(--bg-card)', border: `1px solid ${c.done ? 'rgba(34,197,94,0.2)' : 'var(--border)'}` }}
          >
            <div
              className='w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0'
              style={{ background: c.done ? 'rgba(34,197,94,0.15)' : `${c.color}15` }}
            >
              {c.done ? '✅' : '🎯'}
            </div>
            <div className='flex-1'>
              <p className='text-sm font-semibold' style={{ color: c.done ? '#94a3b8' : '#f8fafc', textDecoration: c.done ? 'line-through' : 'none' }}>
                {c.title}
              </p>
              <div className='flex items-center gap-2 mt-0.5'>
                <span className='text-[10px] font-bold px-1.5 py-0.5 rounded-md' style={{ background: `${c.color}18`, color: c.color }}>
                  {c.diff}
                </span>
                <span className='text-[10px]' style={{ color: '#4a5280' }}>+{c.xp} XP</span>
              </div>
            </div>
            {!c.done && (
              <div
                className='w-7 h-7 rounded-xl flex items-center justify-center'
                style={{ background: 'rgba(139,92,246,0.15)' }}
              >
                <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='#8b5cf6' strokeWidth='2.5'>
                  <path d='M9 18l6-6-6-6'/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}
