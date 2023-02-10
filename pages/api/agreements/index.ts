import agreements from '../../../helpers/agreementsData'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ agreements })
}