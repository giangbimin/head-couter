const Form = () => {
  return (
    <form className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 gap-x-4">
      <div>
        <label htmlFor="title">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            Job title
          </span>
          <input
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            id="title"
            type="text"
          />
        </label>
      </div>

      <div>
        <label htmlFor="deadline">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            deadline
          </span>
          <div className="mt-1">
            <input
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              id="deadline"
              name="deadline"
              type="text"
            />
          </div>
        </label>
      </div>

      <div>
        <label htmlFor="summary">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            summary
          </span>
          <div className="mt-1">
            <textarea
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              id="summary"
              name="summary"
              rows={3}
            />
          </div>
        </label>
      </div>

      <div>
        <label htmlFor="textarea-1">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            responsibilities
          </span>
          <div className="mt-1">
            <textarea
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              id="responsibilities"
              name="responsibilities"
              rows={3}
            />
          </div>
        </label>
      </div>

      <div>
        <label htmlFor="requirements">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            requirements
          </span>
          <div className="mt-1">
            <textarea
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              id="requirements"
              name="requirements"
              rows={3}
            />
          </div>
        </label>
      </div>

      <div>
        <label htmlFor="textarea-1">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            workEnvironment
          </span>
          <div className="workEnvironment">
            <textarea
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              id="workEnvironment"
              name="workEnvironment"
              rows={2}
            />
          </div>
        </label>
      </div>

      <div>
        <label htmlFor="salary">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            salary
          </span>
          <div className="mt-1">
            <input
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              id="salary"
              name="salary"
              type="text"
            />
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="benefits">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            benefits
          </span>
          <div className="mt-1">
            <textarea
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              id="benefits"
              name="benefits"
              rows={3}
            />
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="interviews">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            interviews
          </span>
          <div className="mt-1">
            <textarea
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              id="interviews"
              name="interviews"
              rows={2}
            />
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="contact">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            contact
          </span>
          <div className="mt-1">
            <input
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              id="contact"
              name="contact"
              type="text"
            />
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="company">
          <span className="block mb-2 text-sm font-medium dark:text-white">
            company
          </span>
          <div className="mt-1">
            <input
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              id="company"
              name="company"
              type="text"
            />
          </div>
        </label>
      </div>

      <div className="mt-6 grid">
        <button
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
