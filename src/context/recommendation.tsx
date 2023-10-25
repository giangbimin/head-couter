'use client'

import { createContext } from '@dwarvesf/react-utils'
import { WithChildren } from 'types/common'
import { Dispatch, SetStateAction, useState } from 'react'
import { OpenAIRequest, getChatCompletions } from 'api'
import { FieldGenerator } from 'services/AIGenerator'

interface RecommendationContextValues {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  fieldName: string
  setFieldName: Dispatch<SetStateAction<string>>
  recommendationJD: (description: string) => Promise<void>
  currentValues: string[]
  checkedItems: string[]
  handleCheckboxChange: (value: string) => void
  resetForm: () => void
  descriptionValue: string
  setDescriptionValue: Dispatch<SetStateAction<string>>
}

const [Provider, useRecommendationContext] =
  createContext<RecommendationContextValues>({
    name: 'Recommendation',
  })

const RecommendationContextProvider = ({ children }: WithChildren) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [title, setTitle] = useState<string>('')
  const [fieldName, setFieldName] = useState<string>('')
  const [currentValues, setCurrentValues] = useState<string[]>([])
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [descriptionValue, setDescriptionValue] = useState('')

  const recommendationJD = async (description: string) => {
    try {
      const req: OpenAIRequest = {
        model: 'openai/gpt-3.5-turbo',
        messages: FieldGenerator.messages(title, fieldName, description),
      }
      const res = await getChatCompletions(req)
      const data = JSON.parse(res.choices[0].message.content) as string[]
      setCurrentValues(data)
    } catch (error) {
      throw new Error('Incorrect username or password')
    }
  }

  const handleCheckboxChange = (value: string) => {
    if (checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((item) => item !== value))
    } else {
      setCheckedItems([...checkedItems, value])
    }
  }

  const resetForm = () => {
    setCurrentValues([])
    setCheckedItems([])
  }

  return (
    <Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        title,
        fieldName,
        setTitle,
        setFieldName,
        recommendationJD,
        currentValues,
        checkedItems,
        handleCheckboxChange,
        resetForm,
        descriptionValue,
        setDescriptionValue,
      }}
    >
      {children}
    </Provider>
  )
}

export { RecommendationContextProvider, useRecommendationContext }
