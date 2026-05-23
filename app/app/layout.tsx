import type { ReactNode } from 'react'
import PhoneShell from '@/components/app/PhoneShell'

export default function AppLayout({ children }: { children: ReactNode }) {
  return <PhoneShell>{children}</PhoneShell>
}
