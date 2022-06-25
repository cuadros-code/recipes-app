import { categories } from 'src/data/categories';
import CategoryItem from './CategoryItem';
import './Category.scss'

const Category = () => {
  return (
    <div className='category'>
      <section className='category__list'>
        {
          categories.map((item, index) => (
            <CategoryItem key={index} category={item} />
            ))
          }
      </section>
    </div>
  )
}

export default Category