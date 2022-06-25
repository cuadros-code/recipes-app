import { useContext } from 'react'
import { RecipeContext } from 'src/context/recipes/RecipesContext'
// import { newRecipes } from 'src/data/newRecipes'
import './NewRecipe.scss'
import RecipeCard from './RecipeCard'

const NewRecipe = () => {

  const { newRecipes } = useContext(RecipeContext)

  return (
    <section className="recipe">
      <h1 className="recipe__title">Nuevas Recetas</h1>
      <div className="recipe__list" >
        {
          newRecipes.map( 
            (recipe, index) => ( <RecipeCard key={index} recipe={recipe} />
          ))
        }
      </div>
    </section>
  )
}

export default NewRecipe