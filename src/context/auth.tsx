'use client'

import { createContext, isSSR } from '@dwarvesf/react-utils'
import { useCallback, useEffect, useState } from 'react'
import { WithChildren } from 'types/common'
import { LoginRequest, LoginResponseData, login as signIn } from 'api'
import { emitter } from 'utils/emitter'

interface AuthContextValues {
  isLogin: boolean
  login: (loginRequest: LoginRequest) => Promise<void>
  logout: () => void
  user?: LoginResponseData | undefined
}

const [Provider, useAuthContext] = createContext<AuthContextValues>({
  name: 'auth',
})

const tokenKey = process.env.TOKEN_KEY || 'bearer'
const userKey = 'current-user'

const AuthContextProvider = ({ children }: WithChildren) => {
  const [isLogin, setIsLogin] = useState(() => {
    return isSSR() ? false : Boolean(window.localStorage.getItem(tokenKey))
  })
  const [user, setUser] = useState<LoginResponseData>()

  const logout = useCallback(() => {
    setIsLogin(false)
    setUser(undefined)
    cleanAuth()
  }, [])

  useEffect(() => {
    const bootstrapAsync = async () => {
      if (!isLogin) return
      const userRaw = window.localStorage.getItem(userKey)
      if (!userRaw) {
        logout()
        return
      }
      try {
        setUser(JSON.parse(userRaw) as LoginResponseData)
      } catch {
        logout()
      }
    }
    bootstrapAsync()
    emitter.on('FORCE_LOGOUT', logout)
    return () => {
      emitter.off('FORCE_LOGOUT', logout)
    }
  }, [isLogin, logout])

  const login = async (loginRequest: LoginRequest) => {
    try {
      const res = await signIn(loginRequest)
      if (res.data) {
        setIsLogin(true)
        window.localStorage.setItem(userKey, JSON.stringify(res.data))
        setUser(res.data)
        window.localStorage.setItem(tokenKey, res.data.accessToken)
      }
    } catch (error) {
      throw new Error('Incorrect username or password')
    }
  }

  const cleanAuth = () => {
    window.localStorage.removeItem(tokenKey)
    window.localStorage.removeItem(userKey)
  }

  return (
    <Provider value={{ isLogin, login, logout, user }}>{children}</Provider>
  )
}

export { AuthContextProvider, useAuthContext }
