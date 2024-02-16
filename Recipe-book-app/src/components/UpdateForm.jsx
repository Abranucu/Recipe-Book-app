import React from "react";
import { useState } from "react";

function UpdateForm(props) {
  const [name, setName] = useState(props.eachObject.name);
  const [calories, setCalories] = useState(props.eachObject.calories);
  const [servings, setServings] = useState(props.eachObject.servings);
  const [img, setImg] = useState(props.eachObject.image);

  const handleImg = (event) => {
    let inputValue = event.target.value;
    setImg(inputValue);
  };

  const handleName = (event) => {
    let inputValue = event.target.value;
    setName(inputValue);
  };

  const handleCalorias = (event) => {
    let inputValue = event.target.value;
    setCalories(inputValue);
  };

  const handleServings = (event) => {
    let inputValue = event.target.value;
    setServings(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const editedRecipe = {
      name: name,
      calories: calories,
      image: img,
      servings: servings,
    };

    props.setCurrentAllRecipes((prevRecipes) => {
        const updatedRecipes = [...prevRecipes];
        updatedRecipes[props.index] = editedRecipe;
        return updatedRecipes;
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="img">URL img:</label>
          <input type="text" name="img" value={img} onChange={handleImg} />
        </div>

        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" value={name} onChange={handleName} />
        </div>

        <div>
          <label htmlFor="calories">Calorias:</label>
          <input
            type="number"
            name="calories"
            value={calories}
            onChange={handleCalorias}
          />
        </div>

        <div>
          <label htmlFor="servings">Raciones:</label>
          <input
            type="number"
            name="servings"
            value={servings}
            onChange={handleServings}
          />
        </div>

        <button>Editar</button>
      </form>
    </div>
  );
}

export default UpdateForm;
