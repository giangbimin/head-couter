import { FC } from 'react'

type JobProps = {
  position: string
  tags: string[]
  recruiterName: string
  recruiterEmail: string
  summary: string
  deadline: string
  status: string
}

const JobItem: FC<JobProps> = ({
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
      <td className="h-px w-px whitespace-nowrap">
        <div className="block h-full p-6">
          <div className="flex items-center gap-x-4">
            <div className="grow">
              <a
                className="block text-sm font-semibold text-gray-800 dark:text-gray-200"
                href="/"
              >
                {position}
              </a>
              <div className="">
                {tags.map((tag) => (
                  <span className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <a className="block h-full p-6" href="/">
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
        </a>
      </td>
      <td className="h-px w-72 min-w-[18rem]">
        <div className="block h-full p-6">
          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
            {position}
          </span>
          <span className="block text-sm text-gray-500">{summary}</span>
        </div>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <div className="block h-full p-6">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {deadline}
          </span>
        </div>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <a className="block h-full p-6" href="/">
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
        </a>
      </td>
    </tr>
  )
}
export default JobItem
