'use client'

import { RecommendationContextProvider } from 'context/recommendation'
import Form from './Form'
import Header from './Header'
import RecommendationForm from './RecommendationForm'

const JobPage = () => {
  return (
    <>
      <Header />
      <RecommendationContextProvider>
        <RecommendationForm />
        <Form />
      </RecommendationContextProvider>
    </>
  )
}
export default JobPage
