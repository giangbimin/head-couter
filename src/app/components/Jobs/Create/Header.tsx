'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'components/Toast'
import { useJobContext } from 'context/job'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formDefaultValues = { title: '', description: '' }
const validationSchema = z.object({
  title: z.string().min(1, 'title is required'),
  description: z.string().min(1, 'description is required'),
})

export const Header = () => {
  const { formatJD } = useJobContext()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: formDefaultValues,
    resolver: zodResolver(validationSchema),
  })

  const onSubmit = async () => {
    try {
      const { title, description } = getValues()
      const status = await formatJD(title, description)
      if (status) {
        setIsModalOpen(false)
        toast.success({ title: 'Generated success' })
      } else {
        toast.error({ title: 'GPT Failed, Please Try Again' })
      }
    } catch (error) {
      toast.error({ title: 'GPT Failed, Please Try Again' })
    }
  }

  return (
    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Create Job
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Support to quick create Job Description
        </p>
      </div>

      <div>
        <div className="inline-flex gap-x-2">
          <button
            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            onClick={() => setIsModalOpen(true)}
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
            Quick Input With AI
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
          tabIndex={-1}
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Input your JD idea
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label htmlFor="title">
                      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Job Title
                      </span>
                      <input
                        {...register('title')}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        id="title"
                        name="title"
                        placeholder="Job title"
                        type="text"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="description">
                      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Job Description
                      </span>
                      <textarea
                        {...register('description')}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        id="description"
                        name="description"
                        placeholder="job description"
                        rows={15}
                        required
                      />
                    </label>
                  </div>
                  <button
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? 'submitting' : 'Continue'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
