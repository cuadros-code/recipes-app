import { RecipesState } from "./RecipesProvider";

type RecipeType = { type: "NEW_RECIPES", payload: any[] }

export const recipesReducer = ( 
    state: RecipesState, 
    action: RecipeType 
): RecipesState => {

  switch(action.type){
    case "NEW_RECIPES":
      return {
        ...state,
        newRecipes: action.payload
      }
  }

}