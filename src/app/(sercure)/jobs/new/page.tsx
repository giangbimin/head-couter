import Header from 'app/components/Jobs/Create/Header'
import Form from 'app/components/Jobs/Create/Form'

export default function CreateJobPage() {
  return (
    <div className="max-w-[85rem] w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
              <Header />
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
