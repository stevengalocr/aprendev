import Link from 'next/link'

function PhoneMockup({ screen }: { screen: 'dashboard' | 'lesson' | 'ranking' }) {
  return (
    <div
      className='relative flex-shrink-0'
      style={{
        width: '200px',
        height: '432px',
        borderRadius: '28px',
        background: '#0a0c1a',
        border: '1.5px solid rgba(139,92,246,0.3)',
        overflow: 'hidden',
        boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(139,92,246,0.1)',
      }}
    >
      {/* Notch */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '64px', height: '16px', background: '#000',
        borderRadius: '0 0 10px 10px', zIndex: 10,
      }} />

      {/* Status bar */}
      <div style={{ padding: '18px 14px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '8px', color: '#94a3b8', fontWeight: 700 }}>9:41</span>
        <span style={{ fontSize: '8px', color: '#94a3b8' }}>▲ WiFi 🔋</span>
      </div>

      {screen === 'dashboard' && <DashScreen />}
      {screen === 'lesson' && <LessonScreen />}
      {screen === 'ranking' && <RankingScreen />}

      {/* Bottom nav */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px',
        background: 'rgba(10,12,26,0.97)',
        borderTop: '1px solid #1e2140',
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        padding: '0 4px 4px',
      }}>
        {['🏠','📖','⚡','🏆','👤'].map((icon, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px' }}>
            <span style={{ fontSize: '10px' }}>{icon}</span>
            {screen === 'dashboard' && i === 0 && <div style={{ width: '4px', height: '2px', borderRadius: '999px', background: '#8b5cf6' }} />}
            {screen === 'lesson' && i === 1 && <div style={{ width: '4px', height: '2px', borderRadius: '999px', background: '#8b5cf6' }} />}
            {screen === 'ranking' && i === 3 && <div style={{ width: '4px', height: '2px', borderRadius: '999px', background: '#8b5cf6' }} />}
          </div>
        ))}
      </div>
    </div>
  )
}

function DashScreen() {
  return (
    <div style={{ padding: '4px 10px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ padding: '3px 7px', borderRadius: '8px', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', fontSize: '8px', fontWeight: 700, color: '#f59e0b' }}>🔥 47</div>
          <div>
            <div style={{ fontSize: '6px', color: '#a78bfa', fontWeight: 600, marginBottom: '2px' }}>Nivel 12</div>
            <div style={{ width: '60px', height: '3px', borderRadius: '999px', background: 'rgba(255,255,255,0.08)' }}>
              <div style={{ width: '83%', height: '100%', borderRadius: '999px', background: 'linear-gradient(90deg,#8b5cf6,#6366f1)' }} />
            </div>
          </div>
        </div>
        <div style={{ padding: '3px 7px', borderRadius: '8px', background: 'rgba(99,102,241,0.15)', fontSize: '8px', fontWeight: 700, color: '#818cf8' }}>💎 320</div>
      </div>

      <p style={{ fontSize: '10px', fontWeight: 800, color: '#f8fafc', marginBottom: '2px' }}>¡Hola, Dev! 👋</p>
      <p style={{ fontSize: '7px', color: '#94a3b8', marginBottom: '8px' }}>¿Qué vamos a aprender hoy?</p>

      <div style={{ padding: '8px', borderRadius: '10px', background: 'linear-gradient(135deg,rgba(139,92,246,0.2),rgba(99,102,241,0.15))', border: '1px solid rgba(139,92,246,0.3)', marginBottom: '8px' }}>
        <div style={{ fontSize: '6px', fontWeight: 700, color: '#f59e0b', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>🏆 Misión diaria</div>
        <p style={{ fontSize: '7px', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>Crea una función promedio</p>
        <span style={{ fontSize: '6px', color: '#4ade80', fontWeight: 700 }}>+50 XP</span>
      </div>

      {[
        { name: 'Frontend Dev', pct: 64, color: '#3b82f6' },
        { name: 'IA & ML', pct: 35, color: '#a855f7' },
        { name: 'Backend', pct: 42, color: '#f97316' },
      ].map(p => (
        <div key={p.name} style={{ padding: '6px 8px', borderRadius: '8px', background: '#0f1123', border: '1px solid #1e2140', marginBottom: '4px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#f8fafc' }}>{p.name}</span>
            <span style={{ fontSize: '6px', color: p.color, fontWeight: 700 }}>{p.pct}%</span>
          </div>
          <div style={{ height: '3px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)' }}>
            <div style={{ width: `${p.pct}%`, height: '100%', borderRadius: '999px', background: p.color }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function LessonScreen() {
  return (
    <div style={{ padding: '6px 10px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
        <div style={{ width: '14px', height: '14px', borderRadius: '5px', background: '#0f1123', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', color: '#94a3b8' }}>✕</div>
        <div style={{ flex: 1, height: '5px', borderRadius: '999px', background: 'rgba(255,255,255,0.07)' }}>
          <div style={{ width: '60%', height: '100%', borderRadius: '999px', background: 'linear-gradient(90deg,#8b5cf6,#6366f1)' }} />
        </div>
        <div style={{ fontSize: '8px' }}>❤️❤️❤️❤️❤️</div>
      </div>

      <div style={{ marginBottom: '4px' }}>
        <span style={{ fontSize: '6px', padding: '2px 6px', borderRadius: '4px', background: 'rgba(139,92,246,0.15)', color: '#8b5cf6', fontWeight: 700 }}>💻 Código</span>
      </div>
      <p style={{ fontSize: '8px', fontWeight: 700, color: '#f8fafc', marginBottom: '6px', lineHeight: 1.3 }}>¿Qué imprimirá este código?</p>

      <div style={{ padding: '6px 8px', borderRadius: '8px', background: '#060810', border: '1px solid #1e2140', marginBottom: '7px', fontFamily: 'monospace' }}>
        <div style={{ fontSize: '6.5px', color: '#ff7b72', lineHeight: 1.6 }}>{'function '}<span style={{ color: '#d2a8ff' }}>saludo</span>{'() {'}</div>
        <div style={{ fontSize: '6.5px', color: '#f0f6fc', lineHeight: 1.6 }}>{`  return `}<span style={{ color: '#a5f3a5' }}>&apos;Hola Dev&apos;</span></div>
        <div style={{ fontSize: '6.5px', color: '#f0f6fc', lineHeight: 1.6 }}>{'}'}</div>
        <div style={{ fontSize: '6.5px', color: '#d2a8ff', lineHeight: 1.6 }}>{'console.log('}<span style={{ color: '#ffa657' }}>saludo</span>{'())'}</div>
      </div>

      {[
        { text: 'Hola Mundo', correct: false },
        { text: 'Hola Dev', correct: true },
        { text: 'undefined', correct: false },
        { text: 'saludo()', correct: false },
      ].map((opt, i) => (
        <div key={i} style={{
          padding: '5px 7px', borderRadius: '7px', marginBottom: '3px', fontSize: '7px', fontWeight: 600,
          background: opt.correct ? 'rgba(34,197,94,0.12)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${opt.correct ? 'rgba(34,197,94,0.4)' : '#1e2140'}`,
          color: opt.correct ? '#4ade80' : '#c9d1d9',
        }}>
          <span style={{ opacity: 0.4, marginRight: '4px' }}>{['A','B','C','D'][i]}.</span>
          {opt.text}{opt.correct ? ' ✓' : ''}
        </div>
      ))}

      <div style={{ marginTop: '4px', padding: '5px 7px', borderRadius: '7px', background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)' }}>
        <p style={{ fontSize: '6px', color: '#4ade80', fontWeight: 700, marginBottom: '2px' }}>¡Correcto! 🎉</p>
        <p style={{ fontSize: '6px', color: '#94a3b8', lineHeight: 1.4 }}>saludo() retorna el string. console.log lo imprime.</p>
        <p style={{ fontSize: '6px', color: '#8b5cf6', fontWeight: 700, marginTop: '2px' }}>+20 XP</p>
      </div>
    </div>
  )
}

function RankingScreen() {
  const top3 = [
    { name: 'AnaDev', xp: '2,450', medal: '🥇', pos: 1, color: 'rgba(245,158,11,0.2)', h: 70 },
    { name: 'CodeMaster', xp: '2,100', medal: '🥈', pos: 2, color: 'rgba(148,163,184,0.15)', h: 55 },
    { name: 'DevKing', xp: '1,870', medal: '🥉', pos: 3, color: 'rgba(180,120,60,0.15)', h: 44 },
  ]
  const rest = [
    { rank: 4, name: 'ProgramadorX', xp: '1,650', me: false },
    { rank: 5, name: 'Tú 🐧', xp: '1,250', me: true },
    { rank: 6, name: 'YoungDev', xp: '980', me: false },
  ]

  return (
    <div style={{ padding: '4px 10px', overflow: 'hidden' }}>
      <p style={{ fontSize: '10px', fontWeight: 800, color: '#f8fafc', marginBottom: '1px' }}>Ranking Semanal</p>
      <p style={{ fontSize: '6px', color: '#94a3b8', marginBottom: '8px' }}>Temporada termina en 3 días</p>

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '6px', marginBottom: '8px' }}>
        {[top3[1], top3[0], top3[2]].map((entry) => (
          <div key={entry.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
            {entry.pos === 1 && <span style={{ fontSize: '8px' }}>👑</span>}
            <div style={{
              width: '32px', height: '32px', borderRadius: '10px',
              background: entry.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', position: 'relative',
            }}>
              {['👩‍💻','🧑‍💻','👨‍💻'][entry.pos - 1]}
              <span style={{ position: 'absolute', top: '-4px', right: '-4px', fontSize: '7px' }}>{entry.medal}</span>
            </div>
            <span style={{ fontSize: '5.5px', fontWeight: 700, color: '#f8fafc', textAlign: 'center', maxWidth: '36px', lineHeight: 1.2 }}>{entry.name}</span>
            <span style={{ fontSize: '5.5px', color: entry.pos === 1 ? '#f59e0b' : '#94a3b8' }}>{entry.xp}</span>
            <div style={{ width: '32px', height: `${entry.h / 2.5}px`, borderRadius: '3px 3px 0 0', background: entry.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '8px', fontWeight: 800, color: entry.pos === 1 ? '#f59e0b' : '#4a5280' }}>{entry.pos}</span>
            </div>
          </div>
        ))}
      </div>

      {rest.map(e => (
        <div key={e.rank} style={{
          display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 6px', borderRadius: '7px', marginBottom: '3px',
          background: e.me ? 'rgba(139,92,246,0.12)' : '#0f1123',
          border: `1px solid ${e.me ? 'rgba(139,92,246,0.35)' : '#1e2140'}`,
        }}>
          <span style={{ fontSize: '7px', fontWeight: 800, color: '#4a5280', width: '10px' }}>{e.rank}</span>
          <div style={{ width: '16px', height: '16px', borderRadius: '999px', background: e.me ? 'rgba(139,92,246,0.2)' : '#151830', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px' }}>
            {e.me ? '🐧' : '👤'}
          </div>
          <span style={{ flex: 1, fontSize: '7px', fontWeight: 600, color: e.me ? '#a78bfa' : '#f8fafc' }}>{e.name}</span>
          <span style={{ fontSize: '7px', fontWeight: 700, color: e.me ? '#a78bfa' : '#94a3b8' }}>{e.xp} XP</span>
        </div>
      ))}
    </div>
  )
}

export default function AppPreview() {
  return (
    <section className='py-24 px-4 sm:px-6 overflow-hidden' style={{ background: 'var(--bg-card)' }}>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='badge-purple inline-flex mb-4'>Vista previa</div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-black mb-4' style={{ color: '#f8fafc' }}>
            La app que{' '}
            <span className='gradient-text'>los devs no cierran</span>
          </h2>
          <p className='text-lg max-w-xl mx-auto' style={{ color: '#94a3b8' }}>
            Diseñada para teléfono desde el primer día. Aprende en el metro,
            en el café, en cualquier pausa de 5 minutos.
          </p>
        </div>

        {/* Phone mockups */}
        <div className='flex items-end justify-center gap-4 sm:gap-8 mb-16 overflow-x-auto pb-4'>
          {(['dashboard', 'lesson', 'ranking'] as const).map((screen, i) => {
            const labels = [
              { label: 'Dashboard', desc: 'Streak, XP y rutas en un vistazo' },
              { label: 'Lección interactiva', desc: 'Código real con feedback instantáneo' },
              { label: 'Ranking semanal', desc: 'Compite con devs de LATAM' },
            ]
            return (
              <div
                key={screen}
                className='flex flex-col items-center gap-4'
                style={{
                  transform: i === 1 ? 'translateY(0)' : i === 0 ? 'translateY(28px)' : 'translateY(44px)',
                  opacity: i === 1 ? 1 : 0.8,
                }}
              >
                <PhoneMockup screen={screen} />
                <div className='text-center' style={{ maxWidth: '180px' }}>
                  <p className='text-sm font-bold mb-1' style={{ color: '#f8fafc' }}>{labels[i].label}</p>
                  <p className='text-xs leading-relaxed' style={{ color: '#94a3b8' }}>{labels[i].desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className='text-center'>
          <Link href='/app' className='btn-primary inline-flex items-center gap-2 px-10 py-4 text-base rounded-2xl'>
            🎮 Probar la app ahora →
          </Link>
          <p className='text-xs mt-3' style={{ color: '#4a5280' }}>
            Sin registro · Sin tarjeta · Empieza en 10 segundos
          </p>
        </div>
      </div>
    </section>
  )
}
