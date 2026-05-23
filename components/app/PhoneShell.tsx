'use client'
import { type ReactNode } from 'react'

export default function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <>
      {/* ── Mobile: full screen ── */}
      <div className='md:hidden w-full h-[100dvh] flex flex-col overflow-hidden bg-[#0a0c1a]'>
        {children}
      </div>

      {/* ── Desktop: phone simulator ── */}
      <div
        className='hidden md:flex min-h-screen items-center justify-center relative overflow-hidden'
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(139,92,246,0.07) 0%, #07080f 70%)' }}
      >
        {/* Background grid */}
        <div className='absolute inset-0 bg-grid opacity-60 pointer-events-none' />

        {/* Floating label top-left */}
        <a
          href='/'
          className='absolute top-6 left-6 flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70'
          style={{ color: '#94a3b8' }}
        >
          <span style={{ fontSize: '1.25rem' }}>🐧</span>
          <span>
            Apren<span style={{ color: '#8b5cf6' }}>Dev</span>
          </span>
          <span style={{ color: '#4a5280', marginLeft: '4px' }}>← Landing</span>
        </a>

        {/* "Only mobile app" notice */}
        <div className='absolute top-6 right-6 flex flex-col items-end gap-1'>
          <div
            className='text-xs px-3 py-1.5 rounded-full font-medium'
            style={{
              background: 'rgba(139,92,246,0.12)',
              border: '1px solid rgba(139,92,246,0.3)',
              color: '#a78bfa',
            }}
          >
            📱 Aplicación móvil
          </div>
          <p className='text-xs' style={{ color: '#4a5280' }}>Optimizada para teléfono</p>
        </div>

        {/* Phone frame */}
        <div className='relative phone-shell glow-purple'>
          {/* Notch */}
          <div className='phone-notch' />

          {/* Status bar */}
          <div
            className='absolute top-0 left-0 right-0 h-12 flex items-end justify-between px-8 pb-1 z-40'
            style={{ paddingTop: '14px' }}
          >
            <span className='text-xs font-semibold' style={{ color: '#f8fafc' }}>9:41</span>
            <div className='flex items-center gap-1.5'>
              <svg width='16' height='12' viewBox='0 0 16 12' fill='#f8fafc'>
                <rect x='0' y='8' width='3' height='4' rx='0.5'/>
                <rect x='4.5' y='5.5' width='3' height='6.5' rx='0.5'/>
                <rect x='9' y='2.5' width='3' height='9.5' rx='0.5'/>
                <rect x='13.5' y='0' width='2.5' height='12' rx='0.5' opacity='0.4'/>
              </svg>
              <svg width='16' height='12' viewBox='0 0 16 12' fill='#f8fafc'>
                <path d='M8 2.5C10.5 2.5 12.7 3.6 14.2 5.3L15.5 4C13.6 2 11 0.8 8 0.8C5 0.8 2.4 2 0.5 4L1.8 5.3C3.3 3.6 5.5 2.5 8 2.5Z'/>
                <path d='M8 6C9.7 6 11.2 6.7 12.3 7.8L13.6 6.5C12.1 5 10.2 4 8 4C5.8 4 3.9 5 2.4 6.5L3.7 7.8C4.8 6.7 6.3 6 8 6Z'/>
                <circle cx='8' cy='10.5' r='1.5'/>
              </svg>
              <div className='flex items-center gap-0.5'>
                <div className='w-6 h-3 rounded-sm border' style={{ borderColor: '#f8fafc' }}>
                  <div className='h-full w-4/5 rounded-sm' style={{ background: '#f8fafc' }} />
                </div>
              </div>
            </div>
          </div>

          {/* App content */}
          <div className='absolute inset-0 pt-12 overflow-hidden'>
            {children}
          </div>
        </div>

        {/* Side decorations */}
        <div className='absolute left-1/2 -translate-x-1/2 bottom-6 flex items-center gap-2 text-xs' style={{ color: '#4a5280' }}>
          <span>Swipe ↑ para navegar</span>
          <span>·</span>
          <span>390 × 844px</span>
        </div>
      </div>
    </>
  )
}
