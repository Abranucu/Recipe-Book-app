import { useState } from "react";
import ListItem from "./ListItem";

function List({ data }) {
  const [currentAllRecipes, setCurrenAllRecipe] = useState(data);
  const handleRemoveRecipe = (index) => {
    console.log("intentando borrar", eachObject.id);
    let recipesStateClone = JSON.parse(JSON.stringify(currentAllRecipes));
    recipesStateClone.splice(index, 1);
    setCurrenAllRecipe(recipesStateClone);
  };
  return (
    <div>
      <h2>Lista de Recetas</h2>
      <hr />
      {currentAllRecipes.map((eachObject, index) => {

        return (
          <div key={eachObject.id}>
            <ListItem data={eachObject} index/>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default List;
