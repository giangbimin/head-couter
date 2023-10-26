import { FC } from 'react'

type JobProps = {
  title: string
  deadline: string | undefined
  tags: string | undefined
}

export const Header: FC<JobProps> = ({ title, deadline, tags }) => {
  return (
    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex flex-col gap-3">
      <div className="grid gap-3 md:flex md:justify-between md:items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {title}
          </h2>
        </div>

        <div className="inline-flex gap-x-2">
          <p className="text-sm text-gray-600 dark:text-gray-400  font-semibold ">
            <span className="leading-none font-2xl">Deadline: </span>
            {deadline}
          </p>
        </div>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {tags ? (
          <div className="block float-left mb-2">
            {tags.split(', ').map((tag, index) => (
              <span
                key={index}
                className="inline-block text-xs font-medium mr-2 mb-2 px-3 py-2 rounded-md bg-blue-100 text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
