import BottomNav from '@/components/app/BottomNav'
import Link from 'next/link'

const NODES = [
  { id: 'node-10', title: 'APIs REST', lesson: 'api-rest', status: 'locked', num: 10 },
  { id: 'node-9', title: 'Bases de Datos', lesson: 'databases', status: 'done', num: 9 },
  { id: 'node-8', title: 'Autenticación', lesson: 'auth', status: 'done', num: 8 },
  { id: 'node-7', title: 'JavaScript Avanzado', lesson: 'js-advanced', status: 'active', num: 7 },
  { id: 'node-6', title: 'Funciones Avanzadas', lesson: 'js-functions', status: 'done', num: 6 },
  { id: 'node-5', title: 'Arrays & Objetos', lesson: 'js-arrays', status: 'done', num: 5 },
  { id: 'node-4', title: 'Control de Flujo', lesson: 'js-control', status: 'done', num: 4 },
  { id: 'node-3', title: 'Variables & Tipos', lesson: 'js-vars', status: 'done', num: 3 },
  { id: 'node-2', title: 'CSS Flexbox', lesson: 'css-flex', status: 'done', num: 2 },
  { id: 'node-1', title: 'HTML Básico', lesson: 'html-intro', status: 'done', num: 1 },
]

export default function Mapa({ params }: { params: { courseId: string } }) {
  return (
    <div className='app-screen'>
      {/* Header */}
      <div
        className='flex items-center gap-3 px-4 py-3 flex-shrink-0'
        style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-app)' }}
      >
        <Link
          href='/app/aprender'
          className='w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0'
          style={{ background: 'var(--bg-card2)' }}
        >
          <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='#94a3b8' strokeWidth='2.5'>
            <path d='M19 12H5M12 5l-7 7 7 7'/>
          </svg>
        </Link>
        <div>
          <h1 className='text-sm font-bold' style={{ color: '#f8fafc' }}>Mapa de aprendizaje</h1>
          <p className='text-xs' style={{ color: '#94a3b8' }}>
            Frontend Developer · Nivel 8
          </p>
        </div>
      </div>

      <div className='app-content px-6 pt-4'>
        <div className='flex flex-col items-center gap-0'>
          {NODES.map((node, i) => {
            const isDone = node.status === 'done'
            const isActive = node.status === 'active'
            const isLocked = node.status === 'locked'

            return (
              <div key={node.id} className='flex flex-col items-center'>
                {/* Connector line (above node, except first) */}
                {i > 0 && (
                  <div
                    className='w-0.5 h-6'
                    style={{
                      background: isDone || isActive
                        ? 'linear-gradient(to bottom, #22c55e44, #22c55e22)'
                        : 'var(--border)',
                    }}
                  />
                )}

                {/* Node row */}
                <div className='flex items-center gap-4 w-full max-w-xs'>
                  {/* Offset alternating */}
                  {i % 2 === 0 ? (
                    <>
                      <div className='w-16' />
                      <NodeButton node={node} isDone={isDone} isActive={isActive} isLocked={isLocked} />
                      <div className='flex-1 text-right'>
                        <p
                          className='text-xs font-semibold leading-tight'
                          style={{ color: isLocked ? '#4a5280' : isActive ? '#a78bfa' : '#94a3b8' }}
                        >
                          {node.title}
                        </p>
                        {isDone && <p className='text-[10px]' style={{ color: '#22c55e' }}>✓ Completado</p>}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='flex-1'>
                        <p
                          className='text-xs font-semibold leading-tight'
                          style={{ color: isLocked ? '#4a5280' : isActive ? '#a78bfa' : '#94a3b8' }}
                        >
                          {node.title}
                        </p>
                        {isDone && <p className='text-[10px]' style={{ color: '#22c55e' }}>✓ Completado</p>}
                      </div>
                      <NodeButton node={node} isDone={isDone} isActive={isActive} isLocked={isLocked} />
                      <div className='w-16' />
                    </>
                  )}
                </div>
              </div>
            )
          })}
          {/* Bottom spacing */}
          <div className='h-4' />
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

function NodeButton({
  node,
  isDone,
  isActive,
  isLocked,
}: {
  node: { lesson: string; num: number }
  isDone: boolean
  isActive: boolean
  isLocked: boolean
}) {
  const content = (
    <div
      className='relative w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all'
      style={{
        background: isDone
          ? 'linear-gradient(135deg, #22c55e, #16a34a)'
          : isActive
            ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)'
            : 'var(--bg-card2)',
        border: isDone
          ? '2px solid rgba(34,197,94,0.4)'
          : isActive
            ? '2px solid rgba(139,92,246,0.6)'
            : '2px solid var(--border)',
        boxShadow: isActive ? '0 0 20px rgba(139,92,246,0.4)' : 'none',
        animation: isActive ? 'pulse-glow 2s infinite' : 'none',
      }}
    >
      {isDone ? (
        <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2.5'>
          <path d='M20 6L9 17l-5-5'/>
        </svg>
      ) : isActive ? (
        <svg width='20' height='20' viewBox='0 0 24 24' fill='white'>
          <polygon points='5 3 19 12 5 21 5 3'/>
        </svg>
      ) : (
        <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#4a5280' strokeWidth='2'>
          <rect x='3' y='11' width='18' height='11' rx='2'/><path d='M7 11V7a5 5 0 0110 0v4'/>
        </svg>
      )}
      {/* Number badge */}
      <div
        className='absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold'
        style={{
          background: isDone ? '#22c55e' : isActive ? '#8b5cf6' : '#1e2140',
          color: isDone || isActive ? '#fff' : '#4a5280',
          border: '2px solid var(--bg-app)',
        }}
      >
        {node.num}
      </div>
    </div>
  )

  if (isLocked) return <div className='cursor-not-allowed'>{content}</div>
  return <Link href={`/app/leccion/${node.lesson}`}>{content}</Link>
}
