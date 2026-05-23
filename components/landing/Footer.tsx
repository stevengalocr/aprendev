import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='py-12 px-4 sm:px-6' style={{ background: '#030408', borderTop: '1px solid #1e2140' }}>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10'>
          <div className='lg:col-span-1'>
            <div className='flex items-center gap-2 mb-3'>
              <Image src='/mascot.png' alt='GaloDev' width={30} height={30} className='object-contain' />
              <span className='text-lg font-black' style={{ color: '#f8fafc' }}>Galo<span style={{ color: '#8b5cf6' }}>Dev</span></span>
            </div>
            <p className='text-sm leading-relaxed mb-2' style={{ color: '#94a3b8' }}>
              Aprende. Codea. Construye tu futuro.<br/>
              Hecho para la comunidad dev de LATAM. 🐧
            </p>
            <p className='text-xs italic' style={{ color: '#4a5280' }}>
              "Llevas 47 días construyendo tu futuro."
            </p>
          </div>
          {[
            { title: 'Producto', links: ['Cursos', 'Rutas de carrera', 'Desafíos diarios', 'Precios', 'Changelog'] },
            { title: 'Comunidad', links: ['Discord', 'Blog', 'Newsletter', 'Podcast', 'Open source'] },
            { title: 'Empresa', links: ['Sobre nosotros', 'Trabaja con nosotros', 'Términos', 'Privacidad', 'Contacto'] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className='font-semibold text-sm mb-4' style={{ color: '#f8fafc' }}>{col.title}</h4>
              <ul className='flex flex-col gap-2'>
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href='#' className='text-sm transition-colors' style={{ color: '#94a3b8' }}>
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-between gap-3 pt-8' style={{ borderTop: '1px solid #1e2140' }}>
          <p className='text-xs' style={{ color: '#4a5280' }}>© 2025 GaloDev. Hecho con 🐧 para LATAM.</p>
          <div className='flex items-center gap-1 text-xs' style={{ color: '#4a5280' }}>
            <span>🇲🇽 🇨🇴 🇦🇷 🇨🇱 🇵🇪 🇻🇪 🇪🇸</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
