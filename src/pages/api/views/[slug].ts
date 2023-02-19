import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug?.toString();

    if (!slug) {
      throw new Error('Slug is required');
    }

    if (req.method === 'GET') {
      const views = await prisma.views.findUnique({
        where: {
          id: slug,
        },
      });

      return res.status(200).json({ count: views?.count.toString() });
    }

    if (req.method === 'POST') {
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

      return res.status(200).json({ count: insertOrUpdate.count.toString() });
    }
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}
