import { useState } from "react";
import UpdateForm from "./UpdateForm";
import Accordion from "react-bootstrap/Accordion";
import Button from 'react-bootstrap/Button';

function ListItem(props) {
  const [isUpdateFormShowing, setIsUpdateFormShowing] = useState(false);
  const handleRemove = (index) => {
    let currentAllRecipesClone = JSON.parse(
      JSON.stringify(props.currentAllRecipes)
    );
    currentAllRecipesClone.splice(index, 1);
    props.setCurrentAllRecipes(currentAllRecipesClone);
  };
  const handleToggleUpdateForm = () =>
    setIsUpdateFormShowing(!isUpdateFormShowing);
  return (
    <div style={{ backgroundColor: "green" }} >
      <Accordion defaultActiveKey="acordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <img
              src={props.eachObject.image}
              alt={props.eachObject.name}
              width="200px"
              style={{marginRight: "20px"}}
            />
            <h1>{props.eachObject.name}</h1>
          </Accordion.Header>
          <Accordion.Body>
            <h4>Nombre: {props.eachObject.name} </h4>
            <p>Calorias: {props.eachObject.calories}</p>
            <p>Raciones: {props.eachObject.servings}</p>
            <p>
              Recetas +400Cal: {props.eachObject.calories >= 400 ? "⬆️" : "⬇️"}
            </p>
            <hr />
            <div className="d-grid gap-2">
                <Button variant="outline-danger" size="lg" onClick={() => handleRemove(props.index)}>
                Borrar
                </Button>
              </div>
            <hr />
            <div className="d-grid gap-2">
                <Button variant="outline-success" size="lg" onClick={handleToggleUpdateForm} style={{marginBottom: "15px"}}>
                Ver Formulario de Editar
                </Button>
              </div>
            {isUpdateFormShowing === true ? (
              <UpdateForm
                eachObject={props.eachObject}
                index={props.index}
                setCurrentAllRecipes={props.setCurrentAllRecipes}
                handleToggleUpdateForm={handleToggleUpdateForm}
              />
            ) : null}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ListItem;
