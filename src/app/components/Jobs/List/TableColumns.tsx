export const TableColumns = () => {
  return (
    <thead className="bg-gray-50 dark:bg-slate-800">
      <tr>
        <th className="px-6 py-3 text-left" scope="col">
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
              Position
            </span>
          </div>
        </th>

        <th className="px-6 py-3 text-left" scope="col">
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
              Recruiter
            </span>
          </div>
        </th>

        <th className="px-6 py-3 text-left" scope="col">
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
              Summary
            </span>
          </div>
        </th>

        <th className="px-6 py-3 text-left" scope="col">
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
              Deadline
            </span>
          </div>
        </th>

        <th className="px-6 py-3 text-left" scope="col">
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
              Status
            </span>
          </div>
        </th>
      </tr>
    </thead>
  )
}
