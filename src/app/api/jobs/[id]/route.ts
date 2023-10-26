import { NextRequest, NextResponse } from 'next/server'
import prisma from 'services/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params
    if (id) {
      const job = await prisma.job.findFirst({ where: { id } })
      return new NextResponse(JSON.stringify(job), {
        headers: { 'Content-Type': 'application/json' },
      })
    }
    return new NextResponse(null, { status: 404 })
  } catch (error) {
    return new NextResponse(null, { status: 500 })
  }
}
