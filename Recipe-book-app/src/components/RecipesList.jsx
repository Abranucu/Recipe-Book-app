import List from "./List";
import allRecipes from "../data/Recipes.json";


function RecipesList(props) {
  console.log(props);
  
  return (
    <div>
      <h2>Lista de Recetas</h2>
      <hr />
      <List  currentAllRecipes={props.currentAllRecipes} setCurrentAllRecipes={props.setCurrentAllRecipes}/>;
    </div>
  );
}

export default RecipesList;
