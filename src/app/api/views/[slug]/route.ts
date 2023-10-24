import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export const runtime = 'edge';

export async function GET(
  _: NextRequest,
  { params: { slug } }: { params: { slug: string } },
) {
  try {
    if (!slug) {
      throw new Error('Slug is required');
    }

    const views = await prisma.views.findUnique({
      where: {
        id: slug,
      },
    });

    return new NextResponse(
      JSON.stringify({ count: views?.count.toString() }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS,
        },
      },
    );
  } catch (err: any) {
    return new NextResponse(JSON.stringify({ message: err.message }), {
      status: 500,
      headers: {
        ...CORS_HEADERS,
      },
    });
  }
}

export async function POST(
  _: NextRequest,
  { params: { slug } }: { params: { slug: string } },
) {
  try {
    if (!slug) {
      throw new Error('Slug is required');
    }
    const insertOrUpdate = await prisma.views.upsert({
      where: {
        id: slug,
      },
      update: {
        count: {
          increment: 1,
        },
      },
      create: {
        id: slug,
        count: 1,
      },
    });

    return new NextResponse(
      JSON.stringify({ count: insertOrUpdate.count.toString() }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS,
        },
      },
    );
  } catch (err: any) {
    return new NextResponse(JSON.stringify({ message: err.message }), {
      status: 500,
      headers: {
        ...CORS_HEADERS,
      },
    });
  }
}

export function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      ...CORS_HEADERS,
    },
  });
}
