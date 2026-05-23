'use client'
import { useState } from 'react'
import Link from 'next/link'

const FREE_FEATURES = [
  '✅ 1 ruta de aprendizaje completa',
  '✅ 5 corazones por sesión',
  '✅ XP y niveles básicos',
  '✅ Leaderboard semanal',
  '✅ Streak tracking',
  '❌ Todas las rutas (6)',
  '❌ Corazones ilimitados',
  '❌ Explicaciones con IA',
  '❌ Proyectos finales',
  '❌ Certificados',
]

const PRO_FEATURES = [
  '✅ Todas las rutas (6 y más)',
  '✅ Corazones ilimitados',
  '✅ XP doble en lecciones',
  '✅ Leaderboard exclusivo Pro',
  '✅ Streak tracking avanzado',
  '✅ Explicaciones con IA',
  '✅ Proyectos finales con feedback',
  '✅ Certificados descargables',
  '✅ Acceso anticipado a nuevas rutas',
  '✅ Discord exclusivo de mentores',
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  const monthlyPrice = annual ? 5.99 : 9.99
  const annualTotal = (5.99 * 12).toFixed(0)

  return (
    <section
      id='precios'
      className='py-24 px-4 sm:px-6'
      style={{ background: 'var(--bg-card)' }}
    >
      <div className='max-w-5xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='badge-green inline-block mb-4'>Precios</div>
          <h2
            className='text-3xl sm:text-4xl md:text-5xl font-black mb-4'
            style={{ color: '#f0f6fc' }}
          >
            Empieza gratis,{' '}
            <span className='gradient-text'>escala cuando quieras</span>
          </h2>
          <p className='text-lg mb-8' style={{ color: '#8b949e' }}>
            Sin tarjeta de crédito para empezar. Sin sorpresas.
          </p>

          {/* Toggle */}
          <div
            className='inline-flex items-center gap-2 p-1 rounded-xl'
            style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
          >
            <button
              onClick={() => setAnnual(false)}
              className='px-4 py-2 rounded-lg text-sm font-medium transition-all'
              style={{
                background: !annual ? '#21262d' : 'transparent',
                color: !annual ? '#f0f6fc' : '#8b949e',
              }}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className='px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2'
              style={{
                background: annual ? '#21262d' : 'transparent',
                color: annual ? '#f0f6fc' : '#8b949e',
              }}
            >
              Anual
              <span
                className='text-xs px-1.5 py-0.5 rounded'
                style={{ background: 'rgba(74,222,128,0.2)', color: '#4ade80' }}
              >
                -40%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Free */}
          <div
            className='p-8 rounded-2xl flex flex-col'
            style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
          >
            <div className='mb-6'>
              <div className='text-3xl mb-2'>🐧</div>
              <h3 className='text-xl font-bold mb-1' style={{ color: '#f0f6fc' }}>
                Gratis
              </h3>
              <p className='text-sm mb-4' style={{ color: '#8b949e' }}>
                Empieza a aprender hoy, sin compromisos
              </p>
              <div className='flex items-end gap-1'>
                <span className='text-4xl font-black' style={{ color: '#f0f6fc' }}>
                  $0
                </span>
                <span className='text-sm mb-1' style={{ color: '#8b949e' }}>/ siempre</span>
              </div>
            </div>

            <ul className='flex flex-col gap-2.5 mb-8 flex-1'>
              {FREE_FEATURES.map((f) => (
                <li key={f} className='text-sm flex items-start gap-2' style={{ color: f.startsWith('❌') ? '#484f58' : '#8b949e' }}>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href='/registro'
              className='block text-center py-3 rounded-xl font-semibold transition-colors'
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid #21262d',
                color: '#f0f6fc',
              }}
            >
              Empezar gratis
            </Link>
          </div>

          {/* Pro */}
          <div
            className='relative p-8 rounded-2xl flex flex-col gradient-border'
            style={{ background: 'var(--bg)' }}
          >
            <div
              className='absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold'
              style={{ background: 'linear-gradient(135deg, #4ade80, #22d3ee)', color: '#07090f' }}
            >
              MÁS POPULAR
            </div>

            <div className='mb-6'>
              <div className='text-3xl mb-2'>🚀</div>
              <h3 className='text-xl font-bold mb-1' style={{ color: '#f0f6fc' }}>
                Pro
              </h3>
              <p className='text-sm mb-4' style={{ color: '#8b949e' }}>
                Todo lo que necesitas para convertirte en dev
              </p>
              <div className='flex items-end gap-1'>
                <span className='text-4xl font-black gradient-text-green'>
                  ${monthlyPrice.toFixed(2)}
                </span>
                <span className='text-sm mb-1' style={{ color: '#8b949e' }}>/ mes</span>
              </div>
              {annual && (
                <p className='text-xs mt-1' style={{ color: '#4ade80' }}>
                  ${annualTotal} facturado anualmente · ahorras $48
                </p>
              )}
            </div>

            <ul className='flex flex-col gap-2.5 mb-8 flex-1'>
              {PRO_FEATURES.map((f) => (
                <li key={f} className='text-sm flex items-start gap-2' style={{ color: '#c9d1d9' }}>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href='/registro?plan=pro'
              className='btn-primary block text-center py-3 rounded-xl text-sm'
            >
              Empezar con Pro →
            </Link>

            <p className='text-xs text-center mt-3' style={{ color: '#484f58' }}>
              7 días de prueba gratis · Cancela cuando quieras
            </p>
          </div>
        </div>

        {/* FAQ teaser */}
        <p className='text-center mt-8 text-sm' style={{ color: '#8b949e' }}>
          ¿Tienes dudas sobre el plan?{' '}
          <a href='#faq' className='underline' style={{ color: '#4ade80' }}>
            Ve las preguntas frecuentes
          </a>
        </p>
      </div>
    </section>
  )
}
