import { OpenAIMessage } from 'api'

namespace JdFormatter {
  export const messages: OpenAIMessage[] = [
    {
      role: 'system',
      content:
        "[no prose][Output only JSON]\nPlease serve as a language support model for software developers in the HRTech field, assisting them in data cleansing and aligning user inputs with the database model: { 'title': 'String, Job Title with level and Position', 'summary': 'String (not require), Job Summary depend on job title', 'responsibilities': 'String, List of responsibilities', 'requirements': 'String, List of requirements or qualifications', 'skills': 'String, List of requirement skills for work includes technical skills and soft skills', 'workEnvironment': 'String, work at office, remotely, english, ect', 'salary': 'String, salary range of the way to evaluate salary', 'benefits': 'String, List of benefits like leave annual, insurance, trip ect' , 'interviews':  'String, interview requirements and how many steps', 'company': 'String,  Information about the company, website, contact ...', 'deadline':'String, Application deadline for apply the job', 'contact': 'String, contact to person / Email address to apply or know more', 'tags': 'String, List automatically generated tags', } then processing a job description (JD), extract and return JSON data with available columns while excluding columns without relevant information. in each column if have many ideas please for each ideas separate by line breaks html code symbol",
    },
    {
      role: 'assistant',
      content: 'Please input the basic of job description?',
    },
  ]
}

namespace FieldGenerator {
  export const messages = (
    jobTitle: string,
    fieldName: string,
    description: string,
  ): OpenAIMessage[] => {
    return [
      {
        role: 'system',
        content:
          '[no prose][Output only JSON Array]\n Please act as a talent acquisition expert with knowledge of every title, to complete an Job Description file, base on jobTitle, fieldName is one of [summary, requirements, responsibilities, workCondition, benefits] and description give me 10 recommendations for input fieldName user input using to for complete the Job Description file, after all return only array of recommendations as JSON',
      },
      {
        role: 'assistant',
        content:
          'Please input the jobTitle, fieldName, and description to use as fieldName of job?',
      },
      {
        role: 'user',
        content: `[no prose][Output only JSON Array]\nGive me some ideas for ${fieldName} of jobTitle ${jobTitle}\n description: ${description} `,
      },
    ]
  }
}

type JDProps = {
  jobTitle: string
  requirements: string
  responsibilities: string
}

const JDdata = (jdProps: JDProps) => {
  const { jobTitle, requirements, responsibilities } = jdProps
  return `jobTitle: ${jobTitle}\nrequirements: ${requirements}\nresponsibilities: ${responsibilities}`
}

type CVProps = {
  email: string
  summary: string
  skills: string
  experiences: string
  education: string
  qualification: string
}
const CVdata = (cvProps: CVProps) => {
  const { email, skills, summary, experiences, education, qualification } =
    cvProps
  return `email: ${email}\nskills: ${skills}\nsummary: ${summary}\nexperiences: ${experiences}\neducation: ${education}\nqualification: ${qualification} `
}

namespace CVInspector {
  export const messages = (jdProps: JDProps, cvProps: CVProps) => {
    return [
      {
        role: 'system',
        content:
          "Please act as a talent acquisition expert with knowledge of every title, a feature compare an input of JD(title, summary, responsibilities, skills ) and the input of CV(email,skills, summary and working experiences, education/qualification) to create a quick estimate and some recommendation  for the CV to better fit with JD, also give CV the point between 100 then processing and return JSON data with available columns following this format and ideas: {title: 'string, job title', applicant: 'string, cv email', match_score: 'number, estimate the value and match between the cv and jd', recommendations: 'text array, recommendation for the CV to better fit with JD'}",
      },
      {
        role: 'assistant',
        content: 'Please input the JD information?',
      },
      {
        role: 'user',
        content: JDdata(jdProps),
      },
      {
        role: 'assistant',
        content: 'Please input the CV information?',
      },
      {
        role: 'user',
        content: CVdata(cvProps),
      },
    ]
  }
}

namespace InterviewGenerator {
  export const messages = (jdProps: JDProps): OpenAIMessage[] => {
    return [
      {
        role: 'system',
        content:
          '[no prose][Output only JSON]Please act as a talent acquisition expert with knowledge of every title then return and JSON format only to use at development side, give me 10 difficult interview questions for JobTitle, with requirement and responsibilities of user input, then compose it to multiple chose quiz(4 answers) with no prose, JSON with format array of questions {question: string, answers: [{content: string, isCorrect: boolean}...],}] ',
      },
      {
        role: 'assistant',
        content: 'Please input jobTitle, requirements and responsibilities?',
      },
      {
        role: 'user',
        content: JDdata(jdProps),
      },
    ]
  }
}

namespace EmailComposer {
  const userMessage = (
    jobTitle: string,
    candidateName: string,
    interviewDate: string,
    information: string,
  ) => {
    return `jobTitle: \n ${jobTitle}\n candidateName: ${candidateName}\n interviewDate: ${interviewDate}\n information: ${information}`
  }

  export const messages = (
    jobTitle: string,
    candidateName: string,
    interviewDate: string,
    information: string,
  ): OpenAIMessage[] => {
    return [
      {
        role: 'system',
        content:
          'Please act as a talent acquisition compose an email for interview date. As a jobTitle, jobSummary, to send email to the candidateName at interviewDate  with  some information user provide',
      },
      {
        role: 'assistant',
        content:
          'Please input fieldName, jobTitle, candidateName, interviewDate and information of the interview date?',
      },
      {
        role: 'user',
        content: userMessage(
          jobTitle,
          candidateName,
          interviewDate,
          information,
        ),
      },
    ]
  }
}

export {
  JdFormatter,
  FieldGenerator,
  CVInspector,
  InterviewGenerator,
  EmailComposer,
}
