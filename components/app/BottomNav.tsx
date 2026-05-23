'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  {
    href: '/app',
    label: 'Inicio',
    icon: (active: boolean) => (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
        <path
          d='M3 12L12 3L21 12V20C21 20.5523 20.5523 21 20 21H15V16H9V21H4C3.44772 21 3 20.5523 3 20V12Z'
          fill={active ? '#8b5cf6' : 'none'}
          stroke={active ? '#8b5cf6' : '#4a5280'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    href: '/app/aprender',
    label: 'Aprender',
    icon: (active: boolean) => (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
        <path
          d='M12 2L2 7L12 12L22 7L12 2Z'
          fill={active ? '#8b5cf6' : 'none'}
          stroke={active ? '#8b5cf6' : '#4a5280'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2 17L12 22L22 17M2 12L12 17L22 12'
          stroke={active ? '#8b5cf6' : '#4a5280'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    href: '/app/desafios',
    label: 'Desafíos',
    icon: (active: boolean) => (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
        <polygon
          points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'
          fill={active ? '#8b5cf6' : 'none'}
          stroke={active ? '#8b5cf6' : '#4a5280'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    href: '/app/ranking',
    label: 'Ranking',
    icon: (active: boolean) => (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
        <rect
          x='18' y='3' width='4' height='18' rx='1'
          fill={active ? '#8b5cf6' : 'none'}
          stroke={active ? '#8b5cf6' : '#4a5280'}
          strokeWidth='2'
        />
        <rect
          x='10' y='8' width='4' height='13' rx='1'
          fill={active ? '#8b5cf6' : 'none'}
          stroke={active ? '#8b5cf6' : '#4a5280'}
          strokeWidth='2'
        />
        <rect
          x='2' y='13' width='4' height='8' rx='1'
          fill={active ? '#8b5cf6' : 'none'}
          stroke={active ? '#8b5cf6' : '#4a5280'}
          strokeWidth='2'
        />
      </svg>
    ),
  },
  {
    href: '/app/perfil',
    label: 'Perfil',
    icon: (active: boolean) => (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
        <circle
          cx='12' cy='8' r='4'
          fill={active ? '#8b5cf6' : 'none'}
          stroke={active ? '#8b5cf6' : '#4a5280'}
          strokeWidth='2'
        />
        <path
          d='M4 20C4 17.7909 7.58172 16 12 16C16.4183 16 20 17.7909 20 20'
          stroke={active ? '#8b5cf6' : '#4a5280'}
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    ),
  },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <div className='bottom-nav'>
      {NAV.map((item) => {
        const active = item.href === '/app'
          ? pathname === '/app'
          : pathname.startsWith(item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            className='flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all'
            style={{
              color: active ? '#8b5cf6' : '#4a5280',
              background: active ? 'rgba(139,92,246,0.1)' : 'transparent',
              minWidth: '48px',
            }}
          >
            {item.icon(active)}
            <span className='text-[10px] font-semibold leading-none'>
              {item.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
