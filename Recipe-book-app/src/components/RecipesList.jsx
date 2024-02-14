import { useState } from "react";
import List from './List';

function RecipesList() {

    const [ currentAllRecipes, setCurrenAllRecipe ] = useState(allRecipes)
    const  handleRemoveRecipe = (index) =>{
        let recipesStateClone = JSON.parse(JSON.stringify(currentAllRecipes))
        recipesStateClone.splice(index, 1)
        setCurrenAllRecipe(recipesStateClone)
    }
    return (
        <div>
            <h2>Lista de Recetas</h2>
             <hr />
             <List/>
  </div>
    )}

    

export default RecipesList
