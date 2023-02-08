import allCategory from '../../../helpers/categoriesData'

export default function handler(req, res){
  const { categoryId } = req.query
  if(categoryId==='all'){
    return res.status(200).json({ categories: allCategory})
  }
  const categoryFound = allCategory.find(category=>category.id==categoryId )

  return res.status(200).json({ category: categoryFound})
}