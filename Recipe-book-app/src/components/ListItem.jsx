function ListItem(props) {
  return (
    <div>
      <img src={props.data.image} alt={props.data.name} width="200px" />
      <h4>Nombre: {props.data.name} </h4>
      <p>Calorias: {props.data.calories}</p>
      <p>Raciones: {props.data.servings}</p>
      <p>Recetas +400Cal: {props.data.calories >= 400 ? "⬆️" : "⬇️"}</p>
    </div>
  );
}

export default ListItem;
