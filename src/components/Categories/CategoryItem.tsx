import { FC } from "react"
import { ICategory } from "src/interfaces/ICategory"
import './Category.scss'

interface IProps {
  category: ICategory
}

const CategoryItem: FC<IProps> = ({ category }) => {
  return (
    <div className="category__card">
      <img src={category.image} alt={category.title} />
      <p>{category.title}</p>
    </div>
  )
}

export default CategoryItem