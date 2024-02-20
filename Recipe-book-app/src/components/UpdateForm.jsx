import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

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
    props.handleToggleUpdateForm(false);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <FloatingLabel
                controlId="floatingInput"
                label="URL Img:"
                className="mb-3"
              >
                <Form.Control type="text" value={img} onChange={handleImg} />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Nombre:"
                className="mb-3"
              >
                <Form.Control type="text" value={name} onChange={handleName} />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Calorias:"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  value={calories}
                  onChange={handleCalorias}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Raciones:"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  value={servings}
                  onChange={handleServings}
                />
              </FloatingLabel>

        <div className="d-grid gap-2">
                <Button variant="outline-secondary" size="lg" type="submit">
                  Editar
                </Button>
              </div>
      </Form>
    </div>
  );
}

export default UpdateForm;
