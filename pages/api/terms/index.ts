import terms from "../../../helpers/terms";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handle(req: NextApiRequest, res: NextApiResponse ) {
  res.status(200).json({terms});
};