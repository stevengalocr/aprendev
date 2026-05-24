'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import BottomNav from '@/components/app/BottomNav'
import { useDemoStore } from '@/lib/demo/store'
import { useI18n } from '@/lib/i18n/store'
import type { Exercise } from '@/types'
import { COURSES } from '@/lib/data/courses'

// ─── Demo exercises when courseId isn't matched ────────────────────────────
const DEMO_EXERCISES: Exercise[] = [
  {
    id: 'demo-1',
    type: 'multiple_choice',
    question: '¿Qué imprimirá este código?',
    code: `function saludo() {\n  return 'Hola AprenDev';\n}\nconsole.log(saludo());`,
    options: ['Hola Mundo', 'Hola AprenDev', 'undefined', 'saludo()'],
    correctAnswer: 'Hola AprenDev',
    explanation: 'La función saludo() retorna el string "Hola AprenDev". console.log() lo imprime en consola.',
    xpReward: 20,
  },
  {
    id: 'demo-2',
    type: 'fill_blank',
    question: 'Completa para declarar una constante en JavaScript:',
    code: '_____ nombre = "AprenDev"',
    options: ['const', 'var', 'let', 'define'],
    correctAnswer: 'const',
    explanation: 'const declara una variable inmutable. Es la forma preferida en JS moderno cuando el valor no cambia.',
    xpReward: 20,
  },
  {
    id: 'demo-3',
    type: 'match_pairs',
    question: 'Conecta cada concepto con su definición:',
    options: ['const', 'let', 'var', 'function'],
    correctAnswer: JSON.stringify([
      ['const', 'No se puede reasignar'],
      ['let', 'Ámbito de bloque'],
      ['var', 'Ámbito de función'],
      ['function', 'Declara una función'],
    ]),
    explanation: 'Cada keyword de JS tiene un ámbito y comportamiento diferente.',
    xpReward: 30,
  },
  {
    id: 'demo-4',
    type: 'order_code',
    question: 'Ordena las líneas para crear y llamar una función:',
    options: [
      'function suma(a, b) {',
      '  return a + b',
      '}',
      'console.log(suma(3, 4))',
    ],
    correctAnswer: JSON.stringify([0, 1, 2, 3]),
    explanation: 'Las funciones se definen primero (cabecera + cuerpo + cierre) y luego se llaman.',
    xpReward: 30,
  },
  {
    id: 'demo-5',
    type: 'code_multiple_choice',
    question: 'Elige la forma correcta de filtrar números pares:',
    code: 'const nums = [1, 2, 3, 4, 5]\nconst pares = nums.filter(n => n % 2 === _____)',
    options: ['0', '1', '2', 'true'],
    correctAnswer: '0',
    explanation: 'n % 2 === 0 verifica si el número es divisible entre 2 (par). El módulo devuelve el resto.',
    xpReward: 20,
  },
]

function getLessonExercises(lessonId: string): Exercise[] {
  for (const course of COURSES) {
    for (const unit of course.units) {
      for (const lesson of unit.lessons) {
        if (lesson.id === lessonId) return lesson.exercises
      }
    }
  }
  return DEMO_EXERCISES
}

// ─── Match Pairs component ──────────────────────────────────────────────────
function MatchPairs({
  exercise,
  onAnswer,
}: {
  exercise: Exercise
  onAnswer: (correct: boolean) => void
}) {
  const pairs: [string, string][] = JSON.parse(exercise.correctAnswer as string)
  const lefts = pairs.map(p => p[0])
  const rights = [...pairs.map(p => p[1])].sort(() => Math.random() - 0.5)
  const [rightOrder] = useState(rights)
  const [selected, setSelected] = useState<{ left: number | null; matched: Record<number, number> }>({ left: null, matched: {} })
  const [done, setDone] = useState(false)
  const [wrong, setWrong] = useState<number[]>([])

  function pickLeft(i: number) {
    if (done || selected.matched[i] !== undefined) return
    setSelected(s => ({ ...s, left: i }))
  }

  function pickRight(j: number) {
    if (done || selected.left === null) return
    const leftIdx = selected.left
    const correctRight = pairs[leftIdx][1]
    if (rightOrder[j] === correctRight) {
      const newMatched = { ...selected.matched, [leftIdx]: j }
      setSelected({ left: null, matched: newMatched })
      if (Object.keys(newMatched).length === pairs.length) {
        setDone(true)
        onAnswer(true)
      }
    } else {
      setWrong([leftIdx, j])
      setTimeout(() => setWrong([]), 800)
      setSelected(s => ({ ...s, left: null }))
      onAnswer(false)
    }
  }

  const matchedRights = new Set(Object.values(selected.matched))

  return (
    <div className='flex gap-3 mb-4'>
      {/* Left column */}
      <div className='flex flex-col gap-2 flex-1'>
        {lefts.map((item, i) => {
          const isMatched = selected.matched[i] !== undefined
          const isActive = selected.left === i
          const isWrong = wrong[0] === i
          return (
            <button
              key={item}
              onClick={() => pickLeft(i)}
              disabled={isMatched || done}
              className='px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all'
              style={{
                background: isMatched ? 'rgba(74,222,128,0.12)' : isWrong ? 'rgba(239,68,68,0.12)' : isActive ? 'rgba(139,92,246,0.2)' : 'var(--bg-card)',
                border: `1.5px solid ${isMatched ? 'rgba(74,222,128,0.4)' : isWrong ? 'rgba(239,68,68,0.4)' : isActive ? 'rgba(139,92,246,0.6)' : 'var(--border)'}`,
                color: isMatched ? '#4ade80' : isWrong ? '#f87171' : isActive ? '#a78bfa' : '#c9d1d9',
              }}
            >
              {item}
            </button>
          )
        })}
      </div>

      {/* Connector */}
      <div className='flex flex-col justify-around' style={{ color: '#4a5280', fontSize: 12 }}>
        {lefts.map((_, i) => <span key={i}>{selected.matched[i] !== undefined ? '✓' : '→'}</span>)}
      </div>

      {/* Right column */}
      <div className='flex flex-col gap-2 flex-1'>
        {rightOrder.map((item, j) => {
          const isMatched = matchedRights.has(j)
          const isWrong = wrong[1] === j
          return (
            <button
              key={item}
              onClick={() => pickRight(j)}
              disabled={isMatched || done}
              className='px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all'
              style={{
                background: isMatched ? 'rgba(74,222,128,0.12)' : isWrong ? 'rgba(239,68,68,0.12)' : 'var(--bg-card)',
                border: `1.5px solid ${isMatched ? 'rgba(74,222,128,0.4)' : isWrong ? 'rgba(239,68,68,0.4)' : 'var(--border)'}`,
                color: isMatched ? '#4ade80' : isWrong ? '#f87171' : '#c9d1d9',
              }}
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Order Code component ───────────────────────────────────────────────────
function OrderCode({
  exercise,
  onAnswer,
}: {
  exercise: Exercise
  onAnswer: (correct: boolean) => void
}) {
  const correctOrder: number[] = JSON.parse(exercise.correctAnswer as string)
  const [order, setOrder] = useState<number[]>([...exercise.options!.keys()])
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(false)

  function moveUp(i: number) {
    if (i === 0) return
    const next = [...order]
    ;[next[i - 1], next[i]] = [next[i], next[i - 1]]
    setOrder(next)
  }

  function moveDown(i: number) {
    if (i === order.length - 1) return
    const next = [...order]
    ;[next[i + 1], next[i]] = [next[i], next[i + 1]]
    setOrder(next)
  }

  function checkOrder() {
    const isCorrect = order.every((v, i) => v === correctOrder[i])
    setChecked(true)
    setCorrect(isCorrect)
    onAnswer(isCorrect)
  }

  return (
    <div className='mb-4'>
      <div className='flex flex-col gap-2 mb-4'>
        {order.map((lineIdx, pos) => (
          <div
            key={lineIdx}
            className='flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs'
            style={{
              background: checked ? (correct ? 'rgba(74,222,128,0.1)' : 'rgba(239,68,68,0.1)') : 'var(--bg-card)',
              border: `1.5px solid ${checked ? (correct ? 'rgba(74,222,128,0.4)' : 'rgba(239,68,68,0.3)') : 'var(--border)'}`,
              fontFamily: 'monospace',
              color: '#c9d1d9',
            }}
          >
            <span className='text-[10px] w-4 text-center' style={{ color: '#4a5280' }}>{pos + 1}</span>
            <span className='flex-1'>{exercise.options![lineIdx]}</span>
            {!checked && (
              <div className='flex flex-col gap-0.5'>
                <button onClick={() => moveUp(pos)} className='text-[10px] leading-none' style={{ color: '#4a5280' }}>▲</button>
                <button onClick={() => moveDown(pos)} className='text-[10px] leading-none' style={{ color: '#4a5280' }}>▼</button>
              </div>
            )}
          </div>
        ))}
      </div>
      {!checked && (
        <button onClick={checkOrder} className='btn-primary w-full py-3 rounded-2xl text-sm'>
          Verificar orden
        </button>
      )}
    </div>
  )
}

// ─── Main Lesson Page ───────────────────────────────────────────────────────
export default function Leccion() {
  const params = useParams()
  const lessonId = params.id as string
  const exercises = getLessonExercises(lessonId)

  const { state, completeLesson, loseHeart } = useDemoStore()
  const { t } = useI18n()

  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [xpTotal, setXpTotal] = useState(0)
  const [wrongCount, setWrongCount] = useState(0)
  const [finished, setFinished] = useState(false)
  const [hearts, setHearts] = useState(state.hearts)

  const ex = exercises[current]
  const progress = (current / exercises.length) * 100
  const isMatchPairs = ex?.type === 'match_pairs'
  const isOrderCode = ex?.type === 'order_code'

  function handleOptionSelect(i: number) {
    if (answered || isMatchPairs || isOrderCode) return
    setSelected(i)
    const isCorrect = ex.options![i] === ex.correctAnswer
    setAnswered(true)
    setCorrect(isCorrect)
    if (isCorrect) {
      setXpTotal(x => x + ex.xpReward)
    } else {
      setHearts(h => Math.max(0, h - 1))
      loseHeart()
      setWrongCount(w => w + 1)
    }
  }

  function handlePairsAnswer(isCorrect: boolean) {
    if (answered) return
    if (!isCorrect) {
      setHearts(h => Math.max(0, h - 1))
      loseHeart()
      setWrongCount(w => w + 1)
    } else {
      setAnswered(true)
      setCorrect(true)
      setXpTotal(x => x + ex.xpReward)
    }
  }

  function handleOrderAnswer(isCorrect: boolean) {
    setAnswered(true)
    setCorrect(isCorrect)
    if (isCorrect) {
      setXpTotal(x => x + ex.xpReward)
    } else {
      setHearts(h => Math.max(0, h - 1))
      loseHeart()
      setWrongCount(w => w + 1)
    }
  }

  function handleNext() {
    if (current >= exercises.length - 1) {
      const score = Math.round(((exercises.length - wrongCount) / exercises.length) * 100)
      completeLesson(lessonId, xpTotal, score)
      setFinished(true)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setAnswered(false)
      setCorrect(false)
    }
  }

  // ── Results screen ──────────────────────────────────────────────────────
  if (finished) {
    const emoji = wrongCount === 0 ? '🏆' : wrongCount < 2 ? '⭐' : '🐧'
    const msg = wrongCount === 0 ? t('lesson', 'perfect') : wrongCount < 2 ? t('lesson', 'good') : t('lesson', 'tryAgain')

    return (
      <div className='app-screen items-center justify-center px-6'>
        <div className='text-center w-full'>
          <div className='text-6xl mb-4 float'>{emoji}</div>
          <h2 className='text-2xl font-black mb-1' style={{ color: '#f8fafc' }}>
            {t('lesson', 'result')}
          </h2>
          <p className='text-sm mb-6' style={{ color: '#94a3b8' }}>{msg}</p>

          <div
            className='grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl'
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <div>
              <p className='text-xl font-black' style={{ color: '#f59e0b' }}>🔥 {state.streak}</p>
              <p className='text-[10px]' style={{ color: '#4a5280' }}>Racha</p>
            </div>
            <div>
              <p className='text-xl font-black' style={{ color: '#8b5cf6' }}>+{xpTotal}</p>
              <p className='text-[10px]' style={{ color: '#4a5280' }}>{t('lesson', 'xpEarned')}</p>
            </div>
            <div>
              <p className='text-xl font-black'>{Array.from({ length: Math.max(0, hearts) }).map(() => '❤️').join('')}</p>
              <p className='text-[10px]' style={{ color: '#4a5280' }}>Vidas</p>
            </div>
          </div>

          <div
            className='inline-block px-5 py-2 rounded-xl mb-6 text-lg font-black pulse-glow'
            style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa' }}
          >
            ⚡ +{xpTotal} XP
          </div>

          <div className='flex flex-col gap-3'>
            <Link href='/app/aprender' className='btn-primary py-3.5 rounded-2xl text-sm w-full block text-center'>
              Siguiente lección →
            </Link>
            <Link href='/app' className='btn-secondary py-3.5 rounded-2xl text-sm w-full block text-center'>
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ── Exercise screen ──────────────────────────────────────────────────────
  return (
    <div className='app-screen'>
      {/* Header */}
      <div className='flex items-center gap-3 px-4 pt-3 pb-2 flex-shrink-0'>
        <Link
          href='/app/aprender'
          className='w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0'
          style={{ background: 'var(--bg-card2)' }}
        >
          <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#94a3b8' strokeWidth='2.5'>
            <path d='M18 6L6 18M6 6l12 12'/>
          </svg>
        </Link>

        <div className='flex-1 progress-track' style={{ height: '8px' }}>
          <div
            className='progress-fill'
            style={{
              width: `${Math.max(4, progress)}%`,
              background: 'linear-gradient(90deg, #8b5cf6, #6366f1)',
              transition: 'width 0.5s ease',
            }}
          />
        </div>

        <div className='flex items-center gap-0.5 ml-1'>
          {Array.from({ length: state.maxHearts }).map((_, i) => (
            <span key={i} className='text-sm' style={{ opacity: i < hearts ? 1 : 0.2 }}>❤️</span>
          ))}
        </div>
      </div>

      <p className='text-center text-xs mb-3' style={{ color: '#4a5280' }}>
        {current + 1} / {exercises.length}
      </p>

      <div className='app-content px-4'>
        {/* Exercise type badge */}
        <div className='mb-3'>
          <span
            className='text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md'
            style={{ background: 'rgba(139,92,246,0.15)', color: '#8b5cf6' }}
          >
            {ex.type === 'multiple_choice' && '🎯 Opción múltiple'}
            {ex.type === 'code_multiple_choice' && '💻 Código'}
            {ex.type === 'fill_blank' && '✏️ Rellena el espacio'}
            {ex.type === 'match_pairs' && '🔗 Parejas'}
            {ex.type === 'order_code' && '🔢 Ordena el código'}
          </span>
        </div>

        <h2 className='text-base font-bold mb-4' style={{ color: '#f8fafc' }}>
          {ex.question}
        </h2>

        {/* Code block */}
        {ex.code && (
          <div className='code-block p-4 mb-5'>
            <pre className='text-xs' style={{ color: '#c9d1d9', overflowX: 'auto' }}>
              <code>{ex.code}</code>
            </pre>
          </div>
        )}

        {/* Match Pairs */}
        {isMatchPairs && (
          <MatchPairs exercise={ex} onAnswer={handlePairsAnswer} />
        )}

        {/* Order Code */}
        {isOrderCode && (
          <OrderCode exercise={ex} onAnswer={handleOrderAnswer} />
        )}

        {/* Multiple choice / Fill blank / Code */}
        {!isMatchPairs && !isOrderCode && ex.options && (
          <div className='flex flex-col gap-2.5 mb-4'>
            {ex.options.map((opt, i) => {
              const isCorrectOpt = opt === ex.correctAnswer
              const isSelected = selected === i
              let bg = 'var(--bg-card)'
              let border = 'var(--border)'
              let color = '#c9d1d9'
              let suffix = ''

              if (answered) {
                if (isCorrectOpt) { bg = 'rgba(34,197,94,0.12)'; border = 'rgba(34,197,94,0.5)'; color = '#4ade80'; suffix = ' ✓' }
                else if (isSelected) { bg = 'rgba(239,68,68,0.12)'; border = 'rgba(239,68,68,0.5)'; color = '#f87171'; suffix = ' ✗' }
              } else if (isSelected) {
                bg = 'rgba(139,92,246,0.12)'; border = 'rgba(139,92,246,0.5)'; color = '#a78bfa'
              }

              return (
                <button
                  key={`${opt}-${i}`}
                  onClick={() => handleOptionSelect(i)}
                  className='w-full text-left px-4 py-3.5 rounded-2xl text-sm font-medium transition-all'
                  style={{ background: bg, border: `1.5px solid ${border}`, color, cursor: answered ? 'default' : 'pointer' }}
                >
                  <span
                    className='inline-flex items-center justify-center w-5 h-5 rounded-md mr-2 text-[10px] font-bold flex-shrink-0'
                    style={{ background: 'rgba(255,255,255,0.06)', color: '#4a5280' }}
                  >
                    {['A', 'B', 'C', 'D'][i]}
                  </span>
                  {opt}{suffix}
                </button>
              )
            })}
          </div>
        )}

        {/* Explanation */}
        {answered && (
          <div
            className='p-4 rounded-2xl mb-4 slide-up'
            style={{
              background: correct ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
              border: `1px solid ${correct ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)'}`,
            }}
          >
            <p className='text-xs font-bold mb-1' style={{ color: correct ? '#4ade80' : '#f87171' }}>
              {correct ? `${t('lesson', 'correct')} 🎉` : t('lesson', 'wrong')}
            </p>
            <p className='text-xs leading-relaxed' style={{ color: '#94a3b8' }}>{ex.explanation}</p>
            {correct && (
              <p className='text-xs font-bold mt-1.5' style={{ color: '#8b5cf6' }}>+{ex.xpReward} XP</p>
            )}
          </div>
        )}
      </div>

      {/* Continue button */}
      {answered && (
        <div className='px-4 pb-24 pt-2 flex-shrink-0'>
          <button onClick={handleNext} className='btn-primary w-full py-4 rounded-2xl text-base'>
            {current >= exercises.length - 1 ? 'Ver resultados' : `${t('lesson', 'continue')} →`}
          </button>
        </div>
      )}

      <BottomNav />
    </div>
  )
}
