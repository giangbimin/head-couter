import { Prisma } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import prisma from 'services/db'

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as Prisma.JobCreateInput
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
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (id) {
      const job = await prisma.job.findFirst({ where: { id } })
      return new NextResponse(JSON.stringify({ job }), {
        headers: { 'Content-Type': 'application/json' },
      })
    }
    const search = request.nextUrl.searchParams
    const title = search.get('title') || ''
    const jobs = await prisma.job.findMany({ where: { title } })
    return new NextResponse(JSON.stringify({ jobs }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new NextResponse(null, { status: 500 })
  }
}
