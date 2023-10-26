import { Prisma } from '@prisma/client'
import { FC } from 'react'

type JobProps = {
  job: Prisma.JobCreateInput
}

export const Content: FC<JobProps> = ({ job }) => {
  const contentText = (columnName: string, data: string | undefined) => {
    if (!data) return null
    return (
      <>
        <dt className="py-3 font-semibold leading-none text-gray-900 dark:text-white flex justify-between items-center">
          <h5 className="font-2xl">{columnName}:</h5>
        </dt>
        <dd className="pl-2 whitespace-pre p-2 font-light text-gray-500 sm:p-3 dark:text-gray-400">
          {data}
        </dd>
      </>
    )
  }

  const contentList = (columnName: string, data: string | undefined) => {
    if (!data) return null
    return (
      <>
        <dt className="py-3 font-semibold leading-none text-gray-900 dark:text-white flex justify-between items-center">
          <h5 className="font-2xl">{columnName}:</h5>
        </dt>
        <dd className="pl-2 whitespace-pre p-2 font-light text-gray-500 sm:p-3 dark:text-gray-400">
          <ul className="list-disc pl-4">
            {data.split('\n').map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </dd>
      </>
    )
  }
  return (
    <dl className="w-full px-6 py-4 gap-3 divide-y divide-gray-200 dark:divide-gray-700">
      {contentText('Summary:', job.summary)}
      {contentList('Responsibilities:', job.responsibilities)}
      {contentList('Requirements:', job.requirements)}
      {contentList('Skills:', job.skills)}
      {contentText('Work Environment:', job.workEnvironment)}
      {contentText('Salary:', job.salary)}
      {contentList('Benefits:', job.benefits)}
      {contentText('Company:', job.company)}
      {contentText('Contact:', job.contact)}
    </dl>
  )
}
