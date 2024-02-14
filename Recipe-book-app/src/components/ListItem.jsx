

function ListItem(data) {
  return (
    <div>
        <img src={data.data.image} alt={data.data.name} width="200px" />
            <h4>Nombre: {data.data.name} </h4>
            <p>Calories: {data.data.calories}</p>
            <p>Servings: {data.data.servings}</p>
            <p>Recipes +400Cal: {data.data.calories >= 400 ? "⬆️" : "⬇️"}</p>
            <button onClick={() => handleRemoveRecipe(data.data.id)}>Borrar</button>
    </div>
  )
}

export default ListItem