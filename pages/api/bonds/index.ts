import bonus from '../../../helpers/bonusData';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse){
  return res.status(200).json({bonus})
};