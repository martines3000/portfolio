import { NextResponse } from 'next/server';

import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/lib/supabase/database.types';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function GET() {
  try {
    const client = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    const { data } = await client.from('views').select();

    return new NextResponse(JSON.stringify(data || []));
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
