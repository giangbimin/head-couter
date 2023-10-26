import { Prisma } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import prisma from 'services/db'

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as Prisma.JobCreateInput
    const data = { ...payload, userId: '0' }
    const response = await prisma.job.create({ data })
    return new NextResponse(JSON.stringify({ response }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new NextResponse(null, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const search = request.nextUrl.searchParams
    const title = search.get('title') || ''
    const page = parseInt(search.get('page') || '1', 10)
    const per = parseInt(search.get('per') || '10', 10)
    let jobs = []
    if (title === '') {
      jobs = await prisma.$transaction([
        prisma.job.count(),
        prisma.job.findMany({
          skip: (page - 1) * per,
          take: per,
          orderBy: {
            createdAt: 'desc',
          },
        }),
      ])
    } else {
      jobs = await prisma.$transaction([
        prisma.job.count({
          select: {
            id: true,
          },
          where: { title: { contains: title } },
        }),
        prisma.job.findMany({
          where: { title: { contains: title } },
          skip: (page - 1) * per,
          take: per,
          orderBy: {
            createdAt: 'desc',
          },
        }),
      ])
    }
    return new NextResponse(JSON.stringify(jobs[1]), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new NextResponse(null, { status: 500 })
  }
}
