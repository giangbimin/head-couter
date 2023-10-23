'use client'

import { createContext, isSSR } from '@dwarvesf/react-utils'
import { useCallback, useEffect, useState } from 'react'
import { WithChildren } from 'types/common'
import { LoginRequest, LoginResponseData, login as signIn } from 'api'
import { emitter } from 'utils/emitter'

interface AuthContextValues {
  isLogin: boolean
  login: (loginRequest: LoginRequest) => Promise<any>
  logout: () => void
  user?: LoginResponseData | undefined
}

const [Provider, useAuthContext] = createContext<AuthContextValues>({
  name: 'auth',
})

const tokenKey = 'bearer-token'
const userKey = 'current-user'
const getToken = () => window.localStorage.getItem(tokenKey)
const cleanAuth = () => {
  window.localStorage.removeItem(tokenKey)
  window.localStorage.removeItem(userKey)
}

const AuthContextProvider = ({ children }: WithChildren) => {
  const [isLogin, setIsLogin] = useState(() => {
    return isSSR() ? false : Boolean(window.localStorage.getItem(tokenKey))
  })
  const [user, setUser] = useState<LoginResponseData>()

  const login = useCallback(async (loginRequest: LoginRequest) => {
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
  }, [])

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

  return (
    <Provider value={{ isLogin, login, logout, user }}>{children}</Provider>
  )
}

export { AuthContextProvider, useAuthContext, getToken }
