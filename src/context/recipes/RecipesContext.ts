import { createContext } from "react";
import { NewRecipes } from "src/data/newRecipes";
import { Recipe } from "src/interfaces/IRandomRecipe";

interface ContextProps {
  newRecipes: NewRecipes[]
}

export const RecipeContext = createContext({} as ContextProps)