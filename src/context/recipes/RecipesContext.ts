import { createContext } from "react";
import { NewRecipes } from "src/data/newRecipes";

interface ContextProps {
  newRecipes: NewRecipes[]
}

export const RecipeContext = createContext({} as ContextProps)