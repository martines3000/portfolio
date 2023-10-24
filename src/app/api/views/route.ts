import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function GET() {
  try {
    const views = await prisma.views.findMany();

    const serializedViews = views.map((view) => {
      return {
        ...view,
        count: view.count.toString(),
      };
    });

    return new NextResponse(JSON.stringify(serializedViews || []));
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
