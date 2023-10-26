'use client'

import { useAuthContext } from 'context/auth'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { BaseLayout } from './BaseLayout'

export const BaseAuthenticatedLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  const routes = useRouter()
  const { isLogin } = useAuthContext()

  useEffect(() => {
    if (!isLogin) {
      routes.push('/login')
    }
  }, [isLogin, routes])

  return isLogin ? <BaseLayout>{children}</BaseLayout> : null
}
