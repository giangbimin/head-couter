import Link from 'next/link'
import { FC } from 'react'

type JobProps = {
  jId: string | undefined
  position: string
  tags: string[]
  recruiterName: string
  recruiterEmail: string
  summary: string
  deadline: string
  status: string
}

export const JobItem: FC<JobProps> = ({
  jId,
  position,
  tags,
  recruiterName,
  recruiterEmail,
  summary,
  deadline,
  status,
}) => {
  return (
    <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
      <td className="px-6 py-4 w-[320px] flex flex-col gap-4">
        <Link
          className="block text-xl font-semibold text-gray-800 dark:text-gray-200"
          href={`/jobs/${jId}`}
        >
          {position}
        </Link>
        <div className="block float-left">
          {tags.slice(0, 4).map((tag) => (
            <span className="inline-block text-xs font-medium mr-2 mb-2 px-3 py-2 rounded-md bg-blue-100 text-blue-800">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="block h-full">
          <div className="flex items-center gap-x-3">
            <div className="grow">
              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                {recruiterName}
              </span>
              <span className="block text-sm text-gray-500">
                {recruiterEmail}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
          {position}
        </span>
        <span className="block text-sm text-gray-500">{summary}</span>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {deadline}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="block h-full">
          <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <svg
              className="w-2.5 h-2.5"
              fill="currentColor"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            {status}
          </span>
        </div>
      </td>
    </tr>
  )
}
