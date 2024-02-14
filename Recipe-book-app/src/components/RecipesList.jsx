import List from "./List";
import allRecipes from "../data/Recipes.json";

function RecipesList() {
  return <List data={allRecipes} />;
}

export default RecipesList;
