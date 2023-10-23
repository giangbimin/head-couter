import { PrismaClient } from '@prisma/client'

namespace DbModel {
  export type Job = PrismaClient['job']
  export type JobApply = PrismaClient['jobApply']
  export type Interview = PrismaClient['interview']
  export type InterviewSession = PrismaClient['interviewSession']
}

export type { DbModel }
