'use client'
import { useState } from 'react'

const STREAK_DAYS = Array.from({ length: 21 }, (_, i) => ({
  day: i + 1,
  done: i < 14,
  today: i === 13,
}))

const MASCOT_MOODS = [
  { days: 0, mood: '😴', msg: '¿Dormiste bien? No pasa nada, pero mañana practicamos.', color: '#8b949e' },
  { days: 1, mood: '🙂', msg: 'Buen comienzo. Un día no hace racha, pero algo es algo.', color: '#4ade80' },
  { days: 7, mood: '😤', msg: '¡Una semana! El pingüino está orgulloso. No lo decepciones.', color: '#f59e0b' },
  { days: 14, mood: '🔥', msg: '2 semanas seguidas. Ya eres oficialmente un dev con hábito.', color: '#f97316' },
  { days: 30, mood: '🤯', msg: 'Un mes. La consistencia es tu superpoder. Eres imparable.', color: '#a855f7' },
  { days: 100, mood: '👑', msg: '100 días. Eso no lo tiene casi nadie. Eres una leyenda.', color: '#eab308' },
]

export default function StreakSection() {
  const [hoverDay, setHoverDay] = useState<number | null>(null)

  return (
    <section
      className='py-24 px-4 sm:px-6'
      style={{ background: 'var(--bg)' }}
    >
      <div className='max-w-5xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left: copy */}
          <div>
            <div className='badge-green inline-block mb-4'>El feature más poderoso</div>
            <h2
              className='text-3xl sm:text-4xl font-black mb-4 leading-tight'
              style={{ color: '#f0f6fc' }}
            >
              El Coding Streak que{' '}
              <span className='gradient-text'>vive en tu cabeza</span>
            </h2>
            <p className='text-lg mb-6 leading-relaxed' style={{ color: '#8b949e' }}>
              Duolingo descubrió algo poderoso: <strong style={{ color: '#f0f6fc' }}>perder una racha duele más
              que ganarla da placer.</strong> Eso es neurociencia del hábito.
            </p>
            <p className='text-lg mb-8 leading-relaxed' style={{ color: '#8b949e' }}>
              En Aprendev, tu Coding Streak no es solo un número.
              Es la prueba diaria de que te estás convirtiendo en el developer
              que querías ser cuando abriste tu primera terminal.
            </p>

            {/* Mood table */}
            <div
              className='rounded-2xl p-5'
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <p className='text-xs font-semibold mb-4 uppercase tracking-wider' style={{ color: '#484f58' }}>
                El pingüino según tu racha
              </p>
              <div className='flex flex-col gap-3'>
                {MASCOT_MOODS.slice(0, 4).map((m) => (
                  <div key={m.days} className='flex items-start gap-3'>
                    <span className='text-2xl'>{m.mood}</span>
                    <div>
                      <span
                        className='text-xs font-bold'
                        style={{ color: m.color }}
                      >
                        {m.days === 0 ? 'Día 0' : `${m.days}+ días`}
                      </span>
                      <p className='text-xs mt-0.5' style={{ color: '#8b949e' }}>{m.msg}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: streak calendar visual */}
          <div>
            {/* Header */}
            <div
              className='rounded-t-2xl p-5 flex items-center justify-between'
              style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}
            >
              <div>
                <p className='text-xs font-medium mb-0.5' style={{ color: '#8b949e' }}>
                  Tu Coding Streak
                </p>
                <div className='flex items-center gap-2'>
                  <span className='text-3xl font-black' style={{ color: '#f59e0b' }}>14</span>
                  <span className='text-2xl fire'>🔥</span>
                  <span className='text-sm font-medium' style={{ color: '#f0f6fc' }}>días seguidos</span>
                </div>
              </div>
              <div className='text-right'>
                <p className='text-xs' style={{ color: '#8b949e' }}>Mejor racha</p>
                <p className='font-bold' style={{ color: '#f0f6fc' }}>21 días 🏆</p>
              </div>
            </div>

            {/* Streak phrase */}
            <div
              className='px-5 py-3'
              style={{ background: 'rgba(245,158,11,0.08)', borderLeft: '3px solid #f59e0b' }}
            >
              <p className='text-sm font-medium italic' style={{ color: '#f59e0b' }}>
                &quot;Llevas 14 días construyendo tu futuro como developer.&quot;
              </p>
            </div>

            {/* Calendar grid */}
            <div
              className='p-5'
              style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}
            >
              <p className='text-xs font-medium mb-3' style={{ color: '#484f58' }}>Últimas 3 semanas</p>
              <div className='grid grid-cols-7 gap-2'>
                {['L','M','X','J','V','S','D'].map(d => (
                  <div key={d} className='text-center text-xs font-medium' style={{ color: '#484f58' }}>{d}</div>
                ))}
                {STREAK_DAYS.map((d) => (
                  <div
                    key={d.day}
                    className='aspect-square rounded-lg flex items-center justify-center text-xs font-bold cursor-pointer transition-all'
                    style={{
                      background: d.today
                        ? 'rgba(245,158,11,0.3)'
                        : d.done
                          ? 'rgba(74,222,128,0.2)'
                          : 'rgba(255,255,255,0.04)',
                      border: d.today
                        ? '2px solid #f59e0b'
                        : d.done
                          ? '1px solid rgba(74,222,128,0.4)'
                          : '1px solid #21262d',
                      color: d.today ? '#f59e0b' : d.done ? '#4ade80' : '#484f58',
                      transform: hoverDay === d.day ? 'scale(1.15)' : 'scale(1)',
                    }}
                    onMouseEnter={() => setHoverDay(d.day)}
                    onMouseLeave={() => setHoverDay(null)}
                  >
                    {d.done ? '✓' : d.today ? '◉' : d.day}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom stats */}
            <div
              className='rounded-b-2xl p-5 grid grid-cols-3 gap-4'
              style={{ background: 'var(--bg-card)' }}
            >
              {[
                { label: 'XP esta semana', value: '340 ⚡', color: '#4ade80' },
                { label: 'Lecciones', value: '12 📚', color: '#3b82f6' },
                { label: 'Posición', value: '#8 🏆', color: '#a855f7' },
              ].map((s) => (
                <div key={s.label} className='text-center'>
                  <p className='text-base font-bold' style={{ color: s.color }}>{s.value}</p>
                  <p className='text-xs mt-0.5' style={{ color: '#484f58' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The emotional hook */}
        <div
          className='mt-16 p-8 sm:p-10 rounded-2xl text-center'
          style={{
            background: 'linear-gradient(135deg, rgba(245,158,11,0.06), rgba(74,222,128,0.06))',
            border: '1px solid rgba(245,158,11,0.2)',
          }}
        >
          <p className='text-xl sm:text-2xl font-bold mb-3' style={{ color: '#f0f6fc' }}>
            No es un contador. Es una identidad.
          </p>
          <p className='text-base max-w-2xl mx-auto' style={{ color: '#8b949e' }}>
            Después de 30 días de racha, ya no eres alguien que <em>&quot;está aprendiendo a programar&quot;</em>.
            Eres un developer que practica cada día. Ese cambio de identidad es lo que cambia carreras.
          </p>
        </div>
      </div>
    </section>
  )
}
