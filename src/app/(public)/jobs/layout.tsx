import { BaseLayout } from 'app/components/Layout'
import { ReactNode } from 'react'

export default function JobLayout({ children }: { children: ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>
}
