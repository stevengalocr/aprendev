import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className='py-12 px-4 sm:px-6'
      style={{ background: '#020408', borderTop: '1px solid #21262d' }}
    >
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10'>
          {/* Brand */}
          <div className='lg:col-span-1'>
            <div className='flex items-center gap-2 mb-3'>
              <Image
                src='/mascot.png'
                alt='Aprendev'
                width={32}
                height={32}
                className='object-contain'
              />
              <span className='text-lg font-bold' style={{ color: '#f0f6fc' }}>
                apren<span style={{ color: '#4ade80' }}>dev</span>
              </span>
            </div>
            <p className='text-sm leading-relaxed mb-4' style={{ color: '#8b949e' }}>
              La plataforma gamificada para aprender programación en Latinoamérica.
              Hecho con ❤️ para devs.
            </p>
            <div className='flex gap-3'>
              {['𝕏', '📸', '💼', '🎮'].map((icon) => (
                <button
                  key={icon}
                  className='w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors'
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #21262d', color: '#8b949e' }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className='font-semibold text-sm mb-4' style={{ color: '#f0f6fc' }}>
              Producto
            </h4>
            <ul className='flex flex-col gap-2'>
              {['Cursos', 'Rutas de carrera', 'Precios', 'Changelog', 'Roadmap'].map((item) => (
                <li key={item}>
                  <Link
                    href='#'
                    className='text-sm transition-colors hover:text-white'
                    style={{ color: '#8b949e' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className='font-semibold text-sm mb-4' style={{ color: '#f0f6fc' }}>
              Recursos
            </h4>
            <ul className='flex flex-col gap-2'>
              {['Blog', 'Comunidad Discord', 'Podcast', 'Newsletter', 'Open source'].map((item) => (
                <li key={item}>
                  <Link
                    href='#'
                    className='text-sm transition-colors hover:text-white'
                    style={{ color: '#8b949e' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className='font-semibold text-sm mb-4' style={{ color: '#f0f6fc' }}>
              Empresa
            </h4>
            <ul className='flex flex-col gap-2'>
              {['Sobre nosotros', 'Trabaja con nosotros', 'Términos de uso', 'Privacidad', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link
                    href='#'
                    className='text-sm transition-colors hover:text-white'
                    style={{ color: '#8b949e' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className='flex flex-col sm:flex-row items-center justify-between gap-3 pt-8'
          style={{ borderTop: '1px solid #21262d' }}
        >
          <p className='text-xs' style={{ color: '#484f58' }}>
            © 2025 Aprendev. Hecho con 🐧 para la comunidad dev de LATAM.
          </p>
          <div className='flex items-center gap-1 text-xs' style={{ color: '#484f58' }}>
            <span>🇲🇽 🇨🇴 🇦🇷 🇨🇱 🇵🇪 🇻🇪 🇪🇸</span>
            <span className='ml-1'>Español, para todos</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
