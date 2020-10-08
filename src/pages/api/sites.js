import { db } from '../../lib/firebase-admin';

export default async (_, res) => {
  const data = await db.collection('sites').get();
  const sites = [];

  data.forEach((site) => {
    console.log('oi');
    sites.push({ id: site.id, ...site.data() });
  });

  res.status(200).json({ sites });
};
