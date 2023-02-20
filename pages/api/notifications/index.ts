import notificationsData from '../../../helpers/notificationsData';
import type { NextApiRequest, NextApiResponse } from 'next';

export const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({notificationsData})
}