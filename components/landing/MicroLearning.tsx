'use client'
import { useState } from 'react'

const DEMO_EXERCISES = [
  {
    id: 1,
    tag: '⚡ JavaScript',
    time: '~2 min',
    question: '¿Qué imprime este código?',
    code: `const arr = [1, 2, 3]
const double = arr.map(n => n * 2)
console.log(double)`,
    options: ['[2, 4, 6]', '[1, 2, 3]', 'undefined', '[3, 6, 9]'],
    correct: 0,
    explanation: 'map() crea un nuevo array aplicando la función a cada elemento. 1×2=2, 2×2=4, 3×2=6.',
    xp: 10,
  },
  {
    id: 2,
    tag: '🤖 IA',
    time: '~2 min',
    question: '¿Qué técnica de prompting hace que el LLM "piense paso a paso"?',
    options: ['Chain-of-Thought', 'Few-Shot', 'Zero-Shot', 'RAG'],
    correct: 0,
    explanation: 'Chain-of-Thought (CoT) le pide al modelo razonar antes de responder. Mejora precisión en tareas complejas.',
    xp: 10,
  },
  {
    id: 3,
    tag: '🧮 Algoritmos',
    time: '~2 min',
    question: '¿Cuál es la complejidad de buscar un elemento en un Hash Map?',
    options: ['O(1) promedio', 'O(n)', 'O(log n)', 'O(n²)'],
    correct: 0,
    explanation: 'Los hash maps usan una función hash para acceder directamente. Búsqueda O(1) amortizado.',
    xp: 10,
  },
]

export default function MicroLearning() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [xpEarned, setXpEarned] = useState(0)

  const ex = DEMO_EXERCISES[current]

  function handleSelect(i: number) {
    if (answered) return
    setSelected(i)
    setAnswered(true)
    if (i === ex.correct) setXpEarned((x) => x + ex.xp)
  }

  function next() {
    if (current < DEMO_EXERCISES.length - 1) {
      setCurrent((c) => c + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  return (
    <section
      className='py-24 px-4 sm:px-6'
      style={{ background: 'var(--bg-card)' }}
    >
      <div className='max-w-5xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left: copy */}
          <div>
            <div className='badge-green inline-block mb-4'>Micro learning</div>
            <h2
              className='text-3xl sm:text-4xl font-black mb-4 leading-tight'
              style={{ color: '#f0f6fc' }}
            >
              No cursos de 40 horas.
              <br />
              <span className='gradient-text'>Microvictorias constantes.</span>
            </h2>
            <p className='text-lg mb-6 leading-relaxed' style={{ color: '#8b949e' }}>
              Cada lección en Aprendev es una <strong style={{ color: '#f0f6fc' }}>microvictoria</strong>.
              Abres la app, respondes 3-5 preguntas, ganas XP, cierras.
              En 5 minutos aprendiste algo real.
            </p>

            <div className='flex flex-col gap-4 mb-8'>
              {[
                {
                  icon: '⚡',
                  title: 'Feedback instantáneo',
                  desc: 'Sabes si acertaste en el momento. No esperas al examen final.',
                  color: '#4ade80',
                },
                {
                  icon: '🧠',
                  title: 'Repetición espaciada',
                  desc: 'Los conceptos que fallas vuelven con más frecuencia. Curva de olvido derrotada.',
                  color: '#3b82f6',
                },
                {
                  icon: '🎯',
                  title: 'Variedad de ejercicios',
                  desc: 'Opción múltiple, completa el código, ordena los bloques. Nunca se vuelve mecánico.',
                  color: '#a855f7',
                },
              ].map((f) => (
                <div key={f.title} className='flex gap-3 items-start'>
                  <div
                    className='w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0'
                    style={{ background: `${f.color}15`, border: `1px solid ${f.color}30` }}
                  >
                    <span className='text-lg'>{f.icon}</span>
                  </div>
                  <div>
                    <p className='font-semibold text-sm mb-0.5' style={{ color: '#f0f6fc' }}>{f.title}</p>
                    <p className='text-sm' style={{ color: '#8b949e' }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* XP earned counter */}
            {xpEarned > 0 && (
              <div
                className='inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold'
                style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', color: '#4ade80' }}
              >
                ⚡ Ganaste {xpEarned} XP en el demo →
              </div>
            )}
          </div>

          {/* Right: interactive demo */}
          <div>
            {/* Progress */}
            <div className='flex items-center gap-3 mb-4'>
              <div className='flex gap-1.5 flex-1'>
                {DEMO_EXERCISES.map((_, i) => (
                  <div
                    key={i}
                    className='h-1.5 flex-1 rounded-full transition-all duration-500'
                    style={{
                      background: i < current ? '#4ade80' : i === current ? 'rgba(74,222,128,0.5)' : '#21262d',
                    }}
                  />
                ))}
              </div>
              <span className='text-xs font-mono' style={{ color: '#484f58' }}>
                {current + 1}/{DEMO_EXERCISES.length}
              </span>
            </div>

            {/* Card */}
            <div
              className='rounded-2xl overflow-hidden'
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
            >
              {/* Header */}
              <div
                className='px-5 py-3 flex items-center justify-between'
                style={{ borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}
              >
                <span
                  className='text-xs font-semibold px-2 py-1 rounded-md'
                  style={{ background: 'rgba(74,222,128,0.1)', color: '#4ade80' }}
                >
                  {ex.tag}
                </span>
                <span className='text-xs' style={{ color: '#484f58' }}>⏱ {ex.time}</span>
              </div>

              <div className='p-5'>
                <p className='font-semibold mb-4' style={{ color: '#f0f6fc' }}>{ex.question}</p>

                {/* Code block */}
                {ex.code && (
                  <pre
                    className='code-snippet p-4 mb-4 text-xs leading-relaxed overflow-x-auto'
                    style={{ color: '#c9d1d9' }}
                  >
                    <code>{ex.code}</code>
                  </pre>
                )}

                {/* Options */}
                <div className='flex flex-col gap-2'>
                  {ex.options.map((opt, i) => {
                    const isCorrect = i === ex.correct
                    const isSelected = selected === i
                    let bg = 'rgba(255,255,255,0.04)'
                    let border = '#21262d'
                    let color = '#c9d1d9'

                    if (answered) {
                      if (isCorrect) { bg = 'rgba(74,222,128,0.12)'; border = 'rgba(74,222,128,0.5)'; color = '#4ade80' }
                      else if (isSelected && !isCorrect) { bg = 'rgba(244,63,94,0.12)'; border = 'rgba(244,63,94,0.5)'; color = '#f87171' }
                    } else if (isSelected) {
                      bg = 'rgba(59,130,246,0.12)'; border = 'rgba(59,130,246,0.5)'; color = '#60a5fa'
                    }

                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelect(i)}
                        className='w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all'
                        style={{ background: bg, border: `1px solid ${border}`, color, cursor: answered ? 'default' : 'pointer' }}
                      >
                        <span className='mr-2 opacity-50 font-mono text-xs'>
                          {['A', 'B', 'C', 'D'][i]}.
                        </span>
                        {opt}
                        {answered && isCorrect && ' ✓'}
                        {answered && isSelected && !isCorrect && ' ✗'}
                      </button>
                    )
                  })}
                </div>

                {/* Explanation */}
                {answered && (
                  <div
                    className='mt-4 p-3 rounded-xl text-sm'
                    style={{
                      background: selected === ex.correct ? 'rgba(74,222,128,0.06)' : 'rgba(244,63,94,0.06)',
                      border: `1px solid ${selected === ex.correct ? 'rgba(74,222,128,0.2)' : 'rgba(244,63,94,0.2)'}`,
                      color: '#8b949e',
                    }}
                  >
                    <span style={{ color: selected === ex.correct ? '#4ade80' : '#f87171', fontWeight: 600 }}>
                      {selected === ex.correct ? '✓ Correcto! ' : '✗ Incorrecto. '}
                    </span>
                    {ex.explanation}
                  </div>
                )}

                {/* Next button */}
                {answered && (
                  <button
                    onClick={next}
                    disabled={current >= DEMO_EXERCISES.length - 1}
                    className='btn-primary w-full py-3 mt-4 text-sm rounded-xl disabled:opacity-40'
                  >
                    {current >= DEMO_EXERCISES.length - 1
                      ? '¡Demo completado! Regístrate →'
                      : 'Siguiente pregunta →'}
                  </button>
                )}
              </div>
            </div>

            {/* XP earned */}
            <div className='flex items-center justify-between mt-3 px-1'>
              <span className='text-xs' style={{ color: '#484f58' }}>
                Demo interactivo — la app real tiene 200+ lecciones
              </span>
              <span className='text-xs font-bold' style={{ color: '#4ade80' }}>
                +{xpEarned} XP ⚡
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
