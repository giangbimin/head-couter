'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRecommendationContext } from 'context/recommendation'
import { useEffect } from 'react'

const validationSchema = z.object({
  description: z.string().min(1, 'description is required'),
})

export const RecommendationForm = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    title,
    fieldName,
    recommendationJD,
    currentValues,
    checkedItems,
    handleCheckboxChange,
    descriptionValue,
    setDescriptionValue,
  } = useRecommendationContext()

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: { description: descriptionValue },
    resolver: zodResolver(validationSchema),
  })

  useEffect(() => {
    reset({ description: descriptionValue })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [descriptionValue])

  const onSubmit = async () => {
    try {
      const { description } = getValues()
      await recommendationJD(description)
    } catch (error) {
      throw Error('Invalid data')
    }
  }

  const submitCheckboxes = async () => {
    setDescriptionValue(checkedItems.join('\n'))
    setIsModalOpen(false)
  }

  const recForm = () => {
    return (
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="description">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {`${fieldName} description`}
            </span>
            <textarea
              {...register('description')}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              id="description"
              name="description"
              placeholder={`${fieldName} description`}
              rows={5}
              required
            />
          </label>
        </div>
        <button
          className="w-full text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? 'Submitting' : 'Continue'}
        </button>
      </form>
    )
  }

  const checkBoxes = () => {
    return (
      <div className="space-y-6">
        <div>
          <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select your Descriptions
          </span>
        </div>
        <div className="max-h-[250px] overflow-auto p-3 gap-3">
          {currentValues.map((value, index) => (
            <div key={index} className="flex items-center">
              <input
                checked={checkedItems.includes(value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                id={`checkbox-${value}`}
                type="checkbox"
                value={value}
                onChange={() => {
                  handleCheckboxChange(value)
                }}
              />
              <label
                className="ml-2 text-sm font-base text-gray-900 dark:text-gray-300"
                htmlFor={`checkbox-${value}`}
              >
                {value}
              </label>
            </div>
          ))}
        </div>
        <div className="flex justify-between gap-3">
          <button
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={submitCheckboxes}
          >
            use selected
          </button>
          <button
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => setIsModalOpen(false)}
          >
            cancel
          </button>
        </div>
      </div>
    )
  }

  if (!isModalOpen) return null
  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)] max-h-full justify-center items-center flex"
      tabIndex={-1}
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover-bg-gray-600 dark:hover-text-white"
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
              Job {title} {fieldName}
            </h3>
            {currentValues.length === 0 ? recForm() : checkBoxes()}
          </div>
        </div>
      </div>
    </div>
  )
}
