import bonus from "../../../../helpers/bonusData";
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse){
  const {bond} = req.query;
  const bondFound = bonus.find(bnd => bnd.id === bond)
  return res.status(200).json({bondFound: bondFound})
}
