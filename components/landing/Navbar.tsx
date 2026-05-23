'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className='fixed top-0 left-0 right-0 z-50 transition-all duration-300'
      style={{
        background: scrolled ? 'rgba(7,9,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #21262d' : '1px solid transparent',
      }}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2.5 group'>
          <div className='relative w-9 h-9'>
            <Image
              src='/mascot.png'
              alt='Aprendev mascot'
              fill
              className='object-contain drop-shadow-lg'
              onError={(e) => {
                const t = e.target as HTMLImageElement
                t.style.display = 'none'
              }}
            />
            <span className='text-2xl' style={{ display: 'none' }}>🐧</span>
          </div>
          <span
            className='text-xl font-bold tracking-tight'
            style={{ color: '#f0f6fc' }}
          >
            apren<span style={{ color: '#4ade80' }}>dev</span>
          </span>
        </Link>

        {/* Desktop nav */}
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
              style={{ color: '#8b949e' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#f0f6fc')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8b949e')}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className='hidden md:flex items-center gap-3'>
          <Link
            href='/login'
            className='text-sm font-medium px-4 py-2 rounded-lg transition-colors'
            style={{ color: '#8b949e' }}
          >
            Iniciar sesión
          </Link>
          <Link
            href='/registro'
            className='btn-primary text-sm px-5 py-2.5'
          >
            Empezar gratis →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className='md:hidden p-2 rounded-lg'
          style={{ color: '#8b949e' }}
          onClick={() => setOpen(!open)}
          aria-label='Menu'
        >
          <div className='flex flex-col gap-1.5 w-5'>
            <span
              className='block h-0.5 transition-all'
              style={{
                background: '#8b949e',
                transform: open ? 'rotate(45deg) translateY(8px)' : 'none',
              }}
            />
            <span
              className='block h-0.5 transition-all'
              style={{ background: '#8b949e', opacity: open ? 0 : 1 }}
            />
            <span
              className='block h-0.5 transition-all'
              style={{
                background: '#8b949e',
                transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none',
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className='md:hidden px-4 pb-4 pt-2'
          style={{ background: 'rgba(7,9,15,0.98)', borderBottom: '1px solid #21262d' }}
        >
          <div className='flex flex-col gap-3'>
            {[
              { label: 'Cursos', href: '#cursos' },
              { label: 'Cómo funciona', href: '#como-funciona' },
              { label: 'Precios', href: '#precios' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className='text-sm font-medium py-2'
                style={{ color: '#8b949e' }}
              >
                {item.label}
              </a>
            ))}
            <Link
              href='/registro'
              className='btn-primary text-sm text-center px-5 py-3 mt-2'
            >
              Empezar gratis →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
