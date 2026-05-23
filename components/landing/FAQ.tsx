'use client'
import { useState } from 'react'

const FAQS = [
  {
    q: '¿Necesito experiencia previa para usar Aprendev?',
    a: 'No, para nada. Las rutas empiezan desde cero absoluto (HTML, variables, lógica). Si ya tienes experiencia, elige la lección o ruta que corresponda a tu nivel y empieza desde ahí.',
  },
  {
    q: '¿Cuánto tiempo necesito dedicarle al día?',
    a: 'Las lecciones están diseñadas para completarse en 5-10 minutos. Con 1 lección al día mantienes la racha y avanzas consistentemente. Si quieres avanzar más rápido, puedes hacer varias lecciones seguidas.',
  },
  {
    q: '¿Aprendev reemplaza un bootcamp o curso completo?',
    a: 'Aprendev es complementario. Es ideal para aprender conceptos, practicar sintaxis y mantener el hábito diario. Para proyectos complejos y mentoring personalizado, los bootcamps tienen su lugar. Pero para el 80% de lo que necesitas saber como dev, Aprendev lo cubre.',
  },
  {
    q: '¿Hay app móvil?',
    a: 'Actualmente Aprendev es una web app completamente optimizada para móvil. Puedes agregarla a tu pantalla de inicio como PWA. Una app nativa para iOS/Android está en el roadmap para Q3 2025.',
  },
  {
    q: '¿Puedo cancelar el plan Pro en cualquier momento?',
    a: 'Sí, 100%. Cancelas desde tu perfil con un clic y no te cobraremos más. Mantienes acceso Pro hasta el final del período pagado.',
  },
  {
    q: '¿El contenido se actualiza con las novedades del año?',
    a: 'Sí, añadimos lecciones nuevas cada semana. En 2025 ya sumamos rutas de AI Agents, Model Context Protocol (MCP), React 19 y más. Los usuarios Pro tienen acceso anticipado a todo contenido nuevo.',
  },
  {
    q: '¿Hay certificados al terminar una ruta?',
    a: 'Sí, en el plan Pro recibes un certificado descargable y compartible en LinkedIn al completar cada ruta. En el plan Gratis recibes una insignia digital en tu perfil.',
  },
  {
    q: '¿Puedo usar Aprendev para prepararme para entrevistas técnicas?',
    a: 'Absolutamente. La ruta de Algoritmos & CS está específicamente diseñada para prep de entrevistas técnicas (LeetCode-style), con ejercicios de Big O, estructuras de datos y patrones comunes en FAANG/startups.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id='faq'
      className='py-24 px-4 sm:px-6'
      style={{ background: 'var(--bg)' }}
    >
      <div className='max-w-3xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='badge-green inline-block mb-4'>FAQ</div>
          <h2
            className='text-3xl sm:text-4xl font-black mb-4'
            style={{ color: '#f0f6fc' }}
          >
            Preguntas frecuentes
          </h2>
          <p style={{ color: '#8b949e' }}>
            ¿No encuentras tu respuesta?{' '}
            <a href='mailto:hola@aprendev.com' style={{ color: '#4ade80' }}>
              hola@aprendev.com
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className='flex flex-col gap-3'>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className='rounded-xl overflow-hidden transition-all'
              style={{
                background: 'var(--bg-card)',
                border: `1px solid ${open === i ? 'rgba(74,222,128,0.3)' : 'var(--border)'}`,
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className='w-full flex items-center justify-between p-5 text-left gap-4'
              >
                <span className='font-semibold text-sm sm:text-base' style={{ color: '#f0f6fc' }}>
                  {faq.q}
                </span>
                <span
                  className='text-lg flex-shrink-0 transition-transform'
                  style={{
                    color: '#4ade80',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <div className='px-5 pb-5'>
                  <p
                    className='text-sm leading-relaxed'
                    style={{ color: '#8b949e', borderTop: '1px solid #21262d', paddingTop: '12px' }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
