import categories from '../../../../helpers/categoriesData'
import agreements from '../../../../helpers/agreementsData'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query
  const categoryAgreements = agreements.filter(agr => agr.category.id.toLocaleLowerCase() === category)
  const categoryFound = categories.find(cat => cat.id === category)
  return res.status(200).json({ category: categoryFound, agreements: categoryAgreements })
}