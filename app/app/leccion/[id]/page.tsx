'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import BottomNav from '@/components/app/BottomNav'

const EXERCISES = [
  {
    id: 1,
    question: '¿Qué imprimirá este código?',
    code: `function saludo() {\n  return 'Hola AprenDev';\n}\n\nconsole.log(saludo());`,
    options: ['Hola Mundo', 'Hola AprenDev', 'undefined', 'saludo()'],
    correct: 1,
    xp: 20,
    explanation: 'La función saludo() retorna el string "Hola AprenDev". console.log() lo imprime.',
  },
  {
    id: 2,
    question: '¿Cuál es la forma correcta de declarar una constante en JS?',
    options: ['var nombre = "Ana"', 'const nombre = "Ana"', 'let: nombre = "Ana"', 'constant nombre = "Ana"'],
    correct: 1,
    xp: 20,
    explanation: 'const declara una variable que no puede ser reasignada. Es la forma preferida en JS moderno.',
  },
  {
    id: 3,
    question: 'Completa el código para filtrar números pares:',
    code: `const nums = [1, 2, 3, 4, 5]\nconst pares = nums.filter(n => n % 2 === _____)`,
    options: ['1', '0', '2', 'true'],
    correct: 1,
    xp: 20,
    explanation: 'n % 2 === 0 verifica si el resto de dividir entre 2 es cero (número par).',
  },
]

export default function Leccion() {
  const router = useRouter()
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [hearts, setHearts] = useState(5)
  const [xpTotal, setXpTotal] = useState(0)
  const [finished, setFinished] = useState(false)
  const [wrongCount, setWrongCount] = useState(0)

  const ex = EXERCISES[current]
  const progress = ((current) / EXERCISES.length) * 100

  function handleSelect(i: number) {
    if (answered) return
    setSelected(i)
    setAnswered(true)
    if (i === ex.correct) {
      setXpTotal((x) => x + ex.xp)
    } else {
      setHearts((h) => Math.max(0, h - 1))
      setWrongCount((w) => w + 1)
    }
  }

  function handleNext() {
    if (current >= EXERCISES.length - 1) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  if (finished) {
    return (
      <div className='app-screen items-center justify-center px-6'>
        <div className='text-center'>
          <div className='text-6xl mb-4'>{wrongCount === 0 ? '🏆' : wrongCount < 2 ? '⭐' : '🐧'}</div>
          <h2 className='text-2xl font-black mb-2' style={{ color: '#f8fafc' }}>
            {wrongCount === 0 ? '¡Perfecto!' : '¡Lección completada!'}
          </h2>
          <p className='text-sm mb-8' style={{ color: '#94a3b8' }}>
            {wrongCount === 0
              ? 'Sin errores. El pingüino está orgulloso.'
              : `${wrongCount} error${wrongCount > 1 ? 'es' : ''}. Sigue practicando.`}
          </p>

          {/* Stats */}
          <div
            className='grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl'
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <div>
              <p className='text-xl font-black' style={{ color: '#f59e0b' }}>🔥 47</p>
              <p className='text-[10px]' style={{ color: '#4a5280' }}>Racha</p>
            </div>
            <div>
              <p className='text-xl font-black' style={{ color: '#8b5cf6' }}>+{xpTotal}</p>
              <p className='text-[10px]' style={{ color: '#4a5280' }}>XP ganado</p>
            </div>
            <div>
              <p className='text-xl font-black' style={{ color: '#ef4444' }}>
                {'❤️'.repeat(hearts)}
              </p>
              <p className='text-[10px]' style={{ color: '#4a5280' }}>Vidas</p>
            </div>
          </div>

          {/* XP float animation */}
          <div
            className='inline-block px-5 py-2 rounded-xl mb-6 text-lg font-black'
            style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa' }}
          >
            ⚡ +{xpTotal} XP
          </div>

          <div className='flex flex-col gap-3'>
            <Link href='/app/aprender' className='btn-primary py-3.5 rounded-2xl text-sm w-full'>
              Siguiente lección →
            </Link>
            <Link
              href='/app'
              className='btn-secondary py-3.5 rounded-2xl text-sm w-full text-center'
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='app-screen'>
      {/* Header */}
      <div className='flex items-center gap-3 px-4 pt-3 pb-2 flex-shrink-0'>
        <Link
          href='/app/aprender'
          className='w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0'
          style={{ background: 'var(--bg-card2)' }}
        >
          <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='#94a3b8' strokeWidth='2.5'>
            <path d='M18 6L6 18M6 6l12 12'/>
          </svg>
        </Link>

        {/* Progress bar */}
        <div className='flex-1 progress-track' style={{ height: '8px' }}>
          <div
            className='progress-fill'
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #8b5cf6, #6366f1)',
              transition: 'width 0.5s ease',
            }}
          />
        </div>

        {/* Hearts */}
        <div className='flex items-center gap-0.5 ml-1'>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className='text-sm' style={{ opacity: i < hearts ? 1 : 0.2 }}>❤️</span>
          ))}
        </div>
      </div>

      {/* Counter */}
      <p className='text-center text-xs mb-4' style={{ color: '#4a5280' }}>
        {current + 1} / {EXERCISES.length}
      </p>

      {/* Exercise */}
      <div className='app-content px-4'>
        <h2 className='text-base font-bold mb-4' style={{ color: '#f8fafc' }}>
          {ex.question}
        </h2>

        {/* Code block */}
        {ex.code && (
          <div className='code-block p-4 mb-5'>
            <pre className='text-xs' style={{ color: '#c9d1d9' }}>
              <code>{ex.code}</code>
            </pre>
          </div>
        )}

        {/* Options */}
        <div className='flex flex-col gap-2.5 mb-4'>
          {ex.options.map((opt, i) => {
            const isCorrect = i === ex.correct
            const isSelected = selected === i
            let bg = 'var(--bg-card)'
            let border = 'var(--border)'
            let color = '#c9d1d9'
            let icon = ''

            if (answered) {
              if (isCorrect) {
                bg = 'rgba(34,197,94,0.12)'; border = 'rgba(34,197,94,0.5)'; color = '#4ade80'; icon = ' ✓'
              } else if (isSelected) {
                bg = 'rgba(239,68,68,0.12)'; border = 'rgba(239,68,68,0.5)'; color = '#f87171'; icon = ' ✗'
              }
            } else if (isSelected) {
              bg = 'rgba(139,92,246,0.12)'; border = 'rgba(139,92,246,0.5)'; color = '#a78bfa'
            }

            return (
              <button
                key={opt}
                onClick={() => handleSelect(i)}
                className='w-full text-left px-4 py-3.5 rounded-2xl text-sm font-medium transition-all'
                style={{ background: bg, border: `1.5px solid ${border}`, color, cursor: answered ? 'default' : 'pointer' }}
              >
                <span
                  className='inline-flex items-center justify-center w-5 h-5 rounded-md mr-2 text-[10px] font-bold flex-shrink-0'
                  style={{ background: 'rgba(255,255,255,0.06)', color: '#4a5280' }}
                >
                  {['A', 'B', 'C', 'D'][i]}
                </span>
                {opt}{icon}
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {answered && (
          <div
            className='p-4 rounded-2xl mb-4 slide-up'
            style={{
              background: selected === ex.correct ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
              border: `1px solid ${selected === ex.correct ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)'}`,
            }}
          >
            <p className='text-xs font-bold mb-1' style={{ color: selected === ex.correct ? '#4ade80' : '#f87171' }}>
              {selected === ex.correct ? '¡Correcto! 🎉' : 'Incorrecto'}
            </p>
            <p className='text-xs' style={{ color: '#94a3b8' }}>{ex.explanation}</p>
            {selected === ex.correct && (
              <p className='text-xs font-bold mt-1' style={{ color: '#8b5cf6' }}>+{ex.xp} XP</p>
            )}
          </div>
        )}
      </div>

      {/* Continue button (fixed bottom, above nav) */}
      {answered && (
        <div className='px-4 pb-24 pt-2 flex-shrink-0'>
          <button
            onClick={handleNext}
            className='btn-primary w-full py-4 rounded-2xl text-base'
          >
            {current >= EXERCISES.length - 1 ? 'Ver resultados' : 'Continuar →'}
          </button>
        </div>
      )}

      <BottomNav />
    </div>
  )
}
