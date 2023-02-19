import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const views = await prisma.views.findMany();

    const serializedViews = views.map((view) => {
      return {
        ...view,
        count: view.count.toString(),
      };
    });

    return res.status(200).json(serializedViews || []);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}
