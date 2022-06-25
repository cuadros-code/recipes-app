import { FC, ReactNode, useEffect, useReducer } from "react"
import recipesApi from "src/api/recipeApi";
import { newRecipes, NewRecipes } from "src/data/newRecipes";
import { RandomRecipe } from "src/interfaces/IRandomRecipe";
import { RecipeContext } from './RecipesContext';
import { recipesReducer } from "./recipesReducer";

export interface IProps {
  children: ReactNode | ReactNode[]
}

export interface RecipesState {
  newRecipes: NewRecipes[]
}

const initialValues: RecipesState = {
  newRecipes: newRecipes
}

const RecipesProvider: FC<IProps> = ({ children }) => {

  const [state, dispatch] = useReducer(recipesReducer, initialValues)

  const getRandomRecipes = async () => {
    try {
      const resp = await recipesApi.get<RandomRecipe>("recipes/random", {
        params: {
          number: 4
        }
      })

      dispatch({
        type: "NEW_RECIPES",
        payload: resp.data.recipes
      })

    } catch (error) {
      
    }
  }

  useEffect(() => {
    // getRandomRecipes();
  }, [])

  return (
    <RecipeContext.Provider
      value={{
        ...state,
      }}
    >
      { children }
    </RecipeContext.Provider>
  )
}

export default RecipesProvider