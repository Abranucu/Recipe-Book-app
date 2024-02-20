import List from "./List";
import allRecipes from "../data/Recipes.json";

function RecipesList(props) {
  return (
    <div>
      <hr />
      <h2>Lista de Recetas</h2>
      <hr/>
      <List
        currentAllRecipes={props.currentAllRecipes}
        setCurrentAllRecipes={props.setCurrentAllRecipes}
      />
      <hr/>
    </div>
  );
}

export default RecipesList;
