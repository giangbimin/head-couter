'use client'

import { createContext } from '@dwarvesf/react-utils'
import { WithChildren } from 'types/common'
import { Prisma } from '@prisma/client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { OpenAIRequest, getChatCompletions } from 'api'
import { JdFormatter } from 'services/AIGenerator'

const defaultValues: Prisma.JobCreateInput = {
  title: '',
  summary: '',
  responsibilities: '',
  requirements: '',
  skills: '',
  workEnvironment: '',
  salary: '',
  benefits: '',
  interviews: '',
  company: '',
  deadline: '',
  contact: '',
  tags: '',
  userId: '',
}
interface JobContextValues {
  formValues: Prisma.JobCreateInput
  formatJD: (title: string, description: string) => void
  createJob: (jobPayload: Prisma.JobCreateInput) => Promise<any>
}

const [Provider, useJobContext] = createContext<JobContextValues>({
  name: 'job',
})

const JobContextProvider = ({ children }: WithChildren) => {
  const routes = useRouter()
  const [formValues, setFormValues] =
    useState<Prisma.JobCreateInput>(defaultValues)

  const createJob = async (jobPayload: Prisma.JobCreateInput) => {
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobPayload),
      })
      if (response.ok) {
        // toast.success({
        //   title: 'Job created',
        //   message: 'created success!',
        // })
        routes.push('/jobs')
      } else {
        // toast.error({
        //   title: 'failed',
        //   message: 'created failed!',
        // })
      }
    } catch (error) {
      // toast.error({
      //   title: 'failed',
      //   message: 'created failed!',
      // })
      throw new Error('Incorrect username or password')
    }
  }

  const formatJD = async (title: string, description: string) => {
    try {
      const req: OpenAIRequest = {
        model: 'openai/gpt-3.5-turbo',
        messages: JdFormatter.messages(title, description),
      }
      const res = await getChatCompletions(req)
      const data = JSON.parse(
        res.choices[0].message.content,
      ) as Prisma.JobCreateInput
      setFormValues(data)
    } catch (error) {
      throw new Error('Incorrect username or password')
    }
  }
  return (
    <Provider value={{ formValues, formatJD, createJob }}>{children}</Provider>
  )
}

export { JobContextProvider, useJobContext }
