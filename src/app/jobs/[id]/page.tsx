'use client'

import useSWR from 'swr'
import Loading from 'app/loading'
import { Prisma } from '@prisma/client'
import { BaseLayout } from 'app/components/Layout/BaseLayout'
import CustomNotFound from 'app/not-found'
import { Actions, Content, Header } from 'app/components/Jobs/Detail'

export default function ShowBookPage({ params }: { params: { id: string } }) {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const fetcher = async (url: string) =>
    fetch(url, payload).then((res) => res.json())
  const { data, isLoading } = useSWR(`/api/jobs/${params.id}`, fetcher, {})

  if (isLoading) return <Loading text="job" />
  const job = data as Prisma.JobCreateInput
  if (!job) return <CustomNotFound />
  return (
    <BaseLayout>
      <Header deadline={job.deadline} tags={job.tags} title={job.title} />
      <Content job={job} />
      <Actions jId={job.id} />
    </BaseLayout>
  )
}
