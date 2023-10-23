import JobColumns from './JobColumns'
import JobItem from './JobItem'

const JobList = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <JobColumns />
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        <JobItem
          deadline="10 Jan 2024"
          position="Senior Mobile developer"
          recruiterEmail="gianghoang.dev@gmail.com"
          recruiterName="Giang Hoang"
          status="Draff"
          summary=" I bought this hat for my boyfriend, but then i found out he cheated on me so I kept it and I love it!! I wear it all the time and there is no problem with the fit even though its a mens hat."
          tags={['Android developer', 'Senior', 'Xcode']}
        />
        <JobItem
          deadline="10 Jan 2024"
          position="Senior Mobile developer"
          recruiterEmail="gianghoang.dev@gmail.com"
          recruiterName="Giang Hoang"
          status="Draff"
          summary=" I bought this hat for my boyfriend, but then i found out he cheated on me so I kept it and I love it!! I wear it all the time and there is no problem with the fit even though its a mens hat."
          tags={['Android developer', 'Senior', 'Xcode']}
        />
        <JobItem
          deadline="10 Jan 2024"
          position="Senior Mobile developer"
          recruiterEmail="gianghoang.dev@gmail.com"
          recruiterName="Giang Hoang"
          status="Draff"
          summary=" I bought this hat for my boyfriend, but then i found out he cheated on me so I kept it and I love it!! I wear it all the time and there is no problem with the fit even though its a mens hat."
          tags={['Android developer', 'Senior', 'Xcode']}
        />
        <JobItem
          deadline="10 Jan 2024"
          position="Senior Mobile developer"
          recruiterEmail="gianghoang.dev@gmail.com"
          recruiterName="Giang Hoang"
          status="Draff"
          summary=" I bought this hat for my boyfriend, but then i found out he cheated on me so I kept it and I love it!! I wear it all the time and there is no problem with the fit even though its a mens hat."
          tags={['Android developer', 'Senior', 'Xcode']}
        />{' '}
        <JobItem
          deadline="10 Jan 2024"
          position="Senior Mobile developer"
          recruiterEmail="gianghoang.dev@gmail.com"
          recruiterName="Giang Hoang"
          status="Draff"
          summary=" I bought this hat for my boyfriend, but then i found out he cheated on me so I kept it and I love it!! I wear it all the time and there is no problem with the fit even though its a mens hat."
          tags={['Android developer', 'Senior', 'Xcode']}
        />
        <JobItem
          deadline="10 Jan 2024"
          position="Senior Mobile developer"
          recruiterEmail="gianghoang.dev@gmail.com"
          recruiterName="Giang Hoang"
          status="Draff"
          summary=" I bought this hat for my boyfriend, but then i found out he cheated on me so I kept it and I love it!! I wear it all the time and there is no problem with the fit even though its a mens hat."
          tags={['Android developer', 'Senior', 'Xcode']}
        />
      </tbody>
    </table>
  )
}
export default JobList
