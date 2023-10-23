import { ReactNode } from 'react'

export const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative h-screen w-full lg:pl-64">
      <div className="py-10 lg:py-14">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Welcome To HeadCounter
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            an AI assistant for Header Hunter
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}
