'use client'

import { FC } from 'react'

interface DetailProps {
  isAuthenticated: boolean
  title: string
  contents: string[]
}

const Detail: FC<DetailProps> = ({ isAuthenticated, title, contents }) => {
  const availableActions = () => {
    if (!isAuthenticated) return null
    return (
      <div className="ml-4 inline-flex gap-2">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          data-dropdown-toggle="dropdown"
          id="dropdownDefaultButton"
          type="button"
        >
          Dropdown button{' '}
          <svg
            aria-hidden="true"
            className="w-2.5 h-2.5 ml-2.5"
            fill="none"
            viewBox="0 0 10 6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 1 4 4 4-4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>

        <div
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          id="dropdown"
        >
          <ul
            aria-labelledby="dropdownDefaultButton"
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
          >
            <li>
              <button
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                type="button"
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                type="button"
              >
                Settings
              </button>
            </li>
            <li>
              <button
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                type="button"
              >
                Earnings
              </button>
            </li>
            <li>
              <button
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                type="button"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  const contentsSection = () => {
    if (contents.length === 1) {
      return (
        <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
          {contents[0]}
        </dd>
      )
    }
    return (
      <ul className="list-disc list-outside font-light text-gray-500 pl-5 mb-4  sm:mb-5 dark:text-gray-400">
        {contents.map((content, index) => (
          <li key={index} className="pl-2">
            {content}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white flex justify-between items-center">
        <div className="inline-flex items-center gap-2">
          {isAuthenticated && (
            <label
              className="relative inline-flex items-center cursor-pointer"
              htmlFor="showHide"
            >
              <input
                className="sr-only peer"
                id="showHide"
                type="checkbox"
                value=""
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                show/hide
              </span>
            </label>
          )}
          {title}
        </div>
        {availableActions()}
      </dt>
      {contentsSection()}
    </>
  )
}

export default Detail
