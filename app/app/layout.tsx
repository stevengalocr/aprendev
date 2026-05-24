import type { ReactNode } from 'react'
import PhoneShell from '@/components/app/PhoneShell'
import { DemoProvider } from '@/lib/demo/store'
import { I18nProvider } from '@/lib/i18n/store'
import DemoPanel from '@/components/app/DemoPanel'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <DemoProvider>
        <PhoneShell>{children}</PhoneShell>
        <DemoPanel />
      </DemoProvider>
    </I18nProvider>
  )
}
