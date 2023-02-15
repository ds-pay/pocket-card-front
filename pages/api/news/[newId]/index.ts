import news from "../../../../helpers/newsData";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse){
  const { newId } = req.query;
  const newFound = news.find( nw => nw.id === newId)
  return res.status(200).json({newFound: newFound})
}