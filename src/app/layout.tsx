import { AuthContextProvider } from 'context/auth'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'components/Toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HeadCounter',
  description: 'HeadCounter best AI assistant for HeadHunter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className}`}>
        <div className="flex justify-between px-4 mx-auto min-h-screen bg-white dark:bg-gray-900">
          <AuthContextProvider>{children}</AuthContextProvider>
          <Toaster />
        </div>
      </body>
    </html>
  )
}
