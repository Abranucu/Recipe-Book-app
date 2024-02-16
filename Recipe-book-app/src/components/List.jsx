import ListItem from "./ListItem";
import { useState } from "react";

function List(props) {
 
  const handleRemove = (index) => {
    console.log("intentando borrar", index);
    let currentAllRecipesClone = JSON.parse(JSON.stringify(props.currentAllRecipes));
    currentAllRecipesClone.splice(index, 1);
    props.setCurrentAllRecipes(currentAllRecipesClone);
  };
  return (
    <div>
      {props.currentAllRecipes.map((eachObject, index) => {
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
