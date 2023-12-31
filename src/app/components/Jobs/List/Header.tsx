'use client'

import Link from 'next/link'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'

export const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const title = searchParams.get('title') || ''
  const [searchTerm, setSearchTerm] = useState(title)

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)
    return params.toString()
  }

  const search = () => {
    router.push(`${pathname}?${createQueryString('title', searchTerm)}`)
  }

  return (
    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
      <div className="flex gap-2">
        <label htmlFor="hs-as-table-product-review-search">
          <span className="sr-only">Search</span>
          <div className="relative">
            <input
              className="py-2 px-3 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              id="hs-as-table-product-review-search"
              name="hs-as-table-product-review-search"
              placeholder="Search"
              type="text"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value)
              }}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="currentColor"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
        </label>
        <button
          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          onClick={() => {
            search()
          }}
        >
          Search
        </button>
      </div>

      <div className="inline-flex gap-x-2">
        <div className="flex justify-end gap-x-2" />
        <Link
          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          href="/jobs/new"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
          Add Job
        </Link>
      </div>
    </div>
  )
}
