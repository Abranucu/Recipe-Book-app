import ListItem from "./ListItem";
import { useState } from "react";

function List(props) {
  const [currentAllRecipes, setCurrenAllRecipe] = useState(props.data);
  const handleRemove = (index) => {
    console.log("intentando borrar", index);
    let currentAllRecipesClone = JSON.parse(JSON.stringify(currentAllRecipes));
    currentAllRecipesClone.splice(index, 1);
    setCurrenAllRecipe(currentAllRecipesClone);
  };
  return (
    <div>
      {currentAllRecipes.map((eachObject, index) => {
        return (
          <div key={index}>
            <ListItem data={eachObject} />
            <button onClick={() => handleRemove(index)}>Borrar</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default List;
