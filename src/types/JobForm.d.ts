import z from 'zod'

const JobFormSchema = z.object({
  title: z.string().min(1, 'title is required'),
  deadline: z.string(),
  summary: z.string().min(1, 'summary is required'),
  responsibilities: z.string().min(1, 'responsibilities is required'),
  requirements: z.string().min(1, 'responsibilities is required'),
  contact: z.string().min(1, 'responsibilities is required'),
  workEnvironment: z.string(),
  salary: z.string(),
  benefits: z.string(),
  interviews: z.string(),
  company: z.string(),
  skills: z.string(),
  tags: z.string(),
})

type JobFormSchemaType = z.infer<typeof JobFormSchema>

export { JobFormSchema, JobFormSchemaType }
