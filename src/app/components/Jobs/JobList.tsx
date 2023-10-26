'use client'

import useSWR from 'swr'
import { Prisma } from '@prisma/client'
import Loading from 'app/loading'
import { useSearchParams } from 'next/navigation'
import JobColumns from './JobColumns'
import JobItem from './JobItem'

const JobList = () => {
  const searchParams = useSearchParams()
  const title = searchParams.get('title') || ''
  const page = searchParams.get('page') || '1'

  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const fetcher = async (url: string) =>
    fetch(url, payload).then((res) => res.json())
  const { data, isLoading } = useSWR(
    `/api/jobs?title=${title}&page=${page}`,
    fetcher,
    {},
  )

  if (isLoading) return <Loading text="jobs" />
  if (!data) return null
  const jobs = data as Prisma.JobCreateInput[]
  return (
    <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
      <JobColumns />
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {jobs.map((job) => (
          <JobItem
            key={job.id}
            deadline={job.deadline}
            jId={job.id}
            position={job.title}
            recruiterEmail={job.contact}
            recruiterName={job.contact}
            status="Published"
            summary={job.summary}
            tags={job.tags.split(', ')}
          />
        ))}
      </tbody>
    </table>
  )
}
export default JobList
