'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className='fixed top-0 left-0 right-0 z-50 transition-all duration-300'
      style={{
        background: scrolled ? 'rgba(7,8,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30,33,64,0.8)' : '1px solid transparent',
      }}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2.5 group'>
          <div className='relative w-9 h-9'>
            <Image
              src='/mascot.png'
              alt='AprenDev'
              fill
              className='object-contain drop-shadow-lg'
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
            />
          </div>
          <span className='text-xl font-black tracking-tight' style={{ color: '#f8fafc' }}>
            Apren<span style={{ color: '#8b5cf6' }}>Dev</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className='hidden md:flex items-center gap-6'>
          {[
            { label: 'Cursos', href: '#cursos' },
            { label: 'Cómo funciona', href: '#como-funciona' },
            { label: 'Precios', href: '#precios' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-sm font-medium transition-colors'
              style={{ color: '#94a3b8' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#f8fafc')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#94a3b8')}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className='hidden md:flex items-center gap-3'>
          <Link
            href='/app'
            className='text-sm font-medium px-4 py-2 rounded-xl transition-colors'
            style={{ color: '#94a3b8' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#f8fafc')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#94a3b8')}
          >
            Iniciar sesión
          </Link>
          <Link
            href='/app'
            className='btn-primary text-sm px-5 py-2.5 rounded-xl'
          >
            Jugar gratis 🐧
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className='md:hidden p-2 rounded-lg'
          onClick={() => setOpen(!open)}
          aria-label='Menu'
        >
          <div className='flex flex-col gap-1.5 w-5'>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className='block h-0.5 rounded-full transition-all duration-200'
                style={{
                  background: '#94a3b8',
                  transform: open && i === 0 ? 'rotate(45deg) translateY(8px)' : open && i === 2 ? 'rotate(-45deg) translateY(-8px)' : 'none',
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {open && (
        <div
          className='md:hidden px-4 pb-4 pt-2'
          style={{ background: 'rgba(7,8,15,0.98)', borderBottom: '1px solid #1e2140' }}
        >
          <div className='flex flex-col gap-3'>
            {[
              { label: 'Cursos', href: '#cursos' },
              { label: 'Cómo funciona', href: '#como-funciona' },
              { label: 'Precios', href: '#precios' },
            ].map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}
                className='text-sm font-medium py-2' style={{ color: '#94a3b8' }}>
                {item.label}
              </a>
            ))}
            <Link href='/app' className='btn-primary text-sm text-center px-5 py-3 mt-1 rounded-xl'>
              🐧 Jugar gratis
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
