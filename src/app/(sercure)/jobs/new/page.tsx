import { BaseLayout } from 'app/components/Layout/BaseLayout'
import { Header, Form, RecommendationForm } from 'app/components/Jobs/Create'
import { JobContextProvider } from 'context/job'
import { RecommendationContextProvider } from 'context/recommendation'

export default function CreateJobPage() {
  return (
    <BaseLayout>
      <JobContextProvider>
        <Header />
        <RecommendationContextProvider>
          <RecommendationForm />
          <Form />
        </RecommendationContextProvider>
      </JobContextProvider>
    </BaseLayout>
  )
}
