'use client'

import React, { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useAuthContext } from 'context/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'components/Toast'
import { useForm } from 'react-hook-form'
import { LoginRequest } from 'api'

const loginFormDefaultValues = { username: '', password: '' }
const validationSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export default function LoginPage() {
  const { push } = useRouter()
  const { login, isLogin } = useAuthContext()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: loginFormDefaultValues,
    resolver: zodResolver(validationSchema),
  })

  const onSubmit = async () => {
    try {
      const data = getValues() as LoginRequest
      await login(data)
      if (isLogin) {
        toast.success({ title: 'Login Success' })
      } else {
        toast.error({ title: 'Invalid username or password' })
      }
    } catch (error) {
      toast.error({ title: 'Invalid username or password' })
    }
  }

  useEffect(() => {
    if (isLogin) push('/jobs')
  }, [isLogin, push])

  return (
    <section className="bg-gray-50 dark:bg-gray-900 w-full">
      <div className="flex flex-col justify-center items-center px-6 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="username"
              >
                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </p>
                <input
                  {...register('username')}
                  autoComplete="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="username"
                  name="username"
                  placeholder="name@company.com"
                  readOnly={isSubmitting}
                  type="text"
                  required
                />
              </label>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="password"
              >
                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </p>
                <input
                  {...register('password')}
                  autoComplete="current-password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  readOnly={isSubmitting}
                  type="password"
                  required
                />
              </label>
              <button
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 my-7 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? 'Loading' : 'Sign in'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
