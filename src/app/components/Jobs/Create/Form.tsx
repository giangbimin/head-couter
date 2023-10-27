'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'components/Toast'
import { Prisma } from '@prisma/client'
import { useJobContext } from 'context/job'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRecommendationContext } from 'context/recommendation'
import { useRouter } from 'next/navigation'

const JobFormSchema = z.object({
  title: z.string().min(1, 'title is required'),
  deadline: z.string(),
  summary: z.string().min(1, 'summary is required'),
  responsibilities: z.string().min(1, 'responsibilities is required'),
  requirements: z.string().min(1, 'responsibilities is required'),
  contact: z.string().min(1, 'responsibilities is required'),
  workEnvironment: z.string(),
  salary: z.string(),
  benefits: z.string(),
  interviews: z.string(),
  company: z.string(),
  skills: z.string(),
  tags: z.string(),
})

type FormField =
  | 'summary'
  | 'responsibilities'
  | 'requirements'
  | 'workEnvironment'
  | 'benefits'
  | 'interviews'
  | 'skills'
  | 'tags'

const defaultFormValues: Prisma.JobCreateInput = {
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
  userId: '0',
}

export const Form = () => {
  const routes = useRouter()
  const { formValues, createJob } = useJobContext()
  const {
    setTitle,
    setFieldName,
    setIsModalOpen,
    resetForm,
    fieldName,
    descriptionValue,
    setDescriptionValue,
  } = useRecommendationContext()

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    setValue,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: defaultFormValues,
    resolver: zodResolver(JobFormSchema),
  })

  useEffect(() => {
    reset(formValues)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues])

  useEffect(() => {
    if (fieldName !== '') setValue(fieldName as FormField, descriptionValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [descriptionValue])

  const onSubmit = async () => {
    const data = getValues() as Prisma.JobCreateInput
    try {
      const response = await createJob(data)
      if (response.ok) {
        routes.push('/jobs')
        toast.success({ title: 'Job Create Success' })
      } else {
        toast.error({ title: 'Job Create Failed' })
      }
    } catch (error) {
      toast.error({ title: 'Error please try again' })
    }
  }

  const showRecommendationForm = (field: FormField) => {
    const data = getValues() as Prisma.JobCreateInput
    const descriptionValue = data[field]
    if (descriptionValue !== undefined) setDescriptionValue(descriptionValue)
    setTitle(data.title)
    setFieldName(field as string)
    resetForm()
    setIsModalOpen(true)
  }

  return (
    <form
      className="min-w-full flex flex-col px-4 py-10 sm:px-6 lg:px-8 lg:py-14 gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <label htmlFor="title">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            Job title
          </span>
          <input
            {...register('title')}
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            id="title"
            readOnly={isSubmitting}
            type="text"
          />
        </label>
        <label htmlFor="deadline">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            deadline
          </span>
          <div className="mt-1">
            <input
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              id="deadline"
              name="deadline"
              readOnly={isSubmitting}
              type="text"
            />
          </div>
        </label>
      </div>

      <label htmlFor="summary">
        <div className="flex justify-between align-center">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            summary
          </span>
          <button
            className="inline-flex justify-center items-center gap-2 rounded-md border-2 border-primary-200 font-semibold text-primary-500 hover:text-white hover:bg-primary-500 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            disabled={isSubmitting}
            onClick={() => showRecommendationForm('summary')}
          >
            AI generate
          </button>
        </div>

        <div className="mt-1">
          <textarea
            {...register('summary')}
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            id="summary"
            name="summary"
            placeholder="input job summary..."
            readOnly={isSubmitting}
            rows={3}
          />
        </div>
      </label>

      <label htmlFor="tags">
        <div className="flex justify-between align-center">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            tags
          </span>
        </div>

        <div className="mt-1">
          <textarea
            {...register('tags')}
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            id="tags"
            name="tags"
            placeholder="input job tags...: ex: javascript, web developer"
            readOnly={isSubmitting}
            rows={3}
          />
        </div>
      </label>

      <label htmlFor="responsibilities">
        <div className="flex justify-between align-center">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            responsibilities
          </span>
          <button
            className="inline-flex justify-center items-center gap-2 rounded-md border-2 border-primary-200 font-semibold text-primary-500 hover:text-white hover:bg-primary-500 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            disabled={isSubmitting}
            onClick={() => showRecommendationForm('responsibilities')}
          >
            AI generate
          </button>
        </div>

        <div className="mt-1">
          <textarea
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            {...register('responsibilities')}
            id="responsibilities"
            name="responsibilities"
            placeholder="input job responsibilities..."
            readOnly={isSubmitting}
            rows={3}
          />
        </div>
      </label>

      <label htmlFor="requirements">
        <div className="flex justify-between align-center">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            requirements
          </span>
          <button
            className="inline-flex justify-center items-center gap-2 rounded-md border-2 border-primary-200 font-semibold text-primary-500 hover:text-white hover:bg-primary-500 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            disabled={isSubmitting}
            onClick={() => showRecommendationForm('requirements')}
          >
            Submit AI generate
          </button>
        </div>
        <div className="mt-1">
          <textarea
            {...register('requirements')}
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            id="requirements"
            name="requirements"
            placeholder="input job requirements..."
            readOnly={isSubmitting}
            rows={3}
          />
        </div>
      </label>

      <label htmlFor="workEnvironment">
        <div className="flex justify-between align-center">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            work environment
          </span>
          <button
            className="inline-flex justify-center items-center gap-2 rounded-md border-2 border-primary-200 font-semibold text-primary-500 hover:text-white hover:bg-primary-500 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            disabled={isSubmitting}
            onClick={() => showRecommendationForm('workEnvironment')}
          >
            AI generate
          </button>
        </div>
        <div className="workEnvironment">
          <textarea
            {...register('workEnvironment')}
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            id="workEnvironment"
            name="workEnvironment"
            placeholder="input job work environment EX: Remotely, 8h/day ..."
            readOnly={isSubmitting}
            rows={2}
          />
        </div>
      </label>

      <label htmlFor="salary">
        <span className="block mb-2 text-sm font-medium dark:text-white">
          salary
        </span>
        <div className="mt-1">
          <input
            {...register('salary')}
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            id="salary"
            name="salary"
            placeholder="input salary..."
            readOnly={isSubmitting}
            type="text"
          />
        </div>
      </label>
      <label htmlFor="benefits">
        <div className="flex justify-between align-center">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            benefits
          </span>
          <button
            className="inline-flex justify-center items-center gap-2 rounded-md border-2 border-primary-200 font-semibold text-primary-500 hover:text-white hover:bg-primary-500 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            disabled={isSubmitting}
            onClick={() => showRecommendationForm('benefits')}
          >
            AI generate
          </button>
        </div>
        <div className="mt-1">
          <textarea
            {...register('benefits')}
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            id="benefits"
            name="benefits"
            placeholder="input benefits. Ex: 14 days leave annual..."
            readOnly={isSubmitting}
            rows={3}
          />
        </div>
      </label>
      <label htmlFor="interviews">
        <span className="block mb-2 text-sm font-medium dark:text-white">
          interviews
        </span>
        <div className="mt-1">
          <textarea
            {...register('interviews')}
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            id="interviews"
            name="interviews"
            readOnly={isSubmitting}
            rows={2}
          />
        </div>
      </label>
      <div className="grid md:grid-cols-2 gap-6">
        <label htmlFor="contact">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            Recruiter contact
          </span>
          <div className="mt-1">
            <input
              {...register('contact')}
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              id="contact"
              name="contact"
              readOnly={isSubmitting}
              type="text"
            />
          </div>
        </label>
        <label htmlFor="company">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            Company information
          </span>
          <div className="mt-1">
            <input
              {...register('company')}
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              id="company"
              name="company"
              readOnly={isSubmitting}
              type="text"
            />
          </div>
        </label>

        <div className="mt-6 flex justify-center items-center ">
          <button
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? 'Submitting' : 'Submit'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
