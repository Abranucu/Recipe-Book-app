import List from "./List";
import allRecipes from "../data/Recipes.json";

function RecipesList() {
  return (
    <div>
      <h2>Lista de Recetas</h2>
      <hr />
      <List data={allRecipes} />;
    </div>
  );
}

export default RecipesList;
