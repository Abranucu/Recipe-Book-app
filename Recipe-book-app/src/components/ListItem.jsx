
function ListItem(props) {
  return (
    <div>
      <img src={props.data.image} alt={props.data.name} width="200px" />
      <h4>Nombre: {props.data.name} </h4>
      <p>Calories: {props.data.calories}</p>
      <p>Servings: {props.data.servings}</p>
      <p>Recipes +400Cal: {props.data.calories >= 400 ? "⬆️" : "⬇️"}</p>
    </div>
  );
}

export default ListItem;
