import React from "react";
import { Form } from "react-router-dom";
import { useState } from "react";

function AddForms(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);
  const [img, setImg] = useState("");

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
    const newRecipe = {
      name: name,
      calories: calories,
      image: img,
      servings: servings,
    };

    props.setCurrentAllRecipes((valorActualDelEstado) => {
      let clone = JSON.parse(JSON.stringify(valorActualDelEstado));
      clone.unshift(newRecipe);
      return clone;
    });
    setName("");
    setCalories(0);
    setServings(1);
    setImg("");
    
  }

  return (
    <div>
      <button>
        <h2>Añadir nueva receta</h2>
      </button>
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

        <button>
          Añadir
        </button>
      </form>
    </div>
  );
}

export default AddForms;
