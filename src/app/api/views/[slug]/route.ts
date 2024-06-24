import { type NextRequest, NextResponse } from 'next/server';

import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/lib/supabase/database.types';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function GET(
  _: NextRequest,
  { params: { slug } }: { params: { slug: string } },
) {
  try {
    if (!slug) {
      throw new Error('Slug is required');
    }

    const client = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    const { data } = await client
      .from('views')
      .select('count')
      .eq('slug', slug)
      .single();

    return new NextResponse(JSON.stringify({ count: data?.count }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...CORS_HEADERS,
      },
    });
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

    const client = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SECRET_KEY!,
    );

    const { data, error } = await client
      .from('views')
      .select('id, count')
      .eq('slug', slug);

    if (error) {
      throw new Error(error.message);
    }

    let count: number;

    if (data.length === 0) {
      await client.from('views').insert([{ slug, count: 1 }]);
      count = 1;
    } else {
      await client
        .from('views')
        .update({ count: data[0].count + 1 })
        .eq('slug', slug);
      count = data[0].count + 1;
    }

    return new NextResponse(JSON.stringify({ count: count }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...CORS_HEADERS,
      },
    });
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
