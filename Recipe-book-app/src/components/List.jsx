import { useState } from "react";
import ListItem from "./ListItem";

function List(props) {
  const [currentAllRecipes, setCurrenAllRecipe] = useState(props.data);
  const handleRemoveRecipe = (index) => {
    console.log("intentando borrar", eachObject.id);
    let recipesStateClone = JSON.parse(JSON.stringify(currentAllRecipes));
    recipesStateClone.splice(index, 1);
    setCurrenAllRecipe(recipesStateClone);
  };
  return (
    <div>
      {currentAllRecipes.map((eachObject, index) => {
        return (
          <div key={eachObject.id}>
            <ListItem data={eachObject} index />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default List;
