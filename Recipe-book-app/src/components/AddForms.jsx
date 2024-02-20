import React from "react";
import { useState } from "react";
import noImg from "../assets/noImg.png";
import Accordion from "react-bootstrap/Accordion";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddForms(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);
  const [img, setImg] = useState(noImg);
  const [defaultActiveKey, setDefaultActiveKey] = useState("1");

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
    setImg(noImg);
    setDefaultActiveKey(!defaultActiveKey)
  };

  return (
    <div>
      <Accordion defaultActiveKey={defaultActiveKey}>
        <Accordion.Item eventKey="0">
          <Accordion.Header >
        Añadir nueva receta 
          </Accordion.Header>
          <Accordion.Body >
            <Form onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="URL Img:"
                className="mb-3"
              >
                <Form.Control  type="text" value={img} onChange={handleImg} />
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
                <Button variant="outline-secondary" size="lg" type="submit" >
                  Añadir
                </Button>
              </div>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AddForms;
