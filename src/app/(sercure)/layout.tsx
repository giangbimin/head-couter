import { BaseAuthenticatedLayout } from 'app/components/Layout/BaseAuthenticatedLayout'
import { ReactNode } from 'react'

export default function SecureLayout({ children }: { children: ReactNode }) {
  return <BaseAuthenticatedLayout>{children}</BaseAuthenticatedLayout>
}
